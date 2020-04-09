import React, { useState} from "react";
import "./style.scss"
import axios from "axios"
import HomeTimeLineComponent from "../timeline";
import PersonalAccount from "../accounts/personal";
import Loading from "../loading";

/***
 * 发布组件
 * @returns {*}
 * @constructor
 */
function NewStatusesComponent() {
    const [statusValue, setStatusValue] = useState('')
    const [statusSend, setStatesSend] = useState('')
    const [refresh, setRefresh] = useState(false)

    const [isLoading, setIsLoading] = useState(false)

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
                setIsLoading(false)
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
            <PersonalAccount/>
            <div>新嘟文</div>
            <div>
                <textarea
                    value={statusValue}
                    onChange={e => setStatusValue(e.target.value)}
                />
            </div>
            <button type="button" onClick={SendStatus}>发布嘟文</button>
            <SetTimeoutState />
            {isLoading ? <Loading/> :
                <HomeTimeLineComponent status={refresh} />
            }
        </section>
    )
}

export default NewStatusesComponent