import {
    createBrowserRouter
} from "react-router-dom";
import MainLayouts from '../layouts/MainLayouts';
import Home from "../pages/Home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../components/ErrorPage";
import UserProfile from "../components/UserProfile";
import UpdateProfile from "../components/UpdateProfile";
import ViewProperty from "../components/ViewProperty";
import ProtectedRoute from "../protectedRoute/ProtectedRoute";
// import Estates from "../pages/Home/Estates/Estates";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/estate.json')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/userProfile',
                element: <ProtectedRoute><UserProfile></UserProfile></ProtectedRoute>
            },
            {
                path: '/updateProfile',
                element: <UpdateProfile></UpdateProfile>
            },
            {
                path: '/viewProperty/:id',
                element: <ProtectedRoute><ViewProperty></ViewProperty></ProtectedRoute>,
                loader: () => fetch('/estate.json')
            },

        ]

    },
]);

export default router;