import { createSlice } from "@reduxjs/toolkit"
import cookies from 'js-cookies'
const init = {
    isAuth: false,
    userData: null,
}



const AuthSlice = createSlice({
    name:"auth",
    initialState: init,
    reducers: {
        setLogin:setLoginFan,
        changeLogin: (state,action) => { },
        logOut:logOutFan,
    }
})

function setLoginFan(state, action) {
    state.isAuth = true;
    state.userData = action.payload;
}
function logOutFan(state,action) {
    state.isAuth = false;
    state.userData = null;
    cookies.removeItem('token');
    cookies.removeItem('user');
}
export const { changeLogin, logOut,setLogin } = AuthSlice.actions;
export const AuthReducer = AuthSlice.reducer;