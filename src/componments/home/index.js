import React from "react";
import NewStatusesComponent from "../statuses";
import HomeTimeLineComponent from "../timeline";
import "./style.scss"
import Streaming from "../streaming";
import {useSelector} from "react-redux";
import {notificationCount, notificationData} from "../streaming/notificationSlice";

const NotificationMessage = () => {
    const data = useSelector(notificationData)
    const dataPayload = data.payload && JSON.parse(data.payload)
    const count = useSelector(notificationCount)

    document.title = data.event === 'notification' ? `您有 ${count} 条新的通知` : 'Dudu'

    window.addEventListener('load', function () {
        Notification.requestPermission(function (status) {
            if (Notification.permission !== status) {
                Notification.permission = status;
            }
        });
    });

    const SWITCH = () => {
        switch (dataPayload && dataPayload.type) {
            case 'follow':
                return <p>{dataPayload.account.acct}关注了你</p>
            case 'reblog':
                return  <p>{dataPayload.account.acct}转发了你的嘟文</p>
            case 'favourite':
                return  <p>{dataPayload.account.acct}收藏了你的嘟文</p>
            case 'mention':
                return  <p>{dataPayload.account.acct}提到了你</p>
            default:
                return null
        }
    }


    return (
        <section>
            <SWITCH />
            {data.event === 'update' ? '有新的推文' : null}
        </section>
    )
}
function HomeComponent() {
    return (
        <section className="home">
            <NewStatusesComponent />
            <NotificationMessage />
            <HomeTimeLineComponent />
            <Streaming />
        </section>
    )
}

export default HomeComponent