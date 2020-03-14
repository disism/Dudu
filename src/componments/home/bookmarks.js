import React, {useEffect, useState} from "react";
import {getHomeBookmarks} from "../../api/request";
import DuduStatusComponent from "./dudu-status";
import {useHistory} from "react-router-dom";

function HomeBookmarksComponent() {
    const [data, setData] = useState([{
        account:{},
        media_attachments: []
    }])

    const history = useHistory()

    useEffect(() => {
        getHomeBookmarks()
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
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            <div>收藏夹</div>
            <DuduStatusComponent featchData={data} />
        </section>
    )
}

export default HomeBookmarksComponent