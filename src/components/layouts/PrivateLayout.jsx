import { useLocation, useLoaderData, Navigate, Outlet } from 'react-router-dom';
import { PrivateNav } from '../elements/Navigation/PrivateNav';

export const PrivateLayout = () => {
    const location = useLocation();
    const { data } = useLoaderData();

    if (!data?.name) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return (
        <div>
            <PrivateNav />
            <section>
                <Outlet />
            </section>
        </div>
    );
};