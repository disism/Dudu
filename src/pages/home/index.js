import React from "react";
import HomeTimeline from "./timelines";
import {Link} from "react-router-dom";
import HomeFavourites from "./favourites";

function HomePage() {

    return (
        <>
            <Link to="/favourites">Favourites</Link>
            <HomeFavourites/>
            <HomeTimeline/>
        </>
    )
}

export default HomePage