import { NavLink, useNavigate } from 'react-router-dom';

import { account } from '../../../config/appwrite';
import { useAuth } from '../../../auth/hooks';

import './navigation.scss';
import { logoutAction } from '../../../util/actions/logoutAction';

export const PrivateNav = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();

    const logOut = () => {
        //TODO create Toast warning to confirm logout
        logout();
        logoutAction()
        account.deleteSession('current');
        return navigate('/', { replace: true });
    };

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
                to='/events'>
                Events
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