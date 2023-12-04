import { Outlet } from 'react-router-dom';

// ** breakfast
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const WrappingLayout = () => {
    return (
        <div className='wrapper'>
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
        </div>
    );
};

export default WrappingLayout;