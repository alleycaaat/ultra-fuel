import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import React from 'react';

//** import screens
import DefaultLayout from './layouts/DefaultLayout';
import Error from './screens/Error';

//** import helpers
import { mainLoader } from './util/loaders';

import './styles.scss';

const router = createBrowserRouter(
	[
		{
			element: <DefaultLayout />,
			errorElement: <Error />,
			loader: mainLoader,
		},
		{
			path: '*',
			element: <Error />
		}
	]
)

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
