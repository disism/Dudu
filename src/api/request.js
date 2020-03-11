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
 * Post New Statuses
 * @returns {Promise<AxiosResponse<T>>}
 */
export const postNewStatuses = (status) => axiosInstance.post('/api/v1/statuses', {
    status: status,
    media_ids: null,
    poll: null,
})