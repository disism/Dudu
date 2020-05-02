import React from "react";
import PublicTimelines from "../componments/public";
import GoBack from "../componments/back";

/**
 * 公开时间轴
 * @returns {*}
 * @constructor
 */
function PublicPage() {
    return (
        <section style={{margin: `1rem`}}>
            <GoBack/>
            <PublicTimelines/>
        </section>
    )
}

export default PublicPage