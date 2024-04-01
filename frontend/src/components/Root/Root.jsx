import Footer from '../Footer/Footer';
import Header from '../Header/Header'
import { Outlet } from 'react-router-dom'

function Root() {
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
