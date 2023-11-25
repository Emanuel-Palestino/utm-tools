import { Form } from "@/app/ui/internship/Form"
import { Documents } from "../ui/internship/Documents"


const Internship = () => {

	return (
		<div className="container mx-auto py-4 px-3 sm:px-0">
			<h1 className="text-4xl text-center mb-10">Prácticas Profesionales</h1>

			<div className="w-full flex flex-wrap gap-12">
				<Form />

				<Documents />
			</div>
		</div>
	)

}

export default Internship