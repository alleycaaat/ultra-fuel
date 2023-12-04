import { useLocation, useLoaderData, Navigate, Outlet } from 'react-router-dom';

const AuthLayout = () => {
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
  )
}

export default AuthLayout