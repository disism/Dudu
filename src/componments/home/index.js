import React from "react";
import NewStatusesComponent from "../statuses";
import HomeTimeLineComponent from "../timeline";
import "./style.scss"

function HomeComponent() {
    return (
        <section className="home">
            <NewStatusesComponent />
            <HomeTimeLineComponent />
        </section>
    )
}

export default HomeComponent