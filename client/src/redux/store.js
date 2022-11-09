import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import { apiSlice } from "../api/apiSlice";


// export const store = configureStore({
//     reducer: {
//         userSlice
//     }
// });

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools: true
});