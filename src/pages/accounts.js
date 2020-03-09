import React, {useEffect, useState} from "react";
import axios from "axios"

function AccountsPage() {
    const [data, setData] = useState({})
    useEffect(() => {
        axios.get(`https://mastodon.social/api/v1/accounts/verify_credentials`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('dudu_access_token')}`
            }
        })
            .then(res => {
                setData(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    console.log(data)
    return (
        <section style={{margin: `1rem`, color: `white`}}>
            <div>NAME</div>
            <div>{data.display_name}</div>
            <div>头像</div>
            <img src={data.avatar_static} alt="" />
            <div>背景图</div>
            <img src={data.header_static} alt="" />
            <div>最后更新时间</div>
            <div>{data.last_status_at}</div>
            <div>关注人</div>
            <div>{data.followers_count}</div>
            <div>关注</div>
            <div>{data.following_count}</div>
            <div>状态数</div>
            <div>{data.statuses_count}</div>
        </section>
    )
}

export default AccountsPage