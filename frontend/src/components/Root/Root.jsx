import { useEffect } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'
import { getToken, getUser } from '../../utility/common';
import { useDispatch } from 'react-redux';
import { setLogin } from '../../store/auth.slice';

function Root() {
    const dispatch = useDispatch();
    useEffect(() => { 
        const user = getUser();
        console.log('user', user)
        const token = getToken();
        if (user && token) {
            dispatch(setLogin(user));
        }
    }, [])

    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Root;
