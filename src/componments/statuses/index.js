import React, { useState} from "react";
import "./style.scss"
import PersonalAccount from "../accounts/personal";
import {postNewStatuses} from "../../api/request";
import LoadmoreLoading from "../loading/loadmore-loading";

/***
 * 发布嘟文组件
 * @returns {*}
 * @constructor
 */

function NewStatusesComponent() {
    const [statusValue, setStatusValue] = useState('')
    const [statusSend, setStatesSend] = useState('发布嘟文')
    const [isLoading, setIsLoading] = useState(false)

    const SendStatus =() => {
        NewStatuses(statusValue)
        setStatusValue('')
    }

    const NewStatuses = (status) => {
        if (status === '') {
            return setStatesSend('请输入嘟文')
        }
        setIsLoading(true)
        postNewStatuses({
            status: status,
            media_ids: null,
            poll: null
        })
            .then(() => {
                setIsLoading(false)
                setStatesSend('发送成功')
            })
            .catch((() => {
                setIsLoading(false)
                setStatesSend('发送失败')
            }))
    }


    return (
        <section className="new-statuses">
            <PersonalAccount/>
            <div>新嘟文</div>
            <div>
                <textarea
                    value={statusValue}
                    onChange={e => setStatusValue(e.target.value)}
                />
            </div>
            <button type="button" onClick={SendStatus}>
                {isLoading ? <LoadmoreLoading /> : statusSend}
            </button>
        </section>
    )
}

export default NewStatusesComponent