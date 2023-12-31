import { FC } from 'react'
import { motion } from 'framer-motion'


interface ToolsItemProps {
	type: string
	name: string
	id: string
	onClick?: () => void
}

export const ToolsItem: FC<ToolsItemProps> = ({ type, name, id, onClick }) => {

	return (
		<motion.button
			className="flex flex-col justify-center items-center bg-utm-container-2 rounded-xl h-40 md:h-60"
			onClick={onClick}
			whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
			layoutId={id}
		>
			<small className="text-utm-on-container-2 text-sm">{type}</small>
			<motion.p layoutId={`title_${id}`} className='text-utm-on-container-2 text-xl font-medium'>{name}</motion.p>
		</motion.button>
	)

}