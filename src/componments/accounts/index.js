import React, {useEffect, useReducer } from "react";
import "./style.scss"
import axios from "axios"
import {defaultUrl} from "../../api/config";
import AccountsComponent from "./accounts";
import Loading from "../loading";
import GoBack from "../back";

const initialState = {
    data: [],
    error: '',
    isLoading: true
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                data: action.payload,
                error: '',
                isLoading: false
            }
        case 'FETCH_ERROR':
            return {
                data: [],
                error: '出现了一些错误，或许您应该使用代理访问！',
                isLoading: false
            }
        case 'TRUE_LOADING': {
            return {
                data: [],
                error: '',
                isLoading: true
            }
        }
        default:
            return state
    }
}

function AccountsEntity( props ) {

    const [state, dispatch] = useReducer(reducer, initialState)
    /**
     * 接受路由传过来的参数 props
     * props.match.params.id 是路由传过来的 id
     */
    const id = props.match.params.id

    useEffect(() => {
        dispatch({ type: 'TRUE_LOADING' })
        axios.get(`${defaultUrl}/api/v1/accounts/${id}/statuses`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(() => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    },[id])

    const acct = state.data[0] && state.data[0].account
    const resData = state.data && state.data

    const accountsStyle = {
        margin: `1rem`
    }
    return (

        <section style={accountsStyle}>
            <GoBack/>
            {state.isLoading ? <Loading/> :
                <section className="accounts-entity">
                    <AccountsComponent account={acct} data={resData} err={state.error} />
                </section>
            }
        </section>
    )
}

export default AccountsEntity