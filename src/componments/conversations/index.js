import React, {useEffect, useReducer} from "react";
import {getConversations} from "../../api/request";
import "./style.scss"
import GoBack from "../back";
import Loading from "../loading";

const Conversations = ({featchData}) => {
    return (
        <>
        {featchData && featchData.map((items, idx) => {
            return (
                <div key={idx}>
                    <div className="conversations-status">
                        {console.log(items.last_status)}
                        <p>{items.last_status.created_at}</p>
                        <div dangerouslySetInnerHTML={{__html: items.last_status.content }} />

                    </div>

                    {items.accounts && items.accounts.map((iitems, iidx) => {
                        return (
                            <div key={iidx}>
                                {iitems.acct}
                            </div>
                        )
                    })}
                </div>
            )
        })}
        </>
    )
}

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
        case 'LOADING_TRUE':
            return {
                data: {},
                isLoading: true
            }
        default:
            return state
    }
}
function ConversationsComponent() {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        dispatch({ type: 'LOADING_TRUE' })
        getConversations()
            .then(res => {
                dispatch({ type: 'FETCH_SUCCESS', payload: res })
            })
    },[])

    return (
        <section className="conversations">
            <GoBack/>
            <div>私信</div>
            {state.isLoading ? <Loading/>: <Conversations featchData={state.data} />}
        </section>
    )
}

export default ConversationsComponent