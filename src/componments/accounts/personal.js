import React, {useEffect, useState} from "react";
import {getAccounts} from "../../api/request";
import {Link} from "react-router-dom";

function PersonalAccount() {
    const [data, setData] = useState({})

    useEffect(() => {
        getAccounts()
            .then(res => {
                setData(res)
            })
    },[])

    return (
        <>
            <section>
                <div className="avatar">
                    <img src={data.avatar} alt="" />
                </div>
                <div>
                    <Link to={`/account/${data.id}/statuses`}>
                        {data.display_name}
                    </Link>
                </div>
            </section>

        </>
    )
}

export default PersonalAccount