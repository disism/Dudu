import React from "react";
import "./style.scss"
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {notificationCount, notificationData} from "../streaming/notificationSlice";

function HeaderComponent() {
    const count = useSelector(notificationCount)
    const data = useSelector(notificationData)

    const handleLogout = () => {
        localStorage.removeItem('dudu_access_token')
        window.location.href="/"
    }

    return (
        <>
            <header className="header">
                <Link to="/home">首页</Link>
                <Link to="/favourites">喜欢</Link>
                <Link to="/bookmarks">收藏</Link>
                <Link to="/conversations">私信</Link>
                <Link to="/notifications">
                    通知
                    {data.event === 'notification' ? count : null}
                </Link>
                <Link to="/search">搜索</Link>
                <Link to="/public">公开时间轴</Link>
                <button type="button" onClick={handleLogout}>退出</button>
            </header>
        </>
    )
}

export default HeaderComponent