import React, {useEffect, useState} from "react";
import "../assets/scss/login.scss"
import {postAuthenticationToken, postRegisterApplication} from "../api/request";

/***
 * Login Page, Input domain -> login OAuth2
 * @returns {*}
 * @constructor
 */
function LoginPage() {
    const [token, setToken] = useState('')

    useEffect(() => {
        postRegisterApplication()
            .then(res => {
                postAuthenticationToken(res.client_id, res.client_secret)
                    .then(tokenRes => {
                        setToken(tokenRes)
                    })
                    .catch(err => {
                        console.log(`获取 TOKEN 失败${err}`)
                    })
            })
            .catch(err => {
                console.log(`请求 TOKEN 失败${err}`)
            })
    },[])

    console.log(token)
    return (
        <>
            <section style={{color: `white`, fontSize: `2rem`}}>
                <OAuthLogin/>
            </section>
        </>
    )
}

function OAuthLogin() {
    return (
        <section className="input-domain">
            <div>输入实例地址</div>
            <input />
        </section>
    )
}

export default LoginPage