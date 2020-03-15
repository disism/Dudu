import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import homeWelcomeImage from "../../assets/images/Elephants/Elephant Friend (Greeting).png";
import "./style.scss"
import axios from "axios";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI


function Welcome() {
    const requestUrl= localStorage.getItem('dudu_settings_url')
    const [authorizedUser, setAuthorizedUser] = useState('')
    useEffect(() => {
        const isCode = window.location.search.match(/\?code/)
        if (isCode) return obtainTheToken(isCode)

        console.log(isCode)
    })

    const obtainTheToken = (isCode) => {
        const code = window.location.search.match(/\?code=(.*)/)[1]
        console.log(code)
        axios.post(`${requestUrl}/oauth/token`,{
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code',
            code: code,
            scope: 'read write follow push'
        })
            .then(res => {
                console.log(res)
                localStorage.setItem('dudu_access_token', res.data.access_token)
                WelcomeAccountEntity()
            })
            .catch(err => {
                console.log(`获取令牌失败:${err}`)
            })
    }

    // 验证并返回账户实体
    const WelcomeAccountEntity = () => {
        axios.get(`${requestUrl}/api/v1/accounts/verify_credentials`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('dudu_access_token')}`
            }
        })
            .then(res => {
                setAuthorizedUser(res.data.username)
                return window.location.href = "/#/home"
            })
            .catch(err => {
                console.log(err)
            })
    }
    console.log(authorizedUser)

    return (
        <section className="layout">
            <div style={{
                fontSize: `2.5rem`,
                textAlign: `center`,
                margin: `3rem 0`
            }}>
                欢迎来到 DUDU {authorizedUser && <div>{authorizedUser} 请稍等！</div>}!
            </div>

            <section className="welcome">
                <section className="welcome-image">
                    <img src={homeWelcomeImage} alt="" />
                </section>
                <section className="welcome-inner">
                    <div className="welcome-explore">
                        <div className="welcome-inner-title">看一看现在发生了什么</div>
                        <Link to="public">
                            <button>
                                <div>查看公开的信息流</div>
                            </button>
                        </Link>
                    </div>

                    <div className="welcome-login-registered">
                        <div className="welcome-inner-title">登录 / 注册</div>
                        <Link to="login">
                            <button>登录 / 注册</button>
                        </Link>
                    </div>
                </section>
            </section>
        </section>
    )
}

export default Welcome