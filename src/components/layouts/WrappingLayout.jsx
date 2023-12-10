import { Outlet, useLoaderData } from 'react-router-dom';
import { useEffect } from 'react';

// ** breakfast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

//** auth
import { getCurrentUser } from '../../auth/appwrite-helpers';
import { useAuth } from '../../auth/hooks';

//** elements
import { Header } from '../elements/Header';
import { Footer } from '../elements/Footer';
import Loading from '../loading'

export const WrappingLayout = () => {
    const { loadingState, setLoading, authUser } = useAuth()
    const { user } = useLoaderData()

    useEffect(() => {
        if (user) initUserCTX();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const initUserCTX = async () => {
        setLoading(true)
        try {
            const user = await getCurrentUser()
            authUser(user)
        } catch (e) {
            console.log('log in error',e)
        }
        setLoading(false)
    }

    return (
        <div className='wrapper'>
            {loadingState && <Loading />}
            <Header />
            <Outlet />
            <ToastContainer
                position='top-right'
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme='light'
            />
            <Footer />
        </div>
    );
};