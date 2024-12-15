import { Card, CardBody } from "@nextui-org/card"
import { Select, SelectItem } from "@nextui-org/select"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { careers } from "@/src/models/Careers"
import { SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"
import { useSocialServiceStore } from "@/app/store/socialService"
import { SocialServiceStudent } from "@/src/models/social_service/SocialServiceStudent"


interface StudentFormProps {
	nextForm: () => void
}

const StudentForm: FC<StudentFormProps> = ({ nextForm }) => {

	const {
		studentData,
		setStudentData,
	} = useSocialServiceStore()

	const {
		handleSubmit,
		register
	} = useForm<SocialServiceStudent>({
		defaultValues: {
			career: 'Ingeniería en Computación',
			enrollment: '',
			semester: 0,
			address: '',
			percentageOfApprovedCredits: 0
		},
		values: studentData
	})

	const onSubmit: SubmitHandler<SocialServiceStudent> = data => {
		data.semester = Number(data.semester)
		data.percentageOfApprovedCredits = Number(data.percentageOfApprovedCredits)
		setStudentData(data)
		nextForm()
	}

	return (
		<Card>
			<CardBody className="p-4">
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
					<Select
						label="Carrera"
						{...register('career')}
						isRequired
					>
						{careers.map(career => (
							<SelectItem key={career} value={career}>
								{career}
							</SelectItem>
						))}
					</Select>

					<Select
						label="Semestre"
						{...register('semester', { required: true })}
						isRequired
					>
						<SelectItem key="8" value="8">Octavo</SelectItem>
						<SelectItem key="9" value="9">Noveno</SelectItem>
						<SelectItem key="10" value="10">Décimo</SelectItem>
					</Select>

					<Input
						type="text"
						label="Matrícula"
						{...register('enrollment', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Dirección"
						{...register('address', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Porcentaje de créditos aprobados"
						{...register('percentageOfApprovedCredits', { required: true })}
						isRequired
					/>

					<div className="flex justify-center mt-2 md:col-span-2">
						<Button className="w-32" color="primary" type="submit">
							{studentData ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}

export default StudentForm