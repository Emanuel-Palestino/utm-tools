import { Disclaimer } from "@app/_components/Disclaimer"
import { Documents } from "@app/servicio_social/Documents"
import { Form } from "@app/servicio_social/Form"
import { Metadata } from "next"
import { Utilities } from "@app/servicio_social/Utilities"


export const metadata: Metadata = {
	title: 'Servicio Social',
	description: 'Documentación para solicitud y seguimiento de servicio social en la Universidad Tecnológica de la Mixteca: procesos, requisitos, formatos, plantillas y documentos.',
	keywords: [
		'universidad tecnológica de la mixteca',
		'utm servicio social',
		'universidad tecnológica de la mixteca servicio social',
		'utm servicio social requisitos',
		'utm servicio social documentos',
		'utm servicio social formatos',
		'utm servicio social solicitud',
		'utm servicio social seguimiento',
		'utm servicio social proceso',
		'utm servicio social pasos',
		'utm servicio social plantillas',
		'utm servicio social guía'
	]
}

const SocialService = () => {

	return (
		<div className="container mx-auto py-5 px-3">
			<h1 className="text-center text-xl sm:text-3xl font-semibold mb-8 mt-1">Documentación para realizar el Servicio Social de la UTM</h1>

			<div className="w-full flex flex-col gap-12">
				<section>
					<h2 className="text-lg sm:text-2xl mb-2 md:mb-4 text-center md:text-left">1 - Ingresa los datos necesarios</h2>
					<Form />
				</section>

				<section>
					<h2 className="text-xl sm:text-2xl text-center md:text-left mb-4">2 - Descarga tu documentación</h2>
					<Documents />
				</section>

				<section>
					<h3 className="text-lg sm:text-xl mb-4">Utilidades</h3>
					<Utilities />
				</section>
			</div>

			<Disclaimer />
		</div>
	)

}

export default SocialService