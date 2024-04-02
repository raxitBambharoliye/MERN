import {configureStore} from '@reduxjs/toolkit'
import { AuthReducer } from './auth.slice'

const store = configureStore({
    reducer:AuthReducer   
})

export default store;