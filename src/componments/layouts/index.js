import React, {useEffect} from "react";
import "./style.scss"
import {Link, useHistory} from "react-router-dom";
import homeWelcomeImage from "../../assets/images/Elephants/Elephant Friend (Greeting).png"

function Layouts() {

    const history = useHistory()
    useEffect(() => {
        const loginToken = localStorage.getItem('dudu_access_token')
        if (loginToken) {
            return goHome()
        }
    },[])

    const goHome = () => {
        history.push("/home")
    }


    return (
        <section className="layout">
            <div style={{
                fontSize: `2.5rem`,
                textAlign: `center`,
                margin: `3rem 0`
            }}>欢迎来到 DUDU !</div>

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

export default Layouts