import React from "react";
import ConversationsComponent from "../../componments/conversations";
import {useHistory} from "react-router-dom"

function HomeConversations() {
    const history = useHistory()
    return (
        <>
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <ConversationsComponent/>
        </>
    )
}

export default HomeConversations