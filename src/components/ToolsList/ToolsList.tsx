import { ToolsItem } from './ToolsItem'


export const ToolsList = () => {

	return (
		<section className="container h-full mx-auto grid grid-cols-3 grid-rows-3 gap-6 py-4 px-2">
			<ToolsItem />
			<ToolsItem />
			<ToolsItem />
			<ToolsItem />
		</section>
	)

}