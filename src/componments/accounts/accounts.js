import React from "react";
import DuduArticle from "../dudu-acticle";


const AccountsComponent = ({account, data}) => {
    return (
        <>
            <div className="accounts-entity-header-image">
                <img src={account.header} alt="" />
            </div>

            <section className="accounts-entity-content">
                <div className="entity-avatar">
                    <img src={account.avatar} alt=""/>
                </div>
                <div className="accounts-entity-introduction">
                    <div>名字：{account.display_name}</div>
                    个人简介：
                    <div dangerouslySetInnerHTML={{__html:account.note}}></div>
                    <div>加入于： {account.created_at}</div>
                    <div>

                    </div>
                    <div>关注者：{account.followers_count}</div>
                    <div>正在关注： {account.following_count}</div>
                    <div>嘟文： {account.statuses_count}</div>
                    <div>最后更新时间： {account.last_status_at}</div>
                </div>
            </section>
            <section>
                <DuduArticle fetchData={data} />
            </section>
        </>
    )
}


export default AccountsComponent