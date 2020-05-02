import{ createSlice } from "@reduxjs/toolkit";

export const notification = createSlice({
    name: 'notification',
    initialState: {
        value: 0,
        data: {}
    },
    reducers: {
        NOTIFICATION_INCREMENT: state => {
            state.value += 1
        },
        NOTIFICATION_DEFAULT: state => {
            state.value = 0
        },
        NOTIFICATION_DATA: (state, action) => {
            state.data = action.payload
        }
    }
})

export const { NOTIFICATION_INCREMENT, NOTIFICATION_DEFAULT, NOTIFICATION_DATA } = notification.actions

export const notificationCount = state => state.notification.value
export const notificationData = state => state.notification.data

export default notification.reducer