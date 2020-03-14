import React from "react";
import NotificationsComponents from "../../componments/notifications";
import {useHistory} from "react-router-dom";
function HomeNotifications() {
    const history = useHistory()
    return (
        <>
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <NotificationsComponents/>
        </>
    )
}

export default HomeNotifications