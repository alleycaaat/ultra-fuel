import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth/hooks';
import { PublicNav } from '../elements/Navigation/PublicNav';

export const PublicLayout = () => {
    const { currUser } = useAuth();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/dashboard';

    if (currUser) return <Navigate to={from} state={{ from: location }} replace />;

    return (
        <>
            <PublicNav />
            <Outlet />
        </>
    );
};