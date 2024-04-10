import React from 'react'
import { getAdmin, getToken } from '../../common'
import { Outlet ,Navigate} from 'react-router-dom'
export default function Private() {

    const adminData = getAdmin();
    const adminToken = getToken();

    if (adminToken && adminData) {
        return <Outlet />
    }
    return <Navigate to='/login' />

}
