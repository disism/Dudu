import { axiosInstance } from "./config";

export const getPublicTimeline = () => axiosInstance.get('/timelines/public')

export const getAccountsEntity = (id) => axiosInstance.get(`/accounts/${id}`)

export const getTendsData = () => axiosInstance.get('/trends')