import { ToolsList } from '../../components/ToolsList/ToolsList'
import { Transition } from '../../components/Transition'


export const Index = () => {
	return (
		<Transition>
			<main className="w-screen h-screen relative bg-utm-background">
				<ToolsList />
			</main>
		</Transition>
	)
}