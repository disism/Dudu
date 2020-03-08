import React, {useEffect, useState} from "react";
import { getPublicTimeline } from "../../api/request";
import DuduArticle from "../dudu-acticle";

/***
 * PublicTimelines Components
 * @returns {*}
 * @constructor
 */

function PublicTimelines() {
    const [data, setData] = useState([])

    const fetchData = async () => {
        try {
            const res = await getPublicTimeline()
            setData(res)
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

    /***
     * console.log(data)
     * Public Timeline Data
     */
    return (
        <>
            {/* 调用 Duduarticle 把 data 数据传给 fetchData */}
            <DuduArticle fetchData={data}/>
        </>
    )
}

export default PublicTimelines