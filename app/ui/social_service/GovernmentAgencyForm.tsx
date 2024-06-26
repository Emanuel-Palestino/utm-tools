import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useSocialServiceStore } from "@/app/store/socialService"
import { GovernmentAgency } from "@/src/models/social_service/GovernmentAgency"
import { FC } from "react"


interface GovernmentAgencyFormProps {
	nextForm: () => void
}

const GovernmentAgencyForm: FC<GovernmentAgencyFormProps> = ({ nextForm }) => {

	const { save, values } = useSocialServiceStore(state => ({
		save: state.setGovernmentAgencyData,
		values: state.governmentAgencyData,
		isComplete: state.isGovernmentAgencyDataComplete
	}))

	const {
		control,
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
		values
	})

	const onSubmit: SubmitHandler<GovernmentAgency> = data => {
		save(data)
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
							<Input
								type="text"
								label="Nombre de la Institución"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="state"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Estado de la República"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="city"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Ciudad o Localidad"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="address"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Dirección"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="email"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Correo de la Institución"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="supervisorName"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Nombre del Responsable Inmediato"
								description="Nombre del responsable de la institución donde se realizará el servicio social."
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="supervisorPosition"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Cargo del Responsable Inmediato"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="supervisorWorkArea"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Área de Trabajo del Responsable Inmediato"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="supervisorPhone"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Teléfono del Responsable Inmediato"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="supervisorEmail"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Correo del Responsable Inmediato"
								isRequired
								{...field}
							/>
						)}
					/>

					<div className="flex justify-center mt-2 md:col-span-2">
						<Button className="w-32" color="primary" type="submit">
							{values ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}

export default GovernmentAgencyForm