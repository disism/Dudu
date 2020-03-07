import React, {useEffect, useState} from "react";
import { getPublicTimeline } from "../../api/request";
import {Link} from "react-router-dom";

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
            <section className="dudu-layout">
            {data.map((items, idx) => {
                return (
                    <div key={idx}>
                        <div className="dudu-conents">
                            <div className="dudu-conents-header">
                                <img src={items.account.avatar} alt="" />
                                <div className="dudu-conents-header-username">
                                    <div>
                                        <Link to={`/account/${items.account.id}`}>
                                            {items.account.display_name}
                                        </Link>
                                    </div>
                                    <div className="dudu-conents-header-at">
                                        {items.account.acct}
                                    </div>
                                </div>
                            </div>
                            <div>嘟文</div>
                            <div dangerouslySetInnerHTML={{__html:items.content}}></div>
                            <a href={items.url}>嘟文链接</a>
                            <div>{items.created_at}</div>
                            <div>回复: {items.replies_count}</div>
                            <div>收藏: {items.favourites_count}</div>
                        </div>
                    </div>
                )
            })}
            </section>
        </>
    )
}

export default PublicTimelines