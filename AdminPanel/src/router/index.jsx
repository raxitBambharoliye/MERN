import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../components/Root/Root";
import Dashboard from "../pages/DashBoard/Dashboard";
import AddAdmin from "../pages/Admin/AddAdmin";
import Login from "../pages/Login/Login";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Root />}>
                <Route path="" element={<Dashboard />} />
                <Route path="/addAdminPage" element={<AddAdmin />} />
            </Route>
        </Route>
    )
)
export default router;