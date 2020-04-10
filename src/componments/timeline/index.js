import React, {useEffect, useReducer, useState} from "react";
import {getHomeTimelines} from "../../api/request";
import "./style.scss"
import DuduStatusComponent from "../status";
import Loading from "../loading";

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
        case  'LOAD_MORE_SUCCESS':
            return {
                data: [],
                isLoading: false,
                moreLoad: true
            }
        default:
            return state
    }
}
function HomeTimeLineComponent() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [loadData, setLoadData] = useState([])
    const [idx, setIdx] = useState('')

    useEffect(() => {
        dispatch({ type: 'LOADING_TRUE' })
        getHomeTimelines('')
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res })
                setIdx(res)
            })
    },[])

    const handleLoadMoreTimeline = () => {
        const maxId = idx[0] && idx[state.data.length - 1].id
        getHomeTimelines(`${maxId}`)
            .then(res => {
                setLoadData(res)
                setIdx(res)
            })
    }
    // console.log(loadData)
    const LoadStatus = ({loadData}) => {
        return <DuduStatusComponent featchData={loadData} />
    }

    return (
        <>
        <section className="components-main">
            <div>主页时间线</div>


            {state.data
                &&
                <section>
                    <DuduStatusComponent featchData={state.data} />
                    <button type="button" onClick={handleLoadMoreTimeline}>加载更多</button>
                </section>
            }
            {loadData ?
                <LoadStatus loadData={loadData}/>
                :
                null
            }
        </section>
        <Loading/>
        </>
    )
}
export default HomeTimeLineComponent