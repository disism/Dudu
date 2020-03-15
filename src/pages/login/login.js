import React, { useState} from "react";

import "./login.scss"

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

function LoginPage() {
    const [example, setExample] = useState('mastodon.social')

    const requestUrl = `https://${example}`

    const handleAuthorizeTheUser = () => {
        console.log(requestUrl)
        localStorage.setItem('dudu_settings_url', requestUrl)
        const authParameters = [
            `${requestUrl}/oauth/authorize?client_id=${CLIENT_ID}`,
            `scope=read+write+follow+push`,
            `redirect_uri=${REDIRECT_URI}`,
            `response_type=code`
        ].join("&")
        window.location.href=authParameters
    }



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
                </div>
            </section>
        </div>
        </>
    )
}

export default LoginPage