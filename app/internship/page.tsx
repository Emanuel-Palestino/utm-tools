import { Form } from "@/app/ui/internship/Form"
import { Documents } from "../ui/internship/Documents"


const Internship = () => {

	return (
		<div className="container mx-auto pt-5 px-3 sm:px-0">
			<div className="w-full flex flex-wrap gap-12">
				<Form />
				<Documents />
			</div>
		</div>
	)

}

export default Internship