import {axiosInstance} from "./config";

/***
 * Get Home Timeline
 * @returns {AxiosInstance}
 */
export const getHomeTimeline = () => axiosInstance.get('/api/v1/timelines/home')

/***
 * Get Home Favourites
 * @returns {Promise<AxiosResponse<T>>}
 */
export const getHomeFavourites = () => axiosInstance.get('/api/v1/favourites')