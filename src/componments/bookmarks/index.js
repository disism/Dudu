import React, {useEffect, useState} from "react";
import {getHomeBookmarks} from "../../api/request";
import DuduStatusComponent from "../home/dudu-status";
import {useHistory} from "react-router-dom";
import "./style.scss"

function HomeBookmarksComponent() {
    const [data, setData] = useState([{
        account:{},
        media_attachments: []
    }])

    const [isLoading, setIsLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {
        getHomeBookmarks()
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
        <section className="bookmarks">
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <div>收藏夹</div>
            {isLoading ? <div className="loading">Loading...</div> : <DuduStatusComponent featchData={data} />}
        </section>
    )
}

export default HomeBookmarksComponent