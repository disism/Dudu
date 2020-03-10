import React, {useEffect, useState} from "react";
import DuduArticle from "../dudu-acticle";
import axios from "axios"
import {defaultUrl} from "../../api/config";
/***
 * PublicTimelines Components
 * @returns {*}
 * @constructor
 */

function PublicTimelines() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            /***
             * Get Public Data Timelines
             */
            const res = await axios.get(`${defaultUrl}/api/v1/timelines/public`)
            setData(res.data)
        } catch (err) {
            console.log(err)
        }
    }

    /***
     * useEffect use async/await
     */
    useEffect(() => {
        fetchData()
    },[])

    // console.log(data)

    return (
        <>
            {/* 调用 Duduarticle 把 data 数据传给 fetchData */}
            <DuduArticle fetchData={data}/>
        </>
    )
}

export default PublicTimelines