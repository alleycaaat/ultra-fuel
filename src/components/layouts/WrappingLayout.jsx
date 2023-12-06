import { Outlet } from 'react-router-dom';

// ** breakfast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import Loading from '../loading'

import { Header } from '../elements/Header';
import { Footer } from '../elements/Footer';
import { useAuth } from '../../auth/hooks';

export const WrappingLayout = () => {
    const { loadingState } = useAuth()

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