import React, { useState} from "react";
import "./style.scss"
import {useHistory} from "react-router-dom";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

function LoginComponent() {
    const history = useHistory()

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
            <div>
                <section className="login">
                    <button className="goback-button" onClick={() => history.goBack()}>返回</button>
                    <div className="input-domain">
                        <div style={{margin: `1rem 0`}}>输入你要登录的实例地址</div>
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

export default LoginComponent