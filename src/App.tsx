import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { Index } from './routes/index'
import { Internship } from './routes/internship/Internship'


export const App = () => {

	const location = useLocation()

	return (
		<AnimatePresence mode='wait'>
			<Routes location={location} key={location.pathname}>
				<Route path='/' element={<Index />} />
				<Route path='/internship' element={<Internship />} />
			</Routes>
		</AnimatePresence>
	)
}