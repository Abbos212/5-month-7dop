import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";


export const fetchAllUsers = createAsyncThunk("users/fetchAll", async (payload, thunkApi) => {
    try {
        const response = await api.getUsers();
        return response.data;

    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response : "Something went wrong")
    }
});

export const createUser = createAsyncThunk("users/create", async (payload, thunkApi) => {
    try {
        const response = await api.createUser(payload);
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response.data : "Something went wrong");
    }
});

export const loginUser = createAsyncThunk("users/login", async (credentials, thunkApi) => {
    try {
        const response = await api.loginUser(credentials);
        return response.data;
    } catch (err) {
        return thunkApi.rejectWithValue(err.response ? err.response.data : "Login failed");
    }
});