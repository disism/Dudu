import { configureStore } from '@reduxjs/toolkit';
import  notificationReducer from "../componments/streaming/notificationSlice";


export default configureStore({
    reducer: {
        notification: notificationReducer
    },
});
