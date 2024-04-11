import { Form } from "../ui/makeup_exam/Form"
import { Metadata } from "next"


export const metadata: Metadata = {
	title: 'Extraordinario'
}

const Extraordinario = () => {

	return (
		<div className="container mx-auto py-5 px-3">
			<Form />
		</div>
	)

}

export default Extraordinario