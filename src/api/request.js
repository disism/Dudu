import {axiosInstance} from "./config";

/***
 * Get Home Timeline
 * @returns {AxiosInstance}
 */
export const getHomeTimelines = () => axiosInstance.get('/api/v1/timelines/home')

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