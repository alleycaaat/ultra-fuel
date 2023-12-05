import { NavLink } from 'react-router-dom';
import './navigation.scss'


export const PrivateNav = () => {

    const logOut = () => {
        //logout function, create Toast warning to confirm logout
    }

    return (
        <nav>
            <NavLink
                className='nav-button'
                to='/dashboard'
                aria-label='Go to home'
            >
                Home
            </NavLink>
            <NavLink
                className='nav-button'
                to='/profile'>
                Profile
            </NavLink>
            <NavLink
                className='nav-button'
                to='/pastevents'>
                Past Events
            </NavLink>
            <NavLink
                className='nav-button'
                to='/newevent'>
                New Event
            </NavLink>
            <button
                className='nav-button'
                type='submit'
                onClick={logOut}>
                Sign Out
            </button>
        </nav>
    );
};