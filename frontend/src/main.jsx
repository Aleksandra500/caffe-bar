import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
	RouterProvider,
	createBrowserRouter,
} from 'react-router-dom';
import HomePage from './pages/HomePage.jsx'
import App from './App.jsx';
import Gallery from './pages/Gallery.jsx';

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		errorElement: <div>error</div>,
		children: [
			{
				path: '/',
				element: <HomePage/>,
			},
			{
				path:'gallery',
				element: <Gallery/>
			}
		],
	},
]);

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
