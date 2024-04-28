import { Form } from "@/app/ui/internship/Form"
import { Documents } from "../ui/internship/Documents"
import { Metadata } from "next"
import { Disclaimer } from "../ui/Disclaimer"


export const metadata: Metadata = {
	title: 'Estancias Profesionales',
	description: 'Generación de documentación completa y seguimiento para estancias profesionales de la Universidad Tecnológica de la Mixteca.'
}

const Internship = () => {

	return (
		<div className="container mx-auto py-5 px-3">
			<h1 className="text-center text-xl sm:text-2xl">Estancias Profesionales</h1>

			<div className="w-full flex flex-wrap gap-12">
				<Form />
				<Documents />
			</div>

			<Disclaimer />
		</div>
	)

}

export default Internship