import React, {useEffect, useState} from "react";
import "./style.scss"
import {getNotifications} from "../../api/request";
import {useHistory} from "react-router-dom";

function NotificationsComponents() {
    const history = useHistory()
    const [data, setData] = useState([{
        status: {},
        type: ""
    }])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getNotifications()
            .then(res => {
                setData(res)
                setIsLoading(false)
            })
    },[])

    console.log(data)
    return (
        <section className="notifications">
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <div>通知</div>
            {isLoading ? <div className="loading">Loading...</div> : <div>{data && data.map((items, idx) => {
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
            })}</div>}
        </section>
    )
}

export default NotificationsComponents