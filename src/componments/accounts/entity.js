import React, {useEffect, useState} from "react";
import DuduArticle from "../dudu-acticle";
import "./style.scss"
import axios from "axios"
import {defaultUrl} from "../../api/config";
import {useHistory} from "react-router-dom";

/**
 * 接受路由传过来的参数 props
 * @param props
 * @returns {*}
 * @constructor
 */
function AccountsEntity( props ) {
    const history = useHistory()
    const [data, setData] = useState(
        [
            {
                account: {}
            }
        ]
    )
    /**
     * props.match.params.id 是路由穿过来的 id , props 来接收
     */
    const id = props.match.params.id

    useEffect(() => {
        /***
         * Get Accounts (id)
         * @param id
         */
        axios.get(`${defaultUrl}/api/v1/accounts/${id}/statuses`)
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[id])


    const account = data[0].account

    return (
        <section className="accounts-entity">
            <button className="goback-button" onClick={() => history.goBack()}>返回</button>
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
        </section>
    )
}

export default AccountsEntity