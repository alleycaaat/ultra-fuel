import { NavLink } from 'react-router-dom';

export const PublicNav = () => {
    return (
        <nav className='nav'>
            <NavLink
                to='/'
                aria-label='go to homepage'>
                Home
            </NavLink>
            <NavLink
                to='/register'
            >
                Register
            </NavLink>
            <NavLink
                to='/signin'
            >
                Sign In
            </NavLink>
        </nav>
    );
};