import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Person } from "@/src/models/Person"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"
import { useInternshipStore } from "@/app/store/internship"
import { Switch } from "@nextui-org/switch"
import * as z from "zod"
import { zodResolver } from "@hookform/resolvers/zod"


const schema = z.object({
	name: z.string().min(3).max(30).regex(/^[a-zA-ZÀ-ÿ\s]*$/, { message: 'Solo puede contener letras.' }),
	phone: z.string().min(10).max(13).trim().regex(/^[0-9\s]*$/, { message: 'Solo puede contener números y/o espacios en blanco.' }),
	email: z.literal('').or(z.string().email()),
	isSpeakerOfIndigenousLanguage: z.boolean(),
	indigenousLanguage: z.string().min(3).regex(/^[a-zA-ZÀ-ÿ\s]*$/, { message: 'Solo puede contener letras.' }).optional(),
	hasDisability: z.boolean(),
	disability: z.string().min(3).regex(/^[a-zA-ZÀ-ÿ\s]*$/, { message: 'Solo puede contener letras.' }).optional()
})

interface PersonFormProps {
	nextForm: () => void
}

export const PersonForm: FC<PersonFormProps> = ({ nextForm }) => {

	const { save, values, isComplete } = useInternshipStore(state => ({
		save: state.setPersonalData,
		values: state.personalData,
		isComplete: state.isPersonalDataComplete
	}))

	const {
		handleSubmit,
		control,
		watch
	} = useForm<Person>({
		resolver: zodResolver(schema),
		shouldUnregister: true,
		defaultValues: {
			name: '',
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
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
					<Controller
						name="name"
						control={control}
						render={({ field, fieldState: { invalid, error } }) => (
							<Input
								type="text"
								{...field}
								label="Nombre Completo"
								isRequired
								isInvalid={invalid}
								errorMessage={error ? error.message : ''}
							/>
						)}
					/>

					<Controller
						name="phone"
						control={control}
						render={({ field, fieldState: { invalid, error } }) => (
							<Input
								type="text"
								inputMode="tel"
								label="Número Celular"
								{...field}
								isRequired
								isInvalid={invalid}
								errorMessage={error ? error.message : ''}
							/>
						)}
					/>

					<Controller
						name="email"
						control={control}
						render={({ field, fieldState: { invalid, error } }) => (
							<Input
								type="email"
								inputMode="email"
								label="Correo Electrónico"
								{...field}
								isInvalid={invalid}
								errorMessage={error ? error.message : ''}
							/>
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
							render={({ field, fieldState: { invalid, error } }) => (
								<Input
									type="text"
									label="Lengua Indígena"
									isRequired={watch('isSpeakerOfIndigenousLanguage')}
									{...field}
									isInvalid={invalid}
									errorMessage={error ? error.message : ''}
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
							render={({ field, fieldState: { invalid, error } }) => (
								<Input
									type="text"
									label="Discapacidad"
									isRequired={watch('hasDisability')}
									{...field}
									isInvalid={invalid}
									errorMessage={error ? error.message : ''}
								/>
							)}
						/>
					)}

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