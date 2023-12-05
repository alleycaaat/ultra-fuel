import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

//** import helpers
import { mainLoader, profileLoader } from './util/loaders';

//** import layouts
import { WrappingLayout } from './components/layouts/WrappingLayout'; //main layout that everything appears in, wraps public and private layouts
import { PublicLayout } from './components/layouts/PublicLayout';
import { PrivateLayout } from './components/layouts/PrivateLayout';


//** import screens
import Error from './components/screens/Error';
import Home from './components/screens/Home';
import Dashboard from './components/screens/Private/Dashboard';


import './styles.scss';
import Register from './components/screens/Register';
import { registerAction } from './util/actions/registerAction';
import SignIn from './components/screens/SignIn';

const router = createBrowserRouter(
	[
		{
			element: <WrappingLayout />,
			errorElement: <Error />,
			loader: mainLoader,
			children: [
				{
					element: <PublicLayout />, loader: mainLoader,
					children: [
						{
							path: '/', element: <Home />,
						},
						{
							path: '/register', element: <Register />, action: registerAction,
						},
						{
							path: '/signin', element: <SignIn />,
						}
					]
				},
				{
					element: <PrivateLayout />, loader: mainLoader,
					children: [
						{
							path: '/dashboard', element: <Dashboard />, loader: profileLoader,
						},
					]
				}
			]
		},
		{
			path: '*',
			element: <Error />
		}
	]
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
