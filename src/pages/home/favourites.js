import React, {useEffect, useState} from "react";
import {getHomeFavourites} from "../../api/request";

function HomeFavourites() {
    const [data, setData] = useState({})
    useEffect(() => {
        getHomeFavourites()
            .then(res => {
                setData(res)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(data)
    return (
        <>

        </>
    )
}

export default HomeFavourites