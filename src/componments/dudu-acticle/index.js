import {Link} from "react-router-dom";
import React from "react";
import "./style.scss"
/*
    <DuduArticle fetchData={} />
 */
const DuduArticle =　({fetchData}) => {
    return (
        <section className="dudu-layout">
            {fetchData.map((items, idx) => {
                return (
                    <div key={idx}>
                        <div className="dudu-conents">
                            <div className="dudu-conents-header">
                                <img src={items.account.avatar} alt="" />
                                <div className="dudu-conents-header-username">
                                    <div>
                                        <Link to={`/account/${items.account.id}/statuses`}>
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
    )
}

export default DuduArticle