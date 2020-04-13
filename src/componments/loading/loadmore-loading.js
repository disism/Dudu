import React from "react";
import "./style.scss"

const LoadmoreLoading = () => {
    return (
        <div className="loadmore-loading-style">
            <svg viewBox="0 0 50 50">
                <circle className="ring" cx="25" cy="25" r="20"></circle>
                <circle className="ball" cx="25" cy="5" r="3.5"></circle>
            </svg>
        </div>
    )
}

export default LoadmoreLoading