import React from 'react'
import {useSelector} from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom';
function Private() {
    const auth=useSelector((state)=>state);
    console.log('auth', auth)
    if(auth.isAuth){
        return<Outlet/>
    }else{
     return <Navigate to='/'/>
    }

}

export default Private
