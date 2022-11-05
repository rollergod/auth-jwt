import { useLocation, Navigate } from "react-router-dom";
import { AuthService } from "../services/AuthService";

const RequireAuth = ({ children }) => {

    const authService = AuthService();

    const location = useLocation();
    const auth = authService.isAuth();

    if (auth === null) {
        return <Navigate to="/login" state={{ from: location }} />
    }

    return children;

}

export { RequireAuth };