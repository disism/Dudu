import React, {useEffect, useState} from "react";
import {getHomeFavourites} from "../../api/request";
import DuduStatusComponent from "../status";
import "./style.scss"
import GoBack from "../back";
import Loading from "../loading";

function HomeFavouritesComponent() {
    const [data, setData] = useState([{
        account:{},
        media_attachments: []
    }])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getHomeFavourites()
            .then(res => {
                setData(res)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    console.log(data)
    return (
        <section className="favourites">
            <GoBack/>
            <div>喜欢</div>
            {isLoading ? <Loading/>: <DuduStatusComponent featchData={data} />}
        </section>
    )
}

export default HomeFavouritesComponent