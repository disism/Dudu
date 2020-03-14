import React from "react";
import HomeFavouritesComponent from "../../componments/home/favourites";
import { useHistory } from "react-router-dom"

function HomeFavourites() {

    const history = useHistory()
    return (
        <>
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <HomeFavouritesComponent/>

        </>
    )
}

export default HomeFavourites