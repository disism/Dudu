import React from "react";
import PublicTimelines from "./public-timelines";
import "./style.scss"

function PublicComponent() {
   return (
       <>
           <h1 style={{textAlign: `center`}}>公开的信息流</h1>
           <PublicTimelines/>
       </>
   )
}
export default PublicComponent