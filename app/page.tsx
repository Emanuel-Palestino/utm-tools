'use client'

import { Transition } from '@/app/ui/Transition'
import { ToolsItem } from '@/app/ui/toolsList/ToolsItem'
import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ToolDescription } from '@/app/ui/toolsList/ToolDescription'
import { Tool } from '@/src/models/Tool'
import tools from '@/public/tools.json'


const Index = () => {
	const [selectedTool, setSelectedTool] = useState<Tool | null>(null)

	return (
		<Transition>
			<main className="w-screen h-screen relative bg-utm-background">
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
			</main>
		</Transition>
	)
}

export default Index