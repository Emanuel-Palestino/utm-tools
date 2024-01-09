import { Documents } from "../ui/social_service/Documents"
import { Form } from "../ui/social_service/Form"


const SocialService = () => {

	return (
		<div className="container mx-auto pt-5 px-3 sm:px-0">
			<div className="w-full flex flex-wrap gap-12">
				<Form />
				<Documents />
			</div>
		</div>
	)

}

export default SocialService