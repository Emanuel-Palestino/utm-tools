import { FC, ReactNode } from 'react'
import { motion } from 'framer-motion'


interface TransitionProps {
	children: ReactNode
}

const transition = {
	duration: 0.8,
	ease: [0.22, 1, 0.36, 1]
}

export const Transition: FC<TransitionProps> = ({ children }) => {

	return (
		<>
			{children}


			{/* Out */}
			<motion.div
				className='fixed inset-0 w-full h-screen bg-utm-container-2-dark origin-top'
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={transition}
			/>
			<motion.div
				className='fixed inset-0 w-full h-screen bg-utm-container-3 origin-top'
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ delay: 0.03, ...transition }}
			/>
			<motion.div
				className='fixed inset-0 w-full h-screen bg-utm-on-container-2 origin-top'
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ delay: 0.06, ...transition }}
			/>
			<motion.div
				className='fixed inset-0 w-full h-screen bg-utm-background origin-top'
				initial={{ scaleY: 0 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 1 }}
				transition={{ delay: 0.09, ...transition }}
			/>


			{/* In */}
			<motion.div
				className='fixed inset-0 w-full h-screen bg-utm-container-2-dark origin-top'
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ delay: 0.11, ...transition }}
			/>

			<motion.div
				className='fixed inset-0 w-full h-screen bg-utm-container-3 origin-top'
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ delay: 0.08, ...transition }}
			/>
			<motion.div
				className='fixed inset-0 w-full h-screen bg-utm-on-container-2 origin-top'
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ delay: 0.05, ...transition }}
			/>
			<motion.div
				className='fixed inset-0 w-full h-screen bg-utm-background origin-top'
				initial={{ scaleY: 1 }}
				animate={{ scaleY: 0 }}
				exit={{ scaleY: 0 }}
				transition={{ delay: 0.02, ...transition }}
			/>
		</>
	)

}