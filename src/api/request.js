import {axiosInstance} from "./config";

/***
 * Get Home Timeline
 * @returns {AxiosInstance}
 */
export const getHomeTimeline = () => axiosInstance.get('/api/v1/timelines/home')
