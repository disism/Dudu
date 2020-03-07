import React, {useEffect, useState} from "react";
import { getPublicTimeline } from "../../api/request";
import DuduArticle from "../dudu-acticle";


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

    useEffect(() => {
        fetchData()
    },[])

    console.log(data)
    return (
        <>
            <DuduArticle fetchData={data}/>
        </>
    )
}

export default PublicTimelines