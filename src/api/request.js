import {axiosInstance} from "./config";

/***
 * Get Home Timeline
 * @returns {AxiosInstance}
 */
export const getHomeTimelines = (max_id) => axiosInstance.get('/api/v1/timelines/home',{
    params: {
        "max_id": max_id
    }
})

/***
 * Get Home Favourites
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getHomeFavourites = () => axiosInstance.get('/api/v1/favourites')

/***
 * Get Home Bookmarks
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getHomeBookmarks = () => axiosInstance.get('/api/v1/bookmarks')

/***
 * Get Conversations 对话
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getConversations = () => axiosInstance.get('/api/v1/conversations')

/***
 * 通知
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getNotifications = () => axiosInstance.get('/api/v1/notifications')

/***
 * 个人账户中心
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getAccounts = () => axiosInstance.get('/api/v1/accounts/verify_credentials')

/***
 * 删除嘟文状态
 * @param id
 * @returns {Promise<AxiosResponse<T>>}
 */
export const deleteStatus = (id) => axiosInstance.delete(`/api/v1/statuses/${id}`)

/***
 * 搜索功能
 * @returns {Promise<AxiosResponse<any>>}
 */
export const search = (query) => axiosInstance.get('/api/v2/search',{
    params: {
        q: query
    }
})