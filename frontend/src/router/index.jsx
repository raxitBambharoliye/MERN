import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import { Logout, Private, Root } from "../components/";
import { About, ContactUs, Home, Products, Profile, Sale } from "../pages";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<ContactUs />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="" element={<Private />}>
                <Route path="profile" element={<Profile />}></Route>
            </Route>
                <Route path="sale" element={<Sale />}></Route>
        </Route>
    )
)

export default router;