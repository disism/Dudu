import React, {useEffect, useState} from "react";
import {getHomeTimelines} from "../../api/request";
import "./style.scss"
import DuduStatusComponent from "../status";

function HomeTimeLineComponent({status}) {
    const [data, setData] = useState([{
        account:{},
        media_attachments: []
    }])

    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getHomeTimelines()
            .then(res => {
                setData(res)
                setIsLoading(false)
            })
    },[status])

    console.log(data)

    return (
        <section className="components-main">
            <div>主页时间线</div>
            {isLoading ? <div className="loading">Loading...</div> : <DuduStatusComponent featchData={data} />}
        </section>
    )
}
export default HomeTimeLineComponent