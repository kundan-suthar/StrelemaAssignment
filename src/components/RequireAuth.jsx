import { useLocation, Navigate, Outlet } from "react-router";
import { useAuth } from "../hooks/useContext";

const RequireAuth = () => {
    const { isLoggedIn, auth } = useAuth()
    const location = useLocation()

    return (
        (auth?.user || isLoggedIn)
            ? <Outlet />
            : <Navigate to="/login" state={{ from: location }} replace />
    )
}
export default RequireAuth