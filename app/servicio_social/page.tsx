import { Documents } from "../ui/social_service/Documents"
import { Form } from "../ui/social_service/Form"
import { Metadata } from "next"


export const metadata: Metadata = {
	title: 'Servicio Social',
	description: 'Generación de documentación completa para la solicitud y seguimiento de servicio social de la Universidad Tecnológica de la Mixteca.'
}

const SocialService = () => {

	return (
		<div className="container mx-auto py-5 px-3">
			<div className="w-full flex flex-wrap gap-12">
				<Form />
				<Documents />
			</div>
		</div>
	)

}

export default SocialService