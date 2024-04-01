import { configureStore } from "@reduxjs/toolkit";
import {blogApi} from './api';
import productSlice from './postSlice';
// Redux Store: Redux store setup

const store = configureStore({
    reducer: {
        [blogApi.reducerPath]: blogApi.reducer,
        product: productSlice,
    },
    middleware: (getDefaultMiddleware)=>
    getDefaultMiddleware().concat(blogApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;