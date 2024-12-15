'use client'

import { ToolsItem } from '@app/_components/tools/ToolsItem'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ToolDescription } from '@app/_components/tools/ToolDescription'
import { Tool } from '@app/_lib/types/Tool'
import tools from '@app/_lib/tools.json'


const Index = () => {

	const [selectedTool, setSelectedTool] = useState<Tool | null>(null)

	return (
		<main className="">
			<section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 py-4 px-2">
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
		</main>
	)
}

export default Index