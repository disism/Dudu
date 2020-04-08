import React, {useEffect, useState} from "react";
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

function ConversationsComponent() {
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

    return (
        <section className="conversations">
            <GoBack/>
            <div>私信</div>
            {isLoading ? <Loading/>: <Conversations featchData={data} />}
        </section>
    )
}

export default ConversationsComponent