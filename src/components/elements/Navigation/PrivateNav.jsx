import { NavLink } from 'react-router-dom';

export const PrivateNav = () => {

    const logOut = () => {
        //logout function, create Toast warning to confirm logout
    }

    return (
        <nav className='tabs'>
            <NavLink
                to='/dashboard'
                aria-label='Go to home'
            >
                Home
            </NavLink>
            <NavLink
                to='/profile'>
                Profile
            </NavLink>
            <NavLink
                to='/pastevents'>
                Past Events
            </NavLink>
            <NavLink
                to='/newevent'>
                New Event
            </NavLink>
            <button
                type='submit'
                onClick={logOut}>
                Sign Out
            </button>
        </nav>
    );
};