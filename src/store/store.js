import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userReducer from "./slices/UserSlice"

const rootReducer = combineReducers({
    users: userReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;