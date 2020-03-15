import React, {useEffect, useState} from "react";
import axios from "axios"
import "./login.scss"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

function LoginPage() {
    const [example, setExample] = useState('mastodon.social')
    const [authorizedUser, setAuthorizedUser] = useState('')
    const requestUrl = `https://${example}`

    const handleAuthorizeTheUser = () => {
        localStorage.setItem('dudu_settings_url', requestUrl)
        const authParameters = [
            `${requestUrl}/oauth/authorize?client_id=${CLIENT_ID}`,
            `scope=read+write+follow+push`,
            `redirect_uri=${REDIRECT_URI}`,
            `response_type=code`
        ].join("&")
        window.location.href=authParameters
    }

    useEffect(() => {
        const isCode = window.location.search.match(/\?code/)
        if (isCode) return obtainTheToken(isCode)
    })

    const obtainTheToken = (isCode) => {
        const code = window.location.search.match(/\?code=(.*)/)[1]
        // console.log(code)
        axios.post(`${requestUrl}/oauth/token`,{
            client_id: CLIENT_ID,
            client_secret: CLIENT_SECRET,
            redirect_uri: REDIRECT_URI,
            grant_type: 'authorization_code',
            code: code,
            scope: 'read write follow push'
        })
            .then(res => {
                // console.log(res)
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
                return window.location.href = "/home"
            })
            .catch(err => {
                console.log(err)
            })
    }
    console.log(authorizedUser)


    return (
        <>
        <div>LOGIN

            <section className="login">
                <div className="input-domain">
                    <div>输入你想登录的实例地址</div>
                    <input
                        type="input"
                        value={example}
                        onChange={e => setExample(e.target.value)}
                    />
                    <button type="button" onClick={handleAuthorizeTheUser}>LOGIN</button>

                    {authorizedUser && <div>欢迎您: {authorizedUser}</div>}
                </div>
            </section>
        </div>
        </>
    )
}

export default LoginPage