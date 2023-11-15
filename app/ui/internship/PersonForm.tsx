import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Person } from "@/src/models/Person"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"


interface PersonFormProps {
	nextForm: () => void
}

export const PersonForm: FC<PersonFormProps> = ({ nextForm }) => {

	const {
		handleSubmit,
		control
	} = useForm<Person>({
		defaultValues: {
			name: '',
			phone: '',
			email: '',
			isSpeakerOfIndigenousLanguage: false,
			indigenousLanguage: '',
			hasDisability: false,
			disability: ''
		},
	})

	const onSubmit: SubmitHandler<Person> = data => {
		localStorage.setItem('person', JSON.stringify(data))
		nextForm()
	}

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
					<Controller
						name="name"
						control={control}
						render={({ field }) => (
							<Input type="text" {...field} label="Nombre Completo" isRequired />
						)}
					/>

					<Controller
						name="phone"
						control={control}
						render={({ field }) => (
							<Input type="text" inputMode="tel" label="Número Celular" {...field} isRequired />
						)}
					/>

					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<Input type="email" inputMode="email" label="Correo Electrónico" {...field} />
						)}
					/>

					<Controller
						name="indigenousLanguage"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Lengua Indígena"
								description="Si eres hablante de lengua indígena, escríbela aquí. Si no, déjalo en blanco."
								{...field}
							/>
						)}
					/>

					<Controller
						name="disability"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Discapacidad"
								description="Si tienes alguna discapacidad, escríbela aquí. Si no, déjalo en blanco."
								{...field}
							/>
						)}
					/>

					<div className="col-span-2 flex justify-center mt-2">
						<Button className="bg-utm-container-3 text-utm-on-container-3 w-32" type="submit">Guardar</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}