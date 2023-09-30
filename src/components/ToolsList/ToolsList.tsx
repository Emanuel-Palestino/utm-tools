import { ToolsItem } from './ToolsItem'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ToolDescription } from './ToolDescription'
import { Tool } from '../../models/Tool'
import tools from '../../assets/tools.json'


export const ToolsList = () => {

	const [selectedTool, setSelectedTool] = useState<Tool | null>(null)


	return (
		<section className="container h-full mx-auto grid grid-cols-3 grid-rows-3 gap-6 py-4 px-2">
			{tools.map(tool => (
				<ToolsItem
					key={tool.id}
					type={tool.type}
					name={tool.name}
					id={tool.id}
					onClick={() => setSelectedTool(tool)}
				/>
			))}

			<AnimatePresence onExitComplete={() => setSelectedTool({ id: '', description: '', name: '', type: '', subtitle: '', documentation: [], date: '2023-09-10', link: '' })}>
				{selectedTool?.id && (
					<ToolDescription
						tool={selectedTool}
						onClose={() => setSelectedTool(null)}
					/>
				)}
			</AnimatePresence>
		</section>
	)

}