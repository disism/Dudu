import React from "react";
import PublicTimelines from "./public-timelines";
import "./style.scss"

function PublicComponent() {
   return (
       <section className="public-body">
           <h1>看一看现在在发生什么</h1>
           <PublicTimelines/>
       </section>
   )
}
export default PublicComponent