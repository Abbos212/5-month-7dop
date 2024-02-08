import { createSlice } from "@reduxjs/toolkit";
import { fetchAllUsers, createUser } from "../reducers/UserReducer";

const initialState = {
    users: [],
    isLoading: false,
    isError: "",
};

const userSlice = createSlice({
    initialState,
    name: "users",
    reducers: {

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true;
                state.isError = "";
                state.users = [];
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = "";
                state.users = action.payload;
            })
            .addCase(fetchAllUsers.rejected, (state, action) => {
                state.isError = action.payload;
                state.isLoading = false;
                state.users = [];
            })
            .addCase(createUser.pending, (state) => {
                state.isLoading = true;
                state.isError = "";
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isError = "";
                state.users.push(action.payload);
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isError = action.payload;
                state.isLoading = false;
            })
    },
});

const userReducer = userSlice.reducer;

export default userReducer;
