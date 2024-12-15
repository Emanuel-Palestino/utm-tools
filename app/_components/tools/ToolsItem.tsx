import { FC } from "react"
import { motion } from "framer-motion"

interface ToolsItemProps {
  type: string
  name: string
  id: string
  onClick?: () => void
}

export const ToolsItem: FC<ToolsItemProps> = ({ type, name, id, onClick }) => {
  return (
    <motion.button
      className="flex flex-col justify-center items-center bg-white shadow-medium rounded-xl h-40 md:h-60"
      onClick={onClick}
      layoutId={id}
    >
      <small className="text-sm">{type}</small>
      <motion.p layoutId={`title_${id}`} className="text-xl font-medium">
        {name}
      </motion.p>
    </motion.button>
  )
}
