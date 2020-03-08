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
 * @returns {Promise<AxiosResponse<T>>}
 */
export const postRegisterApplication = () => axiosInstance.post('/api/v1/apps', {
    client_name: 'Test Application',
    redirect_uris: 'urn:ietf:wg:oauth:2.0:oob'
})
/***
 * POST Get Token
 */
export const postAuthenticationToken = (client_id, client_secret) => {
    return axiosInstance.post('/oauth/token', {
        client_id: client_id,
        client_secret: client_secret,
        redirect_uri: 'urn:ietf:wg:oauth:2.0:oob',
        grant_type: 'client_credentials'
    })
}