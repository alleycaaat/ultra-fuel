import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

//** ctx
import { AuthContextProvider } from './store/auth-context';

//** import helpers
import { registerAction } from './util/actions/registerAction';
import { mainLoader, profileLoader, userEventsLoader } from './util/loaders';

//** import layouts
import { WrappingLayout } from './components/layouts/WrappingLayout'; //main layout that everything appears in, wraps public and private layouts
import { PrivateLayout } from './components/layouts/PrivateLayout';
import { PublicLayout } from './components/layouts/PublicLayout';

//** import screens
//private
import PastEvents from './components/screens/Private/PastEvents';
import Dashboard from './components/screens/Private/Dashboard';
import NewEvent from './components/screens/Private/NewEvent';
import Profile from './components/screens/Private/Profile';
import Events from './components/screens/Private/Events';

//public
import Register from './components/screens/Register';
import SignIn from './components/screens/SignIn';
import Event from './components/elements/Event';
import Error from './components/screens/Error';
import Home from './components/screens/Home';

import './styles.scss';

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
						{
							path: '/profile', element: <Profile />,
						},
						{
							element: <Events />, path: '/events',
							children: [
								{
									path: 'pastevents', element: <PastEvents />, loader: userEventsLoader,
								},
								{
									path: 'newevent', element: <NewEvent />,
								},
								{
									path: ':eventId', element: <Event />,
								}
							]
						}
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
		<AuthContextProvider>
			<RouterProvider router={router} />
		</AuthContextProvider>
	</React.StrictMode>,
);
