import React from "react";
import PublicTimelines from "../componments/public";
import GoBack from "../componments/back";

function PublicPage() {

    const publicStyle = {
        margin: `1rem`
    }
    return (
        <section style={publicStyle}>
            <GoBack/>
            <PublicTimelines/>
        </section>
    )
}

export default PublicPage