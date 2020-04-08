import React, {useEffect, useReducer } from "react";
import {getHomeTimelines} from "../../api/request";
import "./style.scss"
import DuduStatusComponent from "../status";
import Loading from "../loading";

const initialState = {
    data: [],
    isLoading: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                data: action.payload,
                isLoading: false
            }
        case 'LOADING_TRUE': {
            return {
                data: [],
                isLoading: true
            }
        }
        default:
            return state
    }
}
function HomeTimeLineComponent({status}) {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: 'LOADING_TRUE' })
        getHomeTimelines()
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res })
            })
    },[status])

    return (
        <section className="components-main">
            <div>主页时间线</div>
            {state.isLoading ? <Loading/> : <DuduStatusComponent featchData={state.data} />}
        </section>
    )
}
export default HomeTimeLineComponent