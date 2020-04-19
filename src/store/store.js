import { configureStore } from '@reduxjs/toolkit';
import  notificationReducer from "../reducer/notification";

export default configureStore({
    reducer: {
        notification: notificationReducer
    },
});
