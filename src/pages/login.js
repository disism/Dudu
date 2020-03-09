import React, {useState} from "react";
import "../assets/scss/login.scss"
import axios from "axios"
/***
 * Login Page, Input domain -> login OAuth2
 * @returns {*}
 * @constructor
 */
function LoginPage() {
    const [example, setExample] = useState('mastodon.social')
    const requestUrl = `https://${example}`
    // 账户实体数据
    const [accountsEntity, setAccountsEntity] = useState({})
    /***
     * 创建应用程序
     */
    const handleExampleCreateClient = () => {
        axios.post(`${requestUrl}/api/v1/apps`, {
            client_name: 'Test Application',
            redirect_uris: 'urn:ietf:wg:oauth:2.0:oob',
            scopes: 'read write follow push',
            website: 'http://localhost:3000/login'
        })
            .then(res => {
                console.log(res.data)
                // Save Client Token
                localStorage.setItem('dudu_client_id', `${res.data.client_id}`)
                localStorage.setItem('dudu_client_secret', `${res.data.client_secret}`)
                GetApplicationToken(res.data)
            })
            .catch(err => {
                console.log(`ERROR: ${err}`)
            })
    }
    /***
     * 获取应用程序 Token
     */
    const GetApplicationToken = (clientData) => {
        axios.post(`${requestUrl}/oauth/token`,{
            client_id: clientData.client_id,
            client_secret: clientData.client_secret,
            redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
            grant_type: 'client_credentials'
        })
            .then(res => {
                console.log(res.data)
                localStorage.setItem('dudu_client_token', `${res.data.access_token}`)
                // 存完 Token 跳转到授权页
                jumpMastodon(clientData)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const jumpMastodon = (clientData) => {
        const popWin = window.open(`${requestUrl}/oauth/authorize?client_id=${clientData.client_id}&scope=read+write+follow+push&redirect_uri=urn:ietf:wg:oauth:2.0:oob&response_type=code`,
            null, "width=600,height=400"
        )
        console.log(popWin.window.location)
        // popWin.window.close()
    }
    /**
     * 获取账户令牌 iTPRWKQIAVMOY-0Hkrk47QLWb5igPbJg5Rv7Vrtxlns
     */
    const handleAuthorizationCode = () => {
        axios.post(`${requestUrl}/oauth/token`, {
            client_id: localStorage.getItem('dudu_client_id'),
            client_secret: localStorage.getItem('dudu_client_secret'),
            redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
            grant_type: 'authorization_code',
            code: 'HusEmj6H7-lVNWXBlUMAB9ezFihxui19BDccGYqoZPs',
            scope: 'read write follow push'
        })
            .then(res => {
                console.log(res.data)
                // 保存用户令牌
                localStorage.setItem('dudu_access_token', `${res.data.access_token}`)
                // 返回账户实体
                handleAccountsEntity()
            })
            .catch(err => {
                console.log(err)
            })
    }

    // 调用账户实体
    const handleAccountsEntity = () => {
        axios.get(`${requestUrl}/api/v1/accounts/verify_credentials`,{
            headers: {
                Authorization: `Bearer ${localStorage.getItem('dudu_access_token')}`
            }
        })
            .then(res => {
                setAccountsEntity(res.data)
            })
            .catch(err => {
                console.log(`请登录： ${err}`)
            })
    }

    console.log(accountsEntity)

    const handleLogout = () => {
        localStorage.removeItem('dudu_access_token')
    }
    return (
        <>
            <section style={{color: `white`, fontSize: `2rem`}}>
                <div className="input-domain">
                    <input
                        value={example}
                        onChange={e => setExample(e.target.value)}
                    />
                    <button type="button" onClick={handleExampleCreateClient}>LOGIN</button>

                {/*    获取账户令牌*/}
                <br />
                <button type="button" onClick={handleAuthorizationCode}>获取令牌</button>
                <br/>
                <button type="button" onClick={handleAccountsEntity}>调用账户实体</button>
                </div>

                <hr/>
                <div>欢迎您:{accountsEntity.display_name}</div>
                <br/>
                <button type="button" onClick={handleLogout}>退出</button>
            </section>
        </>
    )
}




export default LoginPage