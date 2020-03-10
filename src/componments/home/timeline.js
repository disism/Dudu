import React, {useEffect, useState} from "react";
import {getHomeTimeline} from "../../api/request";
import "./style.scss"
import {Link} from "react-router-dom";

function HomeTimeLineComponent() {
    const [data, setData] = useState([{
        account:{},
        media_attachments: []
    }])
    useEffect(() => {
        getHomeTimeline()
            .then(res => {
                setData(res)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    console.log(data)

    return (
        <section className="timeline">
            <div>主页时间线</div>
            {data && data.map((items, idx) => {
                return (
                    <div key={idx}>
                        <section className="timeline-status">
                            <div>{items.created_at}</div>
                            <div className="timeline-status-avatar">
                                <img src={items.account.avatar} alt="" />
                            </div>
                            <Link to={`/account/${items.account.id}/statuses`}>
                                {items.account.display_name}@{items.account.acct}
                            </Link>

                            <div dangerouslySetInnerHTML={{__html: items.content}}/>
                            <section className="timeline-status-image-item">
                            {items.media_attachments && items.media_attachments.map((item, idxx) => {
                                return (
                                    <div key={idxx}>
                                        <img src={item.url} alt=" " />
                                    </div>
                                )
                            })}
                            </section>
                            {!items.reblog ? null : <div>转推了</div>}
                            <section className="timeline-status-image-item">
                                {items.reblog && items.reblog.media_attachments.map((items, idx) => {
                                    return (
                                        <div key={idx}>
                                            <img src={items.url} alt="" />
                                        </div>
                                    )
                                })}
                            </section>
                            <div>
                                Like: {items.favourites_count} ·
                                回复： {items.replies_count} ·
                                转发： {items.reblogs_count} ·
                            </div>
                        </section>
                    </div>
                )
            })}
        </section>
    )
}
export default HomeTimeLineComponent