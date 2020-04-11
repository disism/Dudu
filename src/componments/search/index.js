import React, {useEffect, useState} from "react";
import {search} from "../../api/request";
import GoBack from "../back";
import "./style.scss"
import Loading from "../loading";

function SearchCompoent() {
    const [data, setData] = useState({})
    const [queryValue, setQueryValue] = useState(null)
    const [queryChangValue, setQueryChangValue] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        search(queryValue)
            .then(res => {
                setData(res)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    },[queryValue])

    const handleSearchValue = (e) => {
        e.preventDefault()
        setQueryValue(queryChangValue)
    }
    return (
        <section className="search">
            <section>
                <GoBack />
                <h2>SEARCH</h2>
            </section>

            <section className="search-form">
                <form onSubmit={handleSearchValue}>
                    <input
                        type="text"
                        value={queryChangValue}
                        onChange={e => setQueryChangValue(e.target.value)}
                    />
                    <button type="submit">搜索</button>
                </form>
            </section>

            {
            isLoading
                ?
            <Loading/>
                :
            <section className="search-result">
                <section className="accounts">
                    <h3>账户</h3>
                    {data.accounts && data.accounts.map((items, idx) => {
                        return (
                            <div
                                className="account-items"
                                key={idx}>
                                <p>{items.id}</p>
                                <p>{items.username}</p>
                                <p>{items.acct}</p>
                                <p>{items.display_name}</p>
                            </div>
                        )
                    })}
                </section>
                <section className="statuses">
                    <h3>嘟文</h3>
                    {data.statuses && data.statuses.map((items, idx) => {
                        return (
                            <div key={idx}>
                                <p>发布者：{items.account.display_name}</p>
                                <p>发布时间：{items.created_at}</p>
                                <div>发布内容： <div dangerouslySetInnerHTML={{__html: items.content}}/></div>
                                <p>嘟文链接： <a href={items.url}>链接</a></p>
                            </div>
                        )
                    })}
                </section>
                <section className="hashtags">
                    <h3>话题标签</h3>
                    {data.hashtags && data.hashtags.map((items, idx) => {
                        return (
                            <div key={idx}>
                                <a href={items.url}>{items.name}</a>
                            </div>
                        )
                    })}
                </section>
            </section>
            }
        </section>
    )
}

export default SearchCompoent