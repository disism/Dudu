import React from "react";
import PublicComponent from "../../componments/public";
import "../../assets/scss/public.scss"
import TrendsComponent from "../../componments/trends/trends";

/***
 * Mastodon Publoc Page Components
 * @returns {*}
 * @constructor
 */
function PublicPage() {

    return (
        <section className="public-layout">
            <section>
                <PublicComponent/>
            </section>
            <section>
                <TrendsComponent/>
            </section>
        </section>
    )
}

export default PublicPage