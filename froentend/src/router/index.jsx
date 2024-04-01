import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import {Root} from "../components/";
import { About, ContactUs, Home, Products, Sale } from "../pages";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root/>}>
            <Route path="" element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<ContactUs />}></Route>
            <Route path="products" element={<Products />}></Route>
            <Route path="sale" element={<Sale />}></Route>
        </Route>
    )
)

export default router;