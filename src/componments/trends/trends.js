import React, {useEffect, useState} from "react";
import "./style.scss"
import axios from "axios"
import {defaultUrl} from "../../api/config";
/***
 * TrendsComponent / 趋势
 * @returns {*}
 * @constructor
 */
function TrendsComponent() {
    const [data, setData] = useState([{history:[]}])

    useEffect(() => {
        /***
         * Get Tends Data
         */
        axios.get(`${defaultUrl}/api/v1/trends`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

     // console.log(data)
    return (
        <>
            <section className="trends">
                <h1 style={{textAlign: `center`, marginTop: `1rem`}}>趋势</h1>
                {data.map((items, idx) => {
                    return (
                        <div key={idx}>
                            <div className="trends-link">
                                <a href={items.url}>{items.name}</a>
                            </div>
                        </div>
                    )
                })}
            </section>
        </>
    )
}

export default TrendsComponent