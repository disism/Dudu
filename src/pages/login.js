import React, {useEffect, useState} from "react";
import "../assets/scss/login.scss"
import {
    getVerifyCredentials,
    postAuthenticationToken,
    postRegisterApplication, postUserAuthToken
} from "../api/request";

/***
 * Login Page, Input domain -> login OAuth2
 * @returns {*}
 * @constructor
 */
function LoginPage() {
    const [regData, setRegData] = useState({})

    useEffect(() => {
        postRegisterApplication()
            .then(res => {
                setRegData(res)
                postAuthenticationToken(res.client_id, res.client_secret)
                    .then(tokenRes => {
                        const localToken = localStorage.getItem('dudu')
                        // 如果没有这个 Token 就保存一个叫 dudu 的 token
                        if (!localToken) {
                            console.log('NO TOKEN NOW IS SAVE')
                            localStorage.setItem("dudu",tokenRes.access_token)
                        } else {
                            getVerifyCredentials(localToken)
                                .then(res => {
                                    console.log(res)
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }

                    })
                    .catch(err => {
                        console.log(`获取 TOKEN 失败${err}`)
                    })
            })
            .catch(err => {
                console.log(`注册客户端失败${err}`)
            })

        const cli_token = localStorage.getItem('dudu')
        const suer_token = 'Pc07201mPRHeZbVHkpWfhzaTpJBdbw9FZ1YDEsBYJ80'

        postUserAuthToken(regData.client_id, regData.client_secret, cli_token, suer_token)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })

    },[])


    return (
        <>
            <section style={{color: `white`, fontSize: `2rem`}}>
                授权：
                <a href={`https://mastodon.social/oauth/authorize?redirect_uri=${regData.redirect_uri}&response_type=code&client_id=${regData.client_id}&scope=read`}>授权</a>
            </section>
        </>
    )
}

export default LoginPage