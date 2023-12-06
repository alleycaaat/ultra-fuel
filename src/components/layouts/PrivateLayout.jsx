import { useLocation, useLoaderData, Navigate, Outlet } from 'react-router-dom';
import { PrivateNav } from '../elements/Navigation/PrivateNav';

export const PrivateLayout = () => {
    const location = useLocation();
    const data = useLoaderData();

    if (!data?.user) {
        return <Navigate to='/signin' state={{ from: location }} replace />;
    }

    return (
        <>
            <PrivateNav />
            <Outlet />
        </>
    );
};