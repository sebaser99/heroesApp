import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { AuthContext } from "../auth/authContext"
import { types } from "../types/types"
import './login-screen.css';

export const LoginScreen = () => {
    const navigate = useNavigate()
    const { dispatch} = useContext(AuthContext)
    

    const handleLogin = ()=>{
      
        const action = {
            type: types.login,
            payload:{
                name: "Sebastian Rodriguez"
            }
        }

        dispatch(action)

        let lastPath = localStorage.getItem('lastLocation') || '/marvel';
        
        navigate(lastPath, {
            replace: true
        });
    }

    return (
        <div className="contenedor">
            <div className="box">

                <h3 className="mb-4">Ingresa a Heroes App</h3>
                
                <button className='btn btn-warning'
                        onClick={handleLogin}>
                    Login
                </button>
                
            </div>

        </div>
    )
}
