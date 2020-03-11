import React, { useState} from "react";
import "./style.scss"
import axios from "axios"

function NewStatusesComponent() {
    const [statusValue, setStatusValue] = useState('')

    console.log(statusValue)

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
            return console.log('请输入嘟文')
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
            .then(res => {
                console.log(res)
            })
            .catch((err => {
                console.log(err)
            }))
    }

    return (
        <section className="new-statuses">
            新嘟文
            <textarea
                value={statusValue}
                onChange={e => setStatusValue(e.target.value)}
            />
            <button type="button" onClick={SendStatus}>发布嘟文</button>
        </section>
    )
}

export default NewStatusesComponent