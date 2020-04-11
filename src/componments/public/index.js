import React, {useEffect, useReducer, useState} from "react";
import axios from "axios"
import {defaultUrl} from "../../api/config";
import Loading from "../loading";
import PublicArticle from "./public-article";

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
    const [idx, setIdx] = useState('')
    const [loadMoreResultArray, setLoadMoreResultArray] = useState([])
    const [loadMoreLoading, setLoadMoreLoading] = useState(false)

    useEffect(() => {
        dispatch({ type: 'LOADING_TRUE' })
        axios.get(`${defaultUrl}/api/v1/timelines/public`)
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
                setIdx(res.data)
                setLoadMoreResultArray([...res.data])
            })
            .catch(() => {
                dispatch({ type: 'FETCH_ERROR' })
            })
    },[])

    const handleLoadMoreTimeline = () => {
        setLoadMoreLoading(true)
        const maxId = idx[0] && idx[state.data.length - 1].id
        axios.get(`${defaultUrl}/api/v1/timelines/public`,{
            params: {
                params: {
                    "max_id": maxId
                }
            }
        })
            .then(res => {
                loadMoreResultArray.push(res.data)
                setIdx(res.data)
                setLoadMoreLoading(false)
            })
            .catch(res => {
                console.log(res)
            })

    }

    const loadMoreData = loadMoreResultArray.flat(1)

    return (
        <>
            {state.isLoading
                ?
                <Loading/>
                :
                <PublicArticle fetchData={loadMoreData}/>
            }
            <button
                className="button"
                type="button"
                onClick={handleLoadMoreTimeline}
            >
                {loadMoreLoading ? 'Loading...' : '加载更多'}
            </button>
            {state.error}
        </>
    )
}

export default PublicTimelines