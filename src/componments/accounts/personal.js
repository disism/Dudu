import React, {useEffect, useState} from "react";
import {getAccounts} from "../../api/request";
import {Link} from "react-router-dom";

function PersonalAccount() {
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getAccounts()
            .then(res => {
                console.log(res)
                setData(res)
                setIsLoading(false)
            })
    },[])

    return (
        <>
            {isLoading? <div className="loading">Loading...</div> : <section>
                <div className="avatar">
                    <img src={data.avatar} alt="" />
                </div>
                <div>
                    {/*点击进入 /account/:id/statuses  在总路由中设置传递的组件*/}
                    <Link to={`/account/${data.id}/statuses`}>
                        {data.display_name}
                    </Link>
                </div>
            </section>}

        </>
    )
}

export default PersonalAccount