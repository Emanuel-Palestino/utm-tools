import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Person } from "@/src/models/Person"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"
import { useInternshipStore } from "@/app/store/internship"
import { Switch } from "@nextui-org/switch"


interface PersonFormProps {
	nextForm: () => void
}

const PersonForm: FC<PersonFormProps> = ({ nextForm }) => {

	const { setPersonalData, personalData } = useInternshipStore()

	const {
		handleSubmit,
		control,
		watch
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
		values: personalData
	})

	const onSubmit: SubmitHandler<Person> = data => {
		setPersonalData(data)
		nextForm()
	}

	return (
		<Card>
			<CardBody className="p-4">
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
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
						name="isSpeakerOfIndigenousLanguage"
						control={control}
						render={({ field }) => (
							<Switch {...field} value="" isSelected={field.value} >¿Hablas alguna lengua indígena?</Switch>
						)}
					/>

					{watch('isSpeakerOfIndigenousLanguage') && (
						<Controller
							name="indigenousLanguage"
							control={control}
							render={({ field }) => (
								<Input
									type="text"
									label="Lengua Indígena"
									isRequired={watch('isSpeakerOfIndigenousLanguage')}
									{...field}
								/>
							)}
						/>
					)}

					<Controller
						name="hasDisability"
						control={control}
						render={({ field }) => (
							<Switch {...field} value="" isSelected={field.value} >¿Tienes alguna discapacidad? </Switch>
						)}
					/>

					{watch('hasDisability') && (
						<Controller
							name="disability"
							control={control}
							render={({ field }) => (
								<Input
									type="text"
									label="Discapacidad"
									isRequired={watch('hasDisability')}
									{...field}
								/>
							)}
						/>
					)}

					<div className="flex justify-center mt-2 md:col-span-2">
						<Button className="w-32" color="primary" type="submit">
							{personalData ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}

export default PersonForm