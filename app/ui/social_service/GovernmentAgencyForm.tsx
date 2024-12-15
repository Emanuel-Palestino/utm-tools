import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { SubmitHandler, useForm } from "react-hook-form"
import { useSocialServiceStore } from "@app/store/socialService"
import { FC } from "react"
import { GovernmentAgency } from "@app/_lib/types/SocialService"


interface GovernmentAgencyFormProps {
	nextForm: () => void
}

const GovernmentAgencyForm: FC<GovernmentAgencyFormProps> = ({ nextForm }) => {

	const {
		governmentAgencyData,
		setGovernmentAgencyData,
	} = useSocialServiceStore()

	const {
		register,
		handleSubmit,
	} = useForm<GovernmentAgency>({
		defaultValues: {
			name: '',
			state: '',
			city: '',
			address: '',
			email: '',
			supervisorName: '',
			supervisorPosition: '',
			supervisorPhone: '',
			supervisorEmail: '',
			supervisorWorkArea: ''
		},
		values: governmentAgencyData,
	})

	const onSubmit: SubmitHandler<GovernmentAgency> = data => {
		setGovernmentAgencyData(data)
		nextForm()
	}

	return (
		<Card>
			<CardBody className="p-4">
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
					<Input
						type="text"
						label="Nombre de la Institución"
						{...register('name', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Estado de la República"
						{...register('state', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Ciudad o Localidad"
						{...register('city', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Dirección"
						{...register('address', { required: true })}
						isRequired
					/>

					<Input
						type="email"
						label="Correo de la Institución"
						{...register('email', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Nombre del Responsable Inmediato"
						description="Nombre del responsable de la institución donde se realizará el servicio social."
						{...register('supervisorName', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Cargo del Responsable Inmediato"
						{...register('supervisorPosition', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Área de Trabajo del Responsable Inmediato"
						{...register('supervisorWorkArea', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Teléfono del Responsable Inmediato"
						{...register('supervisorPhone', { required: true })}
						isRequired
					/>

					<Input
						type="email"
						label="Correo del Responsable Inmediato"
						{...register('supervisorEmail', { required: true })}
						isRequired
					/>

					<div className="flex justify-center mt-2 md:col-span-2">
						<Button className="w-32" color="primary" type="submit">
							{governmentAgencyData ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}

export default GovernmentAgencyForm