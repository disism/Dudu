import React, {useEffect, useState} from "react";
import {getConversations} from "../../api/request";
import "./style.scss"
import {useHistory} from "react-router-dom"

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
function ConversationsComponent() {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(true)
    const [data, setData] = useState([{
        last_status: {}
    }])

    useEffect(() => {
        getConversations()
            .then(res => {
                setData(res)
                setIsLoading(false)
            })
    },[])

    // console.log(data)
    return (
        <section className="conversations">
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <div>私信</div>
            {isLoading ? <div className="loading">Loading...</div> : <Conversations featchData={data} />}
        </section>
    )
}

export default ConversationsComponent