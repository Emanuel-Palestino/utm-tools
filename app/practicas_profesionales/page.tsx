import { Form } from "@/app/ui/internship/Form"
import { Documents } from "../ui/internship/Documents"
import { Metadata } from "next"


export const metadata: Metadata = {
	title: 'Estancias Profesionales',
	description: 'Generación de documentación completa y seguimiento para estancias profesionales de la Universidad Tecnológica de la Mixteca.'
}

const Internship = () => {

	return (
		<div className="container mx-auto py-5 px-3">
			<div className="w-full flex flex-wrap gap-12">
				<Form />
				<Documents />
			</div>
		</div>
	)

}

export default Internship