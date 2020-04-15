import React, {useEffect, useReducer, useState} from "react";
import {getHomeTimelines} from "../../api/request";
import "./style.scss"
import DuduStatusComponent from "../status";
import Loading from "../loading";
import LoadmoreLoading from "../loading/loadmore-loading";
import {useSelector} from "react-redux";
import {notificationData} from "../streaming/notificationSlice";

const initialState = {
    data: [],
    isLoading: false,
    moreLoad: false
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                data: action.payload,
                isLoading: false,
                moreLoad: false
            }
        case 'LOADING_TRUE': {
            return {
                data: [],
                isLoading: true,
                moreLoad: false
            }
        }
        default:
            return state
    }
}

function HomeTimeLineComponent() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [idx, setIdx] = useState('')
    const [loadMoreResultArray, setLoadMoreResultArray] = useState([])
    const [loadMoreLoading, setLoadMoreLoading] = useState(false)

    const data = useSelector(notificationData)

    useEffect(() => {
        dispatch({ type: 'LOADING_TRUE' })
        getTimeLine()
    },[])

    const getTimeLine = () => {
        getHomeTimelines('')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res })
                setIdx(res)
                setLoadMoreResultArray([...res])
            })
            .catch(res => {
                console.log(`${res} 获取主页数据失败！`)
            })
    }

    if(data.event === 'update') {
        getTimeLine()
    }

    const handleLoadMoreTimeline = () => {
        setLoadMoreLoading(true)
        const maxId = idx[0] && idx[state.data.length - 1].id
        getHomeTimelines(`${maxId}`)
            .then(res => {
                loadMoreResultArray.push(res)
                setIdx(res)
                setLoadMoreLoading(false)
            })
    }

    const loadMoreData = loadMoreResultArray.flat(1)

    return (
        <>
        <section className="components-main">
            <div>主页时间线</div>
            {
                state.isLoading
                ?
                <Loading />
                :
                <DuduStatusComponent featchData={loadMoreData}/>
            }
            <button
                className="button"
                type="button"
                onClick={handleLoadMoreTimeline}
            >
                {loadMoreLoading ? <LoadmoreLoading /> : '加载更多'}
            </button>
        </section>
        </>
    )
}

export default HomeTimeLineComponent