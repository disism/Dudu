import React from "react";
import HomeTimeline from "./timelines";
import NewStatusesComponent from "../../componments/statuses";

function HomePage() {

    return (
        <>
            <NewStatusesComponent/>
            <HomeTimeline/>
        </>
    )
}

export default HomePage