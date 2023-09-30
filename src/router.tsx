import { createBrowserRouter } from 'react-router-dom'
import { Index } from './routes/index'
import { InternshipForm } from './routes/Forms/InternshipForm'


export const router = createBrowserRouter([
	{
		path: '/',
		element: <Index />
	},
	{
		path: '/PracticasFormulario',
		element: <InternshipForm/> 
	}
])