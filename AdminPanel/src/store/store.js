

import { configureStore } from '@reduxjs/toolkit'
import  ThemReducers  from './themSlice'

const store = configureStore({
    reducer:ThemReducers
})

export default store;