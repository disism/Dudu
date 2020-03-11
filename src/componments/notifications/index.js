import React, {useEffect, useState} from "react";
import "./style.scss"
import {getNotifications} from "../../api/request";

function NotificationsComponents() {
    const [data, setData] = useState([{
        status: {},
        type: ""
    }])

    useEffect(() => {
        getNotifications()
            .then(res => {
                setData(res)
            })
    },[])

    console.log(data)
    return (
        <section className="notifications">
            通知
            {data && data.map((items, idx) => {
                return (
                    <div
                        className="notifications-status"
                        key={idx}
                    >
                        <div>{items.created_at}</div>
                        {items.status && <div dangerouslySetInnerHTML={{__html: items.status.content}} />}
                        {items.account && items.account.acct}{items.type === "follow" && <div>关注了你</div>}
                    </div>
                )
            })}
        </section>
    )
}

export default NotificationsComponents