import React, {useEffect, useState} from "react";
import "./style.scss"
import {getNotifications, getSubscribeStatus, subscribeToPushNotifications} from "../../api/request";
import GoBack from "../back";
import Loading from "../loading";

function NotificationsComponents() {
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
            .catch(err => {
                console.log(err)
            })
    },[])

    const handleSubscription = () => {
        const publicKey = 'BGZJBNaLfaQD7GPnsP-gSXcKCFEizkk3Ya_Bg7OIhLg_NlTOLWLHoTchtI4A35yeGa8shuNIYJRoveNW3rZQAbg\n'
        const privateKay = 'ibcRkY24KWfgR4uDvT2qpPUy_PwdOBSc1fNta3p9ib8'
        // console.log(publicKey, privateKay)


        function urlB64ToUint8Array(base64String) {
            const padding = '='.repeat((4 - base64String.length % 4) % 4);
            const base64 = (base64String + padding)
                // eslint-disable-next-line no-useless-escape
                .replace(/\-/g, '+')
                .replace(/_/g, '/');

            const rawData = window.atob(base64);
            const outputArray = new Uint8Array(rawData.length);

            for (let i = 0; i < rawData.length; ++i) {
                outputArray[i] = rawData.charCodeAt(i);
            }
            return outputArray;
        }

        const p256dh = urlB64ToUint8Array(publicKey).toString()
        const auth = urlB64ToUint8Array(privateKay).toString()

        subscribeToPushNotifications({
            subscription: {
                endpoint: 'http://localhost:3000/#/notifications',
                keys:{
                    p256dh: p256dh,
                    auth: auth
                }
            },
            data: {
                alerts: {
                    follow: true,
                    favourite: true,
                    reblog: true,
                    mention: true,
                    poll: true
                }
            }

        })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleCheckSubscribeStatus = () => {
        getSubscribeStatus()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <section className="notifications">
            <GoBack/>
            <button className="button" onClick={handleSubscription}>获取订阅</button>
            <button className="button" onClick={handleCheckSubscribeStatus}>查看订阅状态</button>
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