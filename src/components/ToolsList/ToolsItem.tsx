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
			className="flex flex-col justify-center items-center bg-yellow-900 rounded-lg"
			onClick={onClick}
			whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
			layoutId={id}
		>
			<motion.small className="text-yellow-950">{type}</motion.small>
			<motion.p>{name}</motion.p>
		</motion.button>
	)

}