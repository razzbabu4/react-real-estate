import {
    createBrowserRouter
} from "react-router-dom";
import MainLayouts from '../layouts/MainLayouts';
import Home from "../pages/Home/Home";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts></MainLayouts>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
           
        ]
        
    },
]);

export default router;