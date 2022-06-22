import { Navigate, useLocation } from "react-router-dom"
import { useContext } from "react/cjs/react.development"
import { AuthContext } from "../components/auth/authContext"

export const PrivateRoute = ({children}) => {
    // const location = useLocation()
    const {pathname, search} = useLocation()
   
    localStorage.setItem('lastLocation',  pathname + search)
   

   
    const {user} = useContext(AuthContext)
    return user.logged
        ? children
        : <Navigate to={'/login'} />
}
