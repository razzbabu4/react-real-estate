import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProtectedRoute = ({children}) => {
    const {user} = useAuth()

        if(user){
            return children;
        }

        return <Navigate state={location.pathname} to='/login'></Navigate>
};

export default ProtectedRoute;