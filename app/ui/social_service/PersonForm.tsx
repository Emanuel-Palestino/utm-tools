import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Person } from "@/src/models/Person"
import { SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"
import { useSocialServiceStore } from "@/app/store/socialService"
import { Switch } from "@nextui-org/switch"


interface PersonFormProps {
	nextForm: () => void
}

const PersonForm: FC<PersonFormProps> = ({ nextForm }) => {

	const { save, values, isComplete } = useSocialServiceStore(state => ({
		save: state.setPersonalData,
		values: state.personalData,
		isComplete: state.isPersonalDataComplete
	}))

	const {
		handleSubmit,
		watch,
		register
	} = useForm<Person>({
		defaultValues: {
			name: '',
			paternalSurname: '',
			maternalSurname: '',
			phone: '',
			email: '',
			isSpeakerOfIndigenousLanguage: false,
			indigenousLanguage: '',
			hasDisability: false,
			disability: ''
		},
		values: values
	})

	const onSubmit: SubmitHandler<Person> = data => {
		save(data)
		nextForm()
	}

	return (
		<Card>
			<CardBody className="p-4">
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
					<Input
						type="text"
						label="Nombre(s)"
						{...register('name', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Apellido Paterno"
						{...register('paternalSurname', { required: true })}
						isRequired
					/>


					<Input
						type="text"
						label="Apellido Materno"
						{...register('maternalSurname', { required: true })}
						isRequired
					/>


					<Input
						type="text"
						inputMode="tel"
						label="Número Celular"
						{...register('phone', { required: true })}
						isRequired
					/>


					<Input
						type="email"
						inputMode="email"
						label="Correo Electrónico"
						{...register('email')}
					/>


					<Switch
						{...register('isSpeakerOfIndigenousLanguage')}
					>
						¿Hablas alguna lengua indígena?
					</Switch>

					{watch('isSpeakerOfIndigenousLanguage') &&
						<Input
							type="text"
							label="Lengua Indígena"
							{...register('indigenousLanguage', { required: watch('isSpeakerOfIndigenousLanguage') })}
							isRequired={watch('isSpeakerOfIndigenousLanguage')}
						/>
					}

					<Switch
						{...register('hasDisability')}
					>
						¿Tienes alguna discapacidad?
					</Switch>

					{watch('hasDisability') &&
						<Input
							type="text"
							label="Discapacidad"
							{...register('disability', { required: watch('hasDisability') })}
							isRequired={watch('hasDisability')}
						/>
					}

					<div className="flex justify-center mt-2 md:col-span-2">
						<Button className="w-32" color="primary" type="submit">
							{isComplete ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}

export default PersonForm