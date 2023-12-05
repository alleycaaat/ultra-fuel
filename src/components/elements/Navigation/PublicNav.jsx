import { NavLink } from 'react-router-dom';
import './navigation.scss'

export const PublicNav = () => {
    return (
        <nav>
            <NavLink
                to='/'
                className='nav-button'
                aria-label='go to homepage'>
                Home
            </NavLink>
            <NavLink
                className='nav-button'
                to='/register'
            >
                Register
            </NavLink>
            <NavLink
                className='nav-button'
                to='/signin'
            >
                Sign In
            </NavLink>
        </nav>
    );
};