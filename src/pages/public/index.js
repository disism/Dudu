import React from "react";
import "./style.scss"
import {useHistory} from "react-router-dom"
import PublicTimelines from "../../componments/public";

const PublicContent = () => {
    const history = useHistory()
    return (
        <section className="public">
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <PublicTimelines />
        </section>
    )
}
function PublicPage() {

    return (
        <>
            <PublicContent />
        </>
    )
}

export default PublicPage