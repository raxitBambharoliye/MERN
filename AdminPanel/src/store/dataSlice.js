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
        setViewData(state, action) {
            state.allAdmin = action.payload;
        },
        setEditData(state,action){
            state.editData = action.payload;
        }
    }
});

export const { setViewData,setEditData } = dataSlice.actions;
export const dataReducer = dataSlice.reducer;
