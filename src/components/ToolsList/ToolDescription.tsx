import { motion } from 'framer-motion'
import { FC } from 'react'
import { Tool } from '../../models/Tool'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'


interface ToolDescriptionProps {
	tool: Tool
	onClose: () => void
}

export const ToolDescription: FC<ToolDescriptionProps> = ({ tool, onClose }) => {

	return (
		<motion.div
			className="absolute inset-0 w-full h-full flex place-items-center place-content-center bg-[rgba(0,0,0,0.6)] overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				layoutId={tool.id}
				className="relative rounded-lg bg-white w-[50rem] h-auto p-8 flex flex-col justify-between gap-6"
			>
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.4 }}
					className="absolute right-4 top-4 w-8 h-8 bg-slate-400 rounded-full grid place-items-center transition-transform active:scale-90"
					onClick={onClose}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 16 16">
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				</motion.button>


				<motion.h2 layoutId={`title_${tool.id}`} className='mb-4 text-3xl text-center font-medium'>{tool.name}</motion.h2>
				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
				>
					{tool.description}
				</motion.p>


				<div>
					<motion.h3
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.2 }}
						className='text-lg font-medium'
					>
						{tool.subtitle}
					</motion.h3>
					<motion.ul className='list-disc list-inside'>
						{tool.documentation.map(doc => (
							<motion.li
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.2 }}
								key={`${tool.id}_${doc}`}
							>
								{doc}
							</motion.li>
						))}
					</motion.ul>
				</div>


				<motion.p
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className='text-slate-500 text-sm'
				>
					Última actualizacion: {format(new Date(`${tool.date} GMT-6`), "dd 'de' MMMM 'del' y", { locale: es })}
				</motion.p>


				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.4 }}
					className="w-52 h-10 rounded-lg mx-auto mt-4 bg-yellow-500 transition-transform active:scale-95"
				>
					Generar Documentación
				</motion.button>
			</motion.div>
		</motion.div>
	)

}