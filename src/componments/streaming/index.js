import React from "react";
import {getStreamingHealth, getStreamingUser} from "../../api/request";

function Streaming() {
    const handleCheckStreamingHealth = () => {
        getStreamingHealth()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleGetStreamingUser = () => {
        getStreamingUser()
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <button className="button" onClick={handleCheckStreamingHealth}>查看流状态</button>
            <button className="button" onClick={handleGetStreamingUser}>查看用户流</button>
        </>
    )
}

export default Streaming