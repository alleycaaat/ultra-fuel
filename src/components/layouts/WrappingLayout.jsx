import { Outlet } from 'react-router-dom';

// ** breakfast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { Header } from '../elements/Header';
import { Footer } from '../elements/Footer';

export const WrappingLayout = () => {
    return (
        <div className='wrapper'>
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