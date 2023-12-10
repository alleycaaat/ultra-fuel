import { useLocation, useLoaderData, Navigate, Outlet } from 'react-router-dom';
import { PrivateNav } from '../elements/Navigation/PrivateNav';
import { useAuth } from '../../auth/hooks';

export const PrivateLayout = () => {
    const location = useLocation();
    const data = useLoaderData();
    const { currUser } = useAuth()
    
    if (!currUser || !data) {
        return <Navigate to='/signin' state={{ from: location }} replace />;
    }

    return (
        <>
            <PrivateNav />
            <Outlet />
        </>
    );
};