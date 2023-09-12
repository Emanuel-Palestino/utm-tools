import { FC } from 'react'
import { motion, MotionProps } from 'framer-motion'


interface ToolsItemProps {
	type: string
	name: string
	onClick?: () => void
}

export const ToolsItem: FC<ToolsItemProps & MotionProps> = ({ type, name, onClick, ...props }) => {

	return (
		<motion.button
			className="flex flex-col justify-center items-center bg-yellow-900 rounded-lg"
			onClick={onClick}
			whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
			{...props}
		>
			<motion.small className="text-yellow-950">{type}</motion.small>
			<motion.p>{name}</motion.p>
		</motion.button>
	)

}