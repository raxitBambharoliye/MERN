

import { configureStore ,combineReducers} from '@reduxjs/toolkit'
import  ThemReducers  from './themSlice'
import { authReducer } from './authSlice';

const store = configureStore({
    reducer:combineReducers({ThemReducers,authReducer})
})

export default store;