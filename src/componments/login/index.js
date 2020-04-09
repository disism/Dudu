import React, {useEffect, useRef, useState} from "react";
import "./style.scss"
import GoBack from "../back";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

function LoginComponent() {
    const [example, setExample] = useState('mastodon.social')
    const requestUrl = `https://${example}`

    const handleAuthorizeTheUser = (e) => {
        e.preventDefault()
        localStorage.setItem('dudu_settings_url', requestUrl)
        const authParameters = [
            `${requestUrl}/oauth/authorize?client_id=${CLIENT_ID}`,
            `scope=read+write+follow+push`,
            `redirect_uri=${REDIRECT_URI}`,
            `response_type=code`
        ].join("&")
        window.location.href=authParameters
    }
    const loginFocus = useRef(null)

    useEffect(() => {
        loginFocus.current.focus()
    },[])

    return (
        <>
            <div>
                <section className="login">
                    <GoBack/>
                    <form onSubmit={handleAuthorizeTheUser} className="input-domain">
                            <div style={{margin: `1rem 0`}}>输入你要登录的实例地址</div>
                            <input
                                ref={loginFocus}
                                type="input"
                                value={example}
                                onChange={e => setExample(e.target.value)}
                            />
                            <button type="submit">LOGIN</button>
                    </form>
                </section>
            </div>
        </>
    )
}

export default LoginComponent