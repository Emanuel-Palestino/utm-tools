import { createBrowserRouter } from 'react-router-dom'
import { Index } from './routes/index'


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Index />
	}
])