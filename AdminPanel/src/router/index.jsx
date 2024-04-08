import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Root from "../components/Root/Root";
import Dashboard from "../components/DashBoard/Dashboard";

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Root />}>
            <Route path="" element={<Dashboard />} />
        </Route>
    )
)
export default router;