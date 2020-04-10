import React from "react";
import HomeTimeLineComponent from "../timeline";
import NewStatusesComponent from "../statuses";

function HomeComponent() {
    return (
        <>
            <NewStatusesComponent />
            <HomeTimeLineComponent />
        </>
    )
}

export default HomeComponent