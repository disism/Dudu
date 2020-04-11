import React, { useState} from "react";
import "./style.scss"
import axios from "axios"
import PersonalAccount from "../accounts/personal";

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
        axios.post( `${localStorage.getItem('dudu_settings_url')}/api/v1/statuses`,{
            status: status,
            media_ids: null,
            poll: null
        },{
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('dudu_access_token')}`
            }
        })
            .then(() => {
                setIsLoading(false)
                setStatesSend('发送成功')
                window.location.reload()
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
                {isLoading ? 'Loading ...' : statusSend}
            </button>
        </section>
    )
}

export default NewStatusesComponent