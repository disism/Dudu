import React, {useEffect, useState} from "react";
import axios from "axios"

const siteUrl = 'https://mastodon.social/api/v1/timelines/public'

function PublicDta() {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(siteUrl)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    console.log(data)
    return (
        <>
            <h1>看一看现在在发生什么</h1>
            {data.map((items, idx) => {
                return (
                    <div key={idx}>
                        <div dangerouslySetInnerHTML={{__html:items.content}}></div>
                        <img src={items.account.avatar_static} alt="" />
                        ID：{items.account.username}
                        用户名：{items.account.display_name}
                    </div>
                )
            })}
        </>
    )
}

export default PublicDta