import React from "react";
import {Link} from "react-router-dom";

/***
 * 作为状态的组件
 * @param featchData
 * @returns {*}
 * @constructor
 */
function DuduStatusComponent({featchData}) {
    return (
        <>
            {featchData && featchData.map((items, idx) => {
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
        </>
    )
}

export default DuduStatusComponent