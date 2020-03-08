import { axiosInstance } from "./config";

/***
 * Get Public Data Timelines
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getPublicTimeline = () => axiosInstance.get('/api/v1/timelines/public')
/***
 * Get Accounts (id)
 * @param id
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getAccountsEntity = (id) => axiosInstance.get(`/api/v1/accounts/${id}`)
/***
 * Get Tends Data
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getTendsData = () => axiosInstance.get('/api/v1/trends')
/***
 * Login POST Register Application
 * 开始注册客户端
 * @returns {Promise<AxiosResponse<T>>}
 */
export const postRegisterApplication = () => axiosInstance.post('/api/v1/apps', {
    client_name: 'Test Application',
    redirect_uris: 'urn:ietf:wg:oauth:2.0:oob'
})
/***
 * POST Get APP Token
 */
export const postAuthenticationToken = (client_id, client_secret) => {
    return axiosInstance.post('/oauth/token', {
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
        grant_type: 'client_credentials',

    })
}
// /api/v1/apps/verify_credentials
export const getVerifyCredentials = (token) => {
    return axiosInstance.get('/api/v1/apps/verify_credentials', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    },)
}

// 进入授权
    export const getOauthAuthorize = () => {
    return  axiosInstance.get('/oauth/authorize')
}
/***
 * 获取账户令牌
 */
export const postUserAuthToken = (client_id, client_secret, authorization_code, user_authzcode_here) => {
    return axiosInstance.post('/oauth/token', {
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
        grant_type: authorization_code,
        code: user_authzcode_here,
        scope: 'read'
    })
}

/***
 * 验证账户授权
 * @param localToken
 * @returns {Promise<AxiosResponse<T>>}
 */

export const getAccountsVerify = (token) => {
    return axiosInstance.get('/api/v1/accounts/verify_credentials', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
}
// 查看账户的时间线
export const getTimeLinesHome = (localToken) => {
    return axiosInstance.get('/api/v1/favourites', {
        headers: {
            'Authorization': `Bearer ${localToken}`
        }
    })
}