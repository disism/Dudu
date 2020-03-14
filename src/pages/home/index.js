import React from "react";
import HomeTimeline from "./timelines";
import NewStatusesComponent from "../../componments/statuses";
import HeaderComponent from "../../componments/header";

function HomePage() {

    return (
        <>
            <HeaderComponent/>
            <NewStatusesComponent/>
            <HomeTimeline/>
        </>
    )
}

export default HomePage