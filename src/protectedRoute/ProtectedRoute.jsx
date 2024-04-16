import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import PropTypes from 'prop-types';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="text-center">
                    <span className="loading loading-ring loading-lg text-center"></span>
               </div>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>
};

ProtectedRoute.propTypes = {
    children: PropTypes.node
}

export default ProtectedRoute;