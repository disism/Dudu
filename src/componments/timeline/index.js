import React, {useEffect, useReducer, useState} from "react";
import {getHomeTimelines} from "../../api/request";
import "./style.scss"
import DuduStatusComponent from "../status";
import Loading from "../loading";
import LoadmoreLoading from "../loading/loadmore-loading";
import {useSelector} from "react-redux";
import {notificationData} from "../../reducer/notification";

const initialState = {
    loadMoreLoading: false,
    isLoading: true
}
const reducer = (state, action) => {
    switch (action.type) {
        case 'LOADMORE_TRUE':
            return {
                loadMoreLoading: true
            }
        case 'LOAMORE_FALSE':
            return {
                loadMoreLoading: false
            }
        case 'ISLOADING_FALSE':
            return {
                isLoading: false
            }
        default:
            return state
    }
}
function HomeTimeLineComponent() {
    const [state, dispatch] = useReducer(reducer, initialState)

    const [idx, setIdx] = useState('')
    const data = useSelector(notificationData)
    const [loadMoreResultArray, setLoadMoreResultData] = useState([])

    useEffect(() => {
        const getStatueesData = async () => {
            await getHomeTimelines('')
                .then(res => {
                    dispatch({ type: 'ISLOADING_FALSE' })
                    setIdx(res)
                    setLoadMoreResultData([...res])
                })
                .catch(res => {
                    console.log(`${res} 获取主页数据失败！`)
                })
        }
        getStatueesData()
    },[data, dispatch])

    const handleLoadMoreTimeline = () => {
        dispatch({ type: 'LOADMORE_TRUE' })
        const maxId = idx[0] && idx[loadMoreResultArray.length - 1].id
        getHomeTimelines(`${maxId}`)
            .then(res => {
                /**
                 * 加载更多 Push 数组中
                 */
                loadMoreResultArray.push(res)
                setIdx(res)
                dispatch({ type: 'ISLOADING_FALSE' })
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
                {state.loadMoreLoading ? <LoadmoreLoading /> : '加载更多'}
            </button>
        </section>
        </>
    )
}

export default HomeTimeLineComponent