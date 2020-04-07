import React, {useEffect, useReducer } from "react";
import "./style.scss"
import axios from "axios"
import {defaultUrl} from "../../api/config";
import {useHistory} from "react-router-dom";
import AccountsComponent from "./accounts";
import Loading from "../loading";

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
/**
 * 接受路由传过来的参数 props
 * @param props
 * @returns {*}
 * @constructor
 */
function AccountsEntity( props ) {
    const history = useHistory()
    const [state, dispatch] = useReducer(reducer, initialState)
    /**
     * props.match.params.id 是路由传过来的 id , props 来接收
     */
    const id = props.match.params.id

    useEffect(() => {
        dispatch({ type: 'TRUE_LOADING' })
        /***
         * Get Accounts (id)
         * @param id
         */
        axios.get(`${defaultUrl}/api/v1/accounts/${id}/statuses`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
    },[id])

    const acct = state.data[0] && state.data[0].account
    const resdata = state.data

    return (
        <>
            {state.isLoading ? <Loading/> : <section className="accounts-entity">
                <section style={{margin: `1rem 0`}}>
                    <button className="goback-button" onClick={() => history.goBack()}>返回</button>
                </section>
                <AccountsComponent account={acct} data={resdata} />}
            </section>}
            {state.error}
        </>
    )
}

export default AccountsEntity