import React, {useEffect, useState} from "react";
import {getHomeFavourites} from "../../api/request";
import DuduStatusComponent from "./dudu-status";

function HomeFavouritesComponent() {
    const [data, setData] = useState([{
        account:{},
        media_attachments: []
    }])
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
        <section className="components-main">
            <div>喜欢</div>
            <DuduStatusComponent featchData={data} />
        </section>
    )
}

export default HomeFavouritesComponent