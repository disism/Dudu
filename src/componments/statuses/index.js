import React, { useState} from "react";
import "./style.scss"
import axios from "axios"
import HomeTimeLineComponent from "../home/timeline";

function NewStatusesComponent() {
    const [statusValue, setStatusValue] = useState('')
    const [statusSend, setStatesSend] = useState('')
    const [refresh, setRefresh] = useState(false)

    /**
     * 调用发布业务组件并传给输入的 Value
     * @constructor
     */
    const SendStatus =() => {
        NewStatuses(statusValue)
        setStatusValue('')
    }

    /***
     * 发布业务组件
     * @param status
     * @constructor
     */
    const NewStatuses = (status) => {
        if (status === '') {
            return setStatesSend('请输入嘟文')
        }
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
                setRefresh(true)
                setStatesSend('发送成功')
            })
            .catch((() => {
                setStatesSend('发送失败')
            }))
    }

    const SetTimeoutState = () => {
        return <div>{statusSend}</div>

    }

    return (
        <section className="new-statuses">
            <div>新嘟文</div>
            <div>
                <textarea
                    value={statusValue}
                    onChange={e => setStatusValue(e.target.value)}
                />
            </div>
            <button type="button" onClick={SendStatus}>发布嘟文</button>
            <SetTimeoutState />
            <HomeTimeLineComponent status={refresh} />
        </section>
    )
}

export default NewStatusesComponent