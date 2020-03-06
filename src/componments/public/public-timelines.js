import React, {useEffect, useState} from "react";
import axios from "axios"


const siteUrl = 'https://mastodon.social/api/v1/timelines/public'

function PublicTimelines() {
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
            <section className="dudu-layout">
            {data.map((items, idx) => {
                return (
                    <div key={idx}>
                        <div className="dudu-conents">
                            <div className="dudu-conents-header">
                                <img src={items.account.avatar_static} alt="" />
                                <div className="dudu-conents-header-username">
                                    <div>用户名：
                                        <a href={items.account.url}>
                                            {items.account.display_name}
                                        </a>
                                    </div>
                                    <div>@{items.account.acct}</div>
                                </div>
                            </div>
                            <div>嘟文</div>
                            <div dangerouslySetInnerHTML={{__html:items.content}}></div>
                            <a href={items.url}>嘟文链接</a>
                        </div>
                    </div>
                )
            })}
            </section>
        </>
    )
}

export default PublicTimelines