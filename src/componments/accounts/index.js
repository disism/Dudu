import React, {useEffect, useState} from "react";
import "./style.scss"
import axios from "axios"
import {defaultUrl} from "../../api/config";
import {useHistory} from "react-router-dom";
import AccountsComponent from "./accounts";

/**
 * 接受路由传过来的参数 props
 * @param props
 * @returns {*}
 * @constructor
 */
function AccountsEntity( props ) {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(true)

    const [data, setData] = useState(
        [
            {
                account: {}
            }
        ]
    )
    /**
     * props.match.params.id 是路由传过来的 id , props 来接收
     */
    const id = props.match.params.id

    useEffect(() => {
        /***
         * Get Accounts (id)
         * @param id
         */
        axios.get(`${defaultUrl}/api/v1/accounts/${id}/statuses`)
            .then(res => {
                setData(res.data)
                setIsLoading(false)
            })
            .catch(err => {
                console.log(err)
            })
    },[id])


    const acct = data[0].account
    const resdata = data

    return (
        <section className="accounts-entity">
            <section style={{margin: `1rem 0`}}>
                <button className="goback-button" onClick={() => history.goBack()}>返回</button>
            </section>
            {isLoading ? <div className="loading">Loading...</div> : <AccountsComponent account={acct} data={resdata} />}
        </section>
    )
}

export default AccountsEntity