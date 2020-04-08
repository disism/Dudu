import React from "react";
import {Link} from "react-router-dom";
import "./style.scss"

/***
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
                        <div className="timeline-status-avatar">
                            <img src={items.account.avatar} alt="" />
                        </div>

                        <div className="account-id">
                            <Link to={`/account/${items.account.id}/statuses`}>
                                {items.account.display_name}@{items.account.acct}
                            </Link>
                        </div>

                        <div className="status-content" dangerouslySetInnerHTML={{__html: items.content}}/>
                        <section className="timeline-status-image-item">
                            {items.media_attachments && items.media_attachments.map((item, idxx) => {
                                return (
                                    <div key={idxx}>
                                        <img src={item.url} alt=" " />
                                    </div>
                                )
                            })}
                        </section>
                        {!items.reblog ? null : <span className="reblog">转推了</span>}
                        <section className="timeline-status-image-item">
                            {items.reblog && items.reblog.media_attachments.map((items, idx) => {
                                return (
                                    <div key={idx}>
                                        <img src={items.url} alt="" />
                                    </div>
                                )
                            })}
                        </section>
                        <div className="created_at">{items.created_at}</div>
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