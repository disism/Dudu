import React from "react";
import {useHistory } from "react-router-dom";

import Welcome from "../welcome";

function Verification() {
    const history = useHistory()
    const loginToken = localStorage.getItem('dudu_access_token')

    const goHome = () => {
        return history.push("/home")
    }

    if (loginToken) {
        goHome()
    }


    return (
        <>
            <Welcome/>
        </>
    )
}
export default Verification