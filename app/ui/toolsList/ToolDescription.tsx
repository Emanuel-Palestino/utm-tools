import { motion } from 'framer-motion'
import { FC } from 'react'
import { Tool } from '@/src/models/Tool'
import { format } from 'date-fns'
import es from 'date-fns/locale/es'
import { useRouter } from 'next/navigation'


interface ToolDescriptionProps {
	tool: Tool
	onClose: () => void
}

export const ToolDescription: FC<ToolDescriptionProps> = ({ tool, onClose }) => {

	const router = useRouter()

	const handleClick = () => router.push(tool.link)

	return (
		<motion.div
			className="absolute inset-0 w-full h-full flex place-items-center place-content-center bg-[rgba(0,0,0,0.6)] overflow-hidden"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
		>
			<motion.div
				layoutId={tool.id}
				className="relative rounded-xl bg-utm-container-2 w-[50rem] h-auto p-8 flex flex-col justify-between items-center gap-8 text-utm-on-container-2"
			>
				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.4 }}
					className="absolute right-4 top-4 w-8 h-8 bg-utm-on-container-2 rounded-xl grid place-items-center transition-transform active:scale-90"
					onClick={onClose}
				>
					<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 fill-utm-container-2" viewBox="0 0 16 16">
						<path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
					</svg>
				</motion.button>


				<motion.h2 layoutId={`title_${tool.id}`} className='text-3xl font-medium'>{tool.name}</motion.h2>

				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2 }}
					className="flex flex-col gap-4"
				>
					<p>{tool.description}</p>

					<div>
						<h3 className='text-lg font-medium'>{tool.subtitle}</h3>
						<ul className='list-disc list-inside pl-4'>
							{tool.documentation.map(doc => (
								<li key={`${tool.id}_${doc}`}>{doc}</li>
							))}
						</ul>
					</div>

					<p className='text-utm-container-2-dark text-sm'>
						Última actualizacion: {format(new Date(`${tool.date} GMT-6`), "dd 'de' MMMM 'del' y", { locale: es })}
					</p>
				</motion.div>

				<motion.button
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.3, duration: 0.4 }}
					className="w-52 h-10 rounded-xl bg-utm-container-3 text-utm-on-container-3 transition-transform active:scale-95"
					onClick={handleClick}
				>
					Generar Documentación
				</motion.button>
			</motion.div>
		</motion.div>
	)

}