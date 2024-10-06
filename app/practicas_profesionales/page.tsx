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
			<h1 className="text-center text-xl sm:text-3xl font-semibold mb-8 mt-1">Documentación para Estancias Profesionales de la UTM</h1>

			<div className="w-full flex flex-col gap-12">
				<section>
					<h2 className="text-lg sm:text-2xl mb-2 md:mb-4 text-center md:text-left">1 - Ingresa los datos necesarios</h2>
					<Form />
				</section>

				<section>
					<h2 className="text-xl sm:text-2xl text-center md:text-left mb-4">2 - Descarga tu documentación</h2>
					<Documents />
				</section>
			</div>

			<Disclaimer />
		</div>
	)

}

export default Internship