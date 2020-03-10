import React, {useEffect, useState} from "react";
import {getHomeBookmarks} from "../../api/request";
import DuduStatusComponent from "./dudu-status";

function HomeBookmarksComponent() {
    const [data, setData] = useState([{
        account:{},
        media_attachments: []
    }])
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
            <div>收藏夹</div>
            <DuduStatusComponent featchData={data} />
        </section>
    )
}

export default HomeBookmarksComponent