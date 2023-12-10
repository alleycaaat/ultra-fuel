import { Outlet, useLoaderData } from 'react-router-dom';

// ** breakfast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Loading from '../loading'

import { Header } from '../elements/Header';
import { Footer } from '../elements/Footer';
import { useAuth } from '../../auth/hooks';
import { useEffect } from 'react';
import { getCurrentUser } from '../../auth/appwrite-helpers';

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