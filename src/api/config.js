import axios from "axios"

export const baseUrl = 'https://mastodon.social/api/v1'

const axiosInstance = axios.create({
    baseURL: baseUrl
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '链接出现错误')
    }
)

export {
    axiosInstance
}