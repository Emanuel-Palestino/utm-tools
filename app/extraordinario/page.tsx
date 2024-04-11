import { Form } from "../ui/makeup_exam/Form"
import { Metadata } from "next"


export const metadata: Metadata = {
	title: 'Extraordinario'
}

const Extraordinario = () => {

	return (
		<div className="container mx-auto py-5 px-3">
			<h1 className="text-center text-xl sm:text-2xl mb-4">Extraordinario</h1>

			<Form />
		</div>
	)

}

export default Extraordinario