
import { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../auth/authContext';
import { types } from '../types/types';

export const Navbar = () => {
    const {user} = useContext(AuthContext)
    const navigate = useNavigate()
    const {dispatch} = useContext(AuthContext)

    const handleLogout = ()=>{
        
        const action ={
            type: types.logout,
            payload: {

            }
        }
        dispatch(action)
        navigate('/login', {
            replace: true
        })
    }
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            <div className='container-lg'>
                <Link 
                    className="navbar-brand ps-2" 
                    to="/"
                >
                    HeroesAPP
                </Link>

                <div className="navbar-collapse">
                    <div className="navbar-nav">

                        <NavLink 
                            className={({isActive}) => "nav-item nav-link"  + (isActive ? ' active' : '')}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>

                        <NavLink 
                            className={({isActive}) => "nav-item nav-link"  + (isActive ? ' active' : '')}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink 
                            className={({isActive}) => "nav-item nav-link"  + (isActive ? ' active' : '')}
                            to="/search"
                        >
                            Search
                        </NavLink>
                    </div>
                </div>

                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className='nav-item nav-link text-warning'>{user.name}</span>
                        <button 
                            className="nav-item nav-link btn" 
                            onClick={handleLogout}
                            
                        >
                            Logout
                        </button>
                    </ul>
                </div>

            </div>
        </nav>
    )
}