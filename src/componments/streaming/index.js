import React, {useEffect, useState} from "react";

function Streaming() {
    const [event] = useState([])
    const access_token = localStorage.getItem('dudu_access_token')
    const streamApiUrl = localStorage.getItem('dudu_settings_url').replace('https://', 'wss://')

    useEffect(() => {
        const ws = new WebSocket(`${streamApiUrl}/api/v1/streaming/?stream=user&access_token=${access_token}&user`)
        // 链接成功
        ws.onopen = () => {
            console.log('连接服务端WebSocket成功');
        };

        // 监听服务端消息(接收消息)
        ws.onmessage = e => {
            event.push(e.data)
            document.title = `DUDU ${event.length} 条新消息！`
        };

        // 监听连接失败
        ws.onerror = () => {
            console.log('连接失败，正在重连...');

        };

        // 监听连接关闭
        ws.onclose = () => {
            console.log('连接关闭');
        };

    },[streamApiUrl, access_token, event])

    return (
        <>
        </>
    )
}

export default Streaming