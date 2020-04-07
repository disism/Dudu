import axios from "axios"

/**
 * 公开的数据
 * @type {string}
 */
export const defaultUrl = 'https://mastodon.social'

export const baseUrl = localStorage.getItem('dudu_settings_url')

/***
 * 设置的主站请求
 * @type {AxiosInstance}
 */
const axiosInstance = axios.create({
    baseURL: baseUrl,
    headers: {
        'Authorization': `Bearer ${localStorage.getItem('dudu_access_token')}`
    }
})

axiosInstance.interceptors.response.use(
    res => res.data,
    err => {
        console.log(err, '链接出现错误，请登陆后尝试！')
    }
)

export {
    axiosInstance
}