import React, {useEffect, useReducer } from "react";
import {Link} from "react-router-dom";
import homeWelcomeImage from "../../assets/images/Elephants/Elephant Friend (Greeting).png";
import "./style.scss"
import axios from "axios";
import Loading from "../loading";

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET
const REDIRECT_URI = process.env.REACT_APP_REDIRECT_URI

const initialState = {
    data: {},
    authState: '',
    isloading: false,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN_SUCCESS':
            return {
                data: action.payload,
                authState: '',
                isloading: false
            }
        case 'GET_TOKEN_ERROR':
            return {
                data: {},
                authState: '获取令牌失败!',
                isloading: false
            }
        case 'LOADING_TRUE':
            return {
                data: {},
                authState: '',
                isloading: true
            }
        case 'LOADING_FALSE':
            return {
                data: {},
                authState: '',
                isloading: false
            }
        case 'AUTH_ERROR':
            return {
                data: {},
                authState: '验证失败！',
                isloading: false
            }
        default:
            return state
    }
}

function Welcome() {
    const [state, dispatch] = useReducer(reducer, initialState)


    useEffect(() => {
        const requestUrl =  localStorage.getItem('dudu_settings_url')
        const isCode = window.location.search.match(/\?code/)

        /***
         * 如果 url 上有返回的 code 就正则匹配 code 后的代码，通过这个代码获得一个访问令牌（Token）并保存
         */
        const ObtainTheToken = () => {
            dispatch({ type: 'LOADING_TRUE' })
            const code = window.location.search.match(/\?code=(.*)/)[1]
            axios.post(`${requestUrl}/oauth/token`,{
                client_id: CLIENT_ID,
                client_secret: CLIENT_SECRET,
                redirect_uri: REDIRECT_URI,
                grant_type: 'authorization_code',
                code: code,
                scope: 'read write follow push'
            })
                .then(res => {
                    localStorage.setItem('dudu_access_token', res.data.access_token)
                    WelcomeAccountEntity()
                    dispatch({ type: 'LOADING_FALSE' })
                })
                .catch(() => {
                    dispatch({ type: 'GET_TOKEN_ERROR' })
                })
        }

        /***
         * 获取成功后验证，返回账户实体并跳转到首页
         * @constructor
         */
        const WelcomeAccountEntity = () => {
            axios.get(`${requestUrl}/api/v1/accounts/verify_credentials`,{
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('dudu_access_token')}`
                }
            })
                .then(res => {
                    dispatch({ type: 'LOGIN_SUCCESS', payload: res.data })
                    setTimeout(() => {
                        return window.location.href = "/#/home"
                    }, 1000)
                })
                .catch(() => {
                    dispatch({ type: 'AUTH_ERROR' })
                })
        }

        if (isCode) return ObtainTheToken()
    },[])


    return (
        <>
            {state.authState}
            {state.data.display_name
                ?
            <div className="welcome-diaplay-name">
                {state.data.display_name && `欢迎您：${state.data.display_name}`}
            </div>
                :
            <section>
                {state.isloading ? <Loading/> :
                    <section className="layout">
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
                }
            </section>
            }
        </>
    )
}

export default Welcome