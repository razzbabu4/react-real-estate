import {
    createBrowserRouter
} from "react-router-dom";
import MainLayouts from '../layouts/MainLayouts';
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../components/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },

        ]

    },
]);

export default router;