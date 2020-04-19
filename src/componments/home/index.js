import React, {useState} from "react";
import NewStatusesComponent from "../statuses";
import HomeTimeLineComponent from "../timeline";
import "./style.scss"
import Streaming from "../streaming";
import {useSelector} from "react-redux";
import {notificationCount, notificationData} from "../../reducer/notification";
import HeaderComponent from "../header";

const NotificationMessage = () => {
    const data = useSelector(notificationData)
    const dataPayload = data.payload && JSON.parse(data.payload)
    const count = useSelector(notificationCount)
    document.title = data.event === 'notification' ? `您有 ${count} 条新的通知` : 'Dudu'

    const [message] = useState([])

    const isMessage = () => {
        switch (dataPayload && dataPayload.type) {
            case 'follow':
                return message.push(`${dataPayload.account.acct} 关注了你`)
            case 'reblog':
                return  message.push(`${dataPayload.account.acct} 转发了你的嘟文`)
            case 'favourite':
                return  message.push(`${dataPayload.account.acct}收藏了你的嘟文`)
            case 'mention':
                return  message.push(`${dataPayload.account.acct} 提到了你`)
            default:
                return null
        }
    }
    isMessage()


    console.log(message)

    return (
        <section style={{width: `15rem`}}>
            {message && message.map((items, idx) => {
                return (
                    <div key={idx}>
                        <div>{items}</div>
                    </div>
                )
            })}
        </section>
    )
}

function HomeComponent() {
    const data = useSelector(notificationData)
    const count = useSelector(notificationCount)
    const [boo, setBoo] = useState(false)

    const handleBoo = () => {
        setBoo(!boo)
    }

    return (
        <section className="home">
            <section className="home-header">
                <div className="home-header-left">
                    <div>Dudu</div>
                    <div>搜索</div>
                </div>
                <div className="home-header-right">
                    <div className="header-new-notification">
                        {data.event === 'notification' ? count : null}
                    </div>
                    <button onClick={handleBoo}>新嘟文</button>
                </div>
            </section>
            <div className="header-new-statuses">
                {boo && <div>
                    <NewStatusesComponent/>
                    <div onClick={handleBoo}>关闭</div>
                </div>}
            </div>
            <Streaming />
            <section className="home-main">
                <HeaderComponent/>
                <HomeTimeLineComponent />
                <div className="home-message">
                    <h2>MESSAGE</h2>
                    <NotificationMessage />
                </div>
            </section>
        </section>
    )
}

export default HomeComponent