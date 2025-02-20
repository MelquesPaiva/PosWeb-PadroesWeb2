import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute() {
    const userLogged = localStorage.getItem('userLogged');
    const userIsLogged = userLogged !== null && userLogged !== undefined && userLogged !== ''

    return userIsLogged ? <Outlet /> : <Navigate to="/login" />
}

export default ProtectedRoute
