import { motion } from 'framer-motion'
import { FC } from 'react'
import { Tool } from '../../models/Tool'


interface ToolDescriptionProps {
	tool: Tool
	onClose: () => void
}

export const ToolDescription: FC<ToolDescriptionProps> = ({ tool, onClose }) => {

	return (
		<motion.div
			className='absolute inset-0 w-screen h-screen grid place-items-center bg-[rgba(0,0,0,0.6)]'
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				layoutId={tool.id}
				className='relative rounded-lg bg-white w-[40rem] h-96 p-8 flex flex-col justify-between items-center'
			>
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.25 }}
					className='absolute right-3 top-3 w-8 h-8 bg-slate-400 rounded-full'
					onClick={onClose}
				>
					x
				</motion.button>

				<motion.h2 layoutId={`title_${tool.id}`} className='text-3xl text-center'>{tool.name}</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.25 }}
				>
					{tool.description}
				</motion.p>

				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.25 }}
					className='w-52 h-10 rounded-lg bg-yellow-500 transition-transform active:scale-95'
				>
					Generar Documentación
				</motion.button>
			</motion.div>
		</motion.div>
	)

}