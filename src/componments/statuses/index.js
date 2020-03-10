import React, {useState} from "react";
import "./style.scss"
import {axiosInstance} from "../../api/config";

function NewStatusesComponent() {
    const [statusValue, setStatusValue] = useState('')
    console.log(statusValue)

    const NewStatuses = (status) => {
        axiosInstance(status)
            .then(res => {
                console.log(res)
            })
    }

    const SendStatus =() => {
        NewStatuses(statusValue)
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