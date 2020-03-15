import React, {useEffect, useState} from "react";
import DuduArticle from "../dudu-acticle";
import axios from "axios"
import {defaultUrl} from "../../api/config";

function PublicTimelines() {
    const [data, setData] = useState([])
    const [isloading, setIsLoading] = useState(true)

    useEffect(() => {
        axios.get(`${defaultUrl}/api/v1/timelines/public`)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    // console.log(data)

    return (
        <>
            {isloading ? <div className="loading">Loading ...</div> : <DuduArticle fetchData={data}/>}
        </>
    )
}

export default PublicTimelines