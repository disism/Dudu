import React, {useEffect, useReducer } from "react";
import DuduArticle from "../dudu-acticle";
import axios from "axios"
import {defaultUrl} from "../../api/config";
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
        case 'LOADING_TRUE':
            return {
                data: [],
                error: '',
                isLoading: true
            }
        default:
            return state
    }
}

function PublicTimelines() {
    const [state, dispatch] = useReducer(reducer, initialState)
    useEffect(() => {
        dispatch({ type: 'LOADING_TRUE' })
        axios.get(`${defaultUrl}/api/v1/timelines/public`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
            })
            .catch(err => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    },[])

    return (
        <>
            {state.isLoading ? <Loading/> : <DuduArticle fetchData={state.data}/>}
            {state.error}
        </>
    )
}

export default PublicTimelines