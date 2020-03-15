import React from "react";
import {useHistory} from "react-router-dom"
import PublicTimelines from "../componments/public";

const PublicContent = () => {
    const history = useHistory()

    const publicStyle = {
        margin: `1rem`
    }
    return (
        <section style={publicStyle}>
            <div style={{margin: `1rem 0`}}>
                <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            </div>
            <PublicTimelines/>
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