import React, {useEffect, useState} from "react";
import {getTendsData} from "../../api/request";
import "./style.scss"

/***
 * TrendsComponent / 趋势
 * @returns {*}
 * @constructor
 */
function TrendsComponent() {
    const [data, setData] = useState([{history:[]}])

    useEffect(() => {
        getTendsData()
            .then(res => {
                setData(res)
            })
            .catch(err => {
                console.log(err)
            })
    },[])
    /***
     * console.log(data)
     */
    return (
        <>
            <section className="trends">
                <h1 style={{color: `white`}}>趋势</h1>
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