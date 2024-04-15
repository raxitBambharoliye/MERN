import { createSlice } from '@reduxjs/toolkit';
import axiosClient from '../utility/axiosClient';

const initialState = {
    allAdmin: [],
    editData:{}
};

const dataSlice = createSlice({
    name: "data",
    initialState,
    reducers: {
        getAllAdmin(state, action) {
            state.allAdmin = action.payload;
        },
        setEditAdmin(state,action){
            state.editData = action.payload;
        }
    }
});

export const { getAllAdmin,setEditAdmin } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
