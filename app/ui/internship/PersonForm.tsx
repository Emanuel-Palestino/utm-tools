import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Person } from "@/src/models/Person"
import { SubmitHandler, useForm } from "react-hook-form"


export const PersonForm = () => {

	const {
		register,
		handleSubmit,
	} = useForm<Person>()

	const onSubmit: SubmitHandler<Person> = (data) => console.log(data)

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
					<Input type="text" {...register('name')} label="Nombre Completo" isRequired />

					<Input type="text" inputMode="tel" label="Número Celular" {...register('phone')} isRequired />

					<Input type="email" inputMode="email" label="Correo Electrónico" {...register('email')} />

					<Input
						type="text"
						label="Lengua Indígena"
						description="Si eres hablante de lengua indígena, escríbela aquí. Si no, déjalo en blanco."
						{...register('indigenousLanguage')}
					/>

					<Input
						type="text"
						label="Discapacidad"
						description="Si tienes alguna discapacidad, escríbela aquí. Si no, déjalo en blanco."
						{...register('disability')}
					/>

					<div className="col-span-2 flex justify-center mt-2">
						<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}