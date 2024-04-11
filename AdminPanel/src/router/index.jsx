import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../components/Root/Root";
import Dashboard from "../pages/DashBoard/Dashboard";
import AddAdmin from "../pages/Admin/AddAdmin";
import Login from "../pages/Login/Login";
import Private from "../components/Private/Private";
import Profile from "../pages/Profile/Profile";
import { AddCategory, ViewAdmin, ViewCategory } from "../pages";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route>
            <Route path="/login" element={<Login />} />
            <Route path="" element={<Private/>}>
                <Route path="/" element={<Root />}>
                    <Route path="" element={<Dashboard />} />
                    <Route path="/addAdminPage" element={<AddAdmin />} />
                    <Route path="/viewAdminPage" element={<ViewAdmin />} />
                    <Route path="/profile" element={<Profile />} />
                    {/* category */}
                    <Route path="/addCategoryPage" element={<AddCategory />} />
                    <Route path="/viewCategoryPage" element={<ViewCategory />} />
                    
                </Route>
            </Route>
        </Route>
    )
)
export default router;