import { Disclaimer } from "../ui/Disclaimer"
import { Documents } from "../ui/social_service/Documents"
import { Form } from "../ui/social_service/Form"
import { Metadata } from "next"


export const metadata: Metadata = {
	title: 'Servicio Social',
	description: 'Generación de documentación completa para la solicitud y seguimiento de servicio social de la Universidad Tecnológica de la Mixteca. Proceso y requisitos para la realización de servicio social en la UTM. Formatos, plantillas y documentos de servicio social de la UTM.',
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
			<h1 className="text-center text-xl sm:text-3xl font-semibold mb-8 mt-1">Documentación para el Servicio Social de la UTM</h1>

			<div className="w-full flex flex-col gap-12">
				<Form />
				<Documents />
			</div>

			<Disclaimer />
		</div>
	)

}

export default SocialService