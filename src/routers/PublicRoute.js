import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../components/auth/authContext";

export const PublicRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    console.log(user)
    return !user.logged 
        ? children
        : <Navigate to='/marvel' />
}
