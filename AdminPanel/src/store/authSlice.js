import {createSlice} from '@reduxjs/toolkit'

const authSlice= createSlice({
    name:"auth",
    initialState:{
        isAuthenticated:false,
        admin:null
    },
    reducers:{
        login(state,action){
            console.log('action', action)
            state.isAuthenticated=true;
            state.admin= action.payload;
        },
        logOut(state,action){
            state.isAuthenticated=false;
            state.admin=null;
        }
    }
})

export const {login, logOut}= authSlice.actions;
export const authReducer= authSlice.reducer;