import { useSelector } from "react-redux";
import { useLocation, Navigate, Outlet } from "react-router-dom";
import { selectCurrentToken } from "../redux/slices/authSlice";

const RequireAuth = ({ children }) => {

    const token = useSelector(selectCurrentToken);
    const location = useLocation();
    console.log('token', token);
    if (token === null)
        return <Navigate to="/login" state={{ from: location }} replace />

    return children;
}

export { RequireAuth };