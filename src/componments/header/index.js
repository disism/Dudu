import React from "react";
import "./style.scss"
import {Link} from "react-router-dom";

function HeaderComponent() {
    return (
        <header className="header">
            <Link to="/home">首页</Link>
            <Link to="/favourites">喜欢</Link>
            <Link to="/bookmarks">收藏</Link>
            <Link to="/conversations">私信</Link>
            <Link to="/notifications">通知</Link>
            <Link to="/public">公开时间轴</Link>
        </header>
    )
}

export default HeaderComponent