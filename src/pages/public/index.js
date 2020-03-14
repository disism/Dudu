import React from "react";
import PublicComponent from "../../componments/public";
import "./public.scss"
import TrendsComponent from "../../componments/trends/trends";
import {useHistory} from "react-router-dom"

function PublicPage() {
    const history = useHistory()
    return (
        <section className="public-layout">
            <section>
                <div className="goback">
                    <button className="goback-button" onClick={() => history.goBack()}>返回</button>
                </div>
                <PublicComponent/>
            </section>
            <section>
                <TrendsComponent/>
            </section>
        </section>
    )
}

export default PublicPage