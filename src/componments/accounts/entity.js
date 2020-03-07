import React, {useEffect, useState} from "react";
import {getAccountsEntity} from "../../api/request";

function AccountsEntity( props ) {
    const [data, setData] = useState({})
    console.log(props)
    const id = props.match.params.id
    useEffect(() => {
        getAccountsEntity(id)
            .then(res => {
                setData(res)
            })
            .catch(err => {
                console.log(err)
            })
    },[id])

    console.log(data)
    const fields = data.fields

    return (
        <section style={{color: `white`}}>
            <div>
                <img src={data.header} alt="" />
            </div>
            <div>名字：{data.display_name}</div>
            <div>域：{data.acct}</div>
            <div>
                个人简介：
                <div dangerouslySetInnerHTML={{__html:data.note}}></div>
            </div>
            <div>加入于： {data.created_at}</div>
            <div>
                <img src={data.avatar} alt=""/>
            </div>
            <div>

            </div>
            <div>关注者：{data.followers_count}</div>
            <div>正在关注： {data.following_count}</div>
            <div>嘟文： {data.statuses_count}</div>
            <div>最后更新时间： {data.last_status_at}</div>

            <div>
                领域：
                {fields && fields.map((items, idx) => {
                    return (
                        <div  key={idx}>
                            {items.name} - {items.value}
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default AccountsEntity