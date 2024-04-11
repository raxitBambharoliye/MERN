import { createSlice } from '@reduxjs/toolkit';
import axiosClient from '../utility/axiosClient';

const initialState = {
    allAdmin: []
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        getAllAdmin(state, action) {
            state.allAdmin = action.payload;
        }
    }
});

export const { getAllAdmin } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
