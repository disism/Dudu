import React from "react";
import {useHistory} from "react-router-dom";

/**
 * 返回组件，使用 react router 的 useHistory
 * @returns {*}
 * @constructor
 */
function GoBack() {
    const history = useHistory()
    return (
        <>
            <div style={{margin: `1rem 0`}}>
                <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            </div>
        </>
    )
}
export default GoBack