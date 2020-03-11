import React, {useEffect, useState} from "react";
import {getConversations} from "../../api/request";
import "./style.scss"

function ConversationsComponent() {
    const [data, setData] = useState([{
        last_status: {}
    }])

    useEffect(() => {
        getConversations()
            .then(res => {
                setData(res)
            })
    },[])

    // console.log(data)
    return (
        <section className="conversations">
            <div>私信</div>
            {data && data.map((items, idx) => {
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
        </section>
    )
}

export default ConversationsComponent