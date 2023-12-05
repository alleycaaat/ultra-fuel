import { useLocation, useLoaderData, Navigate, Outlet } from 'react-router-dom';

export const PrivateLayout = () => {
    const location = useLocation();
    const { data } = useLoaderData();

    if (!data?.name) {
        return <Navigate to='/login' state={{ from: location }} replace />;
    }

    return (
        <div>
            <section>
                <Outlet />
            </section>
        </div>
    );
};