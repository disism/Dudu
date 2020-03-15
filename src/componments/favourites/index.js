import React, {useEffect, useState} from "react";
import {getHomeFavourites} from "../../api/request";
import DuduStatusComponent from "../status";
import "./style.scss"
import { useHistory } from "react-router-dom"

function HomeFavouritesComponent() {
    const history = useHistory()
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
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <div>喜欢</div>
            {isLoading ? <div className="loading">Loading...</div> : <DuduStatusComponent featchData={data} />}
        </section>
    )
}

export default HomeFavouritesComponent