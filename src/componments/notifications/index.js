import React, {useEffect, useState} from "react";
import "./style.scss"
import {getNotifications} from "../../api/request";
import GoBack from "../back";
import Loading from "../loading";
import {useDispatch} from "react-redux";
import {NOTIFICATION_DEFAULT} from "../streaming/notificationSlice";

function NotificationsComponents() {
    const dispatch = useDispatch()
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
                dispatch(NOTIFICATION_DEFAULT())
            })
            .catch(err => {
                console.log(err)
            })
    },[dispatch])

    return (
        <section className="notifications">
            <GoBack/>
            <div>通知</div>
            {isLoading ? <Loading/> : <div>{data && data.map((items, idx) => {
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