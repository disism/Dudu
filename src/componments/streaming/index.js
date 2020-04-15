import React, {useEffect} from "react";
import {useDispatch} from "react-redux";
import {NOTIFICATION_DATA, NOTIFICATION_INCREMENT} from "./notificationSlice";

function Streaming() {
    const dispatch = useDispatch()

    const access_token = localStorage.getItem('dudu_access_token')
    const streamApiUrl = localStorage.getItem('dudu_settings_url').replace('https://', 'wss://')

    useEffect(() => {
        const ws = new WebSocket(`${streamApiUrl}/api/v1/streaming/?stream=user&access_token=${access_token}&user`)
        // 链接成功
        /**
         * 暂时使用原生的 WebSocket 方案
         */
        ws.onopen = () => {
            console.log('连接服务端WebSocket成功');
        };

        // 监听服务端消息(接收消息)
        ws.onmessage = e => {
            dispatch(NOTIFICATION_INCREMENT())
            dispatch(NOTIFICATION_DATA(JSON.parse(e.data)))
        };

        // 监听连接失败
        ws.onerror = () => {
            console.log('连接失败，正在重连...');

        };

        // 监听连接关闭
        ws.onclose = () => {
            console.log('连接关闭');
        };

    },[streamApiUrl, access_token, dispatch])

    return (
        <></>
    )
}

export default Streaming