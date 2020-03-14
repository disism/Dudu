import React from "react";
import {useHistory} from "react-router-dom";

function HomeBookmarks() {
    const history = useHistory()
    return (
        <>
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
        </>
    )
}

export default HomeBookmarks