import { Card, CardBody } from "@nextui-org/card"
import { Select, SelectItem } from "@nextui-org/select"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { careers } from "@/src/models/Careers"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"
import { useSocialServiceStore } from "@/app/store/socialService"
import { SocialServiceStudent } from "@/src/models/social_service/SocialServiceStudent"


interface StudentFormProps {
	nextForm: () => void
}

export const StudentForm: FC<StudentFormProps> = ({ nextForm }) => {

	const { save, values, isComplete } = useSocialServiceStore(state => ({
		save: state.setStudentData,
		values: state.studentData,
		isComplete: state.isStudentDataComplete
	}))

	const {
		handleSubmit,
		control
	} = useForm<SocialServiceStudent>({
		defaultValues: {
			career: 'Ingeniería en Computación',
			enrollment: '',
			semester: 0,
			address: '',
			percentageOfApprovedCredits: 0
		},
		values
	})

	const onSubmit: SubmitHandler<SocialServiceStudent> = data => {
		data.semester = Number(data.semester)
		data.percentageOfApprovedCredits = Number(data.percentageOfApprovedCredits)
		save(data)
		nextForm()
	}

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
					<Controller
						name="career"
						control={control}
						render={({ field }) => (
							<Select
								label="Carrera"
								isRequired
								{...field}
								selectedKeys={field.value ? [String(field.value)] : []}
							>
								{careers.map(career => (
									<SelectItem key={career} value={career}>
										{career}
									</SelectItem>
								))}
							</Select>
						)}
					/>

					<Controller
						name="semester"
						control={control}
						render={({ field }) => (
							<Select
								label="Semestre"
								isRequired
								{...field}
								selectedKeys={field.value ? [String(field.value)] : []}
							>
								<SelectItem key="8" value="8">Octavo</SelectItem>
								<SelectItem key="9" value="9">Noveno</SelectItem>
								<SelectItem key="10" value="10">Décimo</SelectItem>
							</Select>
						)}
					/>

					<Controller
						name="enrollment"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Matrícula"
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
						name="percentageOfApprovedCredits"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Porcentaje de créditos aprobados"
								isRequired
								{...field}
								value={field.value ? String(field.value) : ''}
							/>
						)}
					/>

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