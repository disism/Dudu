import React, {useEffect, useState} from "react";
import {getHomeTimelines} from "../../api/request";
import "./style.scss"
import DuduStatusComponent from "./dudu-status";

function HomeTimeLineComponent() {
    const [data, setData] = useState([{
        account:{},
        media_attachments: []
    }])


    useEffect(() => {
        getHomeTimelines()
            .then(res => {
                setData(res)
            })
    },[])

    console.log(data)

    return (
        <section className="components-main">
            <div>主页时间线</div>
            <DuduStatusComponent featchData={data} />
        </section>
    )
}
export default HomeTimeLineComponent