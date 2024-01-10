import { Card, CardBody } from "@nextui-org/card"
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete"
import { Select, SelectItem } from "@nextui-org/select"
import { Button } from "@nextui-org/button"
import { Switch } from "@nextui-org/switch"
import { Input } from "@nextui-org/input"
import { careers } from "@/src/models/Careers"
import { StudentState } from "@/src/models/StudentState"
import { InternshipStudent } from "@/src/models/InternshipStudent"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"
import { useInternshipStore } from "@/app/store/internship"


interface StudentFormProps {
	nextForm: () => void
}

export const StudentForm: FC<StudentFormProps> = ({ nextForm }) => {

	const { save, values, isComplete } = useInternshipStore(state => ({
		save: state.setStudentData,
		values: state.studentData,
		isComplete: state.isStudentDataComplete
	}))

	const {
		handleSubmit,
		control,
	} = useForm<InternshipStudent>({
		defaultValues: {
			career: 'Ingeniería en Computación',
			state: StudentState.ACTIVE,
			enrollment: '',
			ss: '',
			semester: 0,
			haveSummerClass: false,
			summerCourses: '',
			haveToRetakeSubjects: false,
			haveMakeUpExam: false,
			haveFirstMakeUpExam: false,
			haveSecondMakeUpExam: false
		},
		values
	})

	const onSubmit: SubmitHandler<InternshipStudent> = data => {
		data.semester = Number(data.semester)
		save(data)
		nextForm()
	}

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
					<Controller
						name="state"
						control={control}
						render={({ field }) => (
							<Select
								label="Estado"
								isRequired
								{...field}
								selectedKeys={field.value ? [field.value] : []}
							>
								<SelectItem key={StudentState.ACTIVE} value={StudentState.ACTIVE}>Activo</SelectItem>
								<SelectItem key={StudentState.GRADUATED} value={StudentState.GRADUATED}>Egresado</SelectItem>
								<SelectItem key={StudentState.TEMPORARY_LEAVE} value={StudentState.TEMPORARY_LEAVE}>Baja Temporal</SelectItem>
							</Select>
						)}
					/>

					<Controller
						name="career"
						control={control}
						render={({ field }) => (
							<Autocomplete
								label="Carrera"
								isRequired
								{...field}
								inputValue={field.value || ''}
								onSelectionChange={field.onChange}
							>
								{careers.map(career => (
									<AutocompleteItem key={career} value={career}>
										{career}
									</AutocompleteItem>
								))}
							</Autocomplete>
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
								<SelectItem key="6" value="6">Sexto</SelectItem>
								<SelectItem key="7" value="7">Séptimo</SelectItem>
								<SelectItem key="8" value="8">Octavo</SelectItem>
								<SelectItem key="9" value="9">Noveno</SelectItem>
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
						name="ss"
						control={control}
						render={({ field }) => (
							<Input
								type="string"
								label="Número de Seguro Social"
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="summerCourses"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Materias de Curso de Verano"
								description="Si tienes que cursar materias en curso de verano, escríbelas aquí. Si no, déjalo en blanco."
								{...field}
							/>
						)}
					/>

					<Controller
						name="haveToRetakeSubjects"
						control={control}
						render={({ field }) => (
							<Switch {...field} value="" isSelected={field.value} >¿Tienes que recursar materias?</Switch>
						)}
					/>

					<Controller
						name="haveFirstMakeUpExam"
						control={control}
						render={({ field }) => (
							<Switch {...field} value="" isSelected={field.value}>¿Tienes que presentar primer exámen extraordinario?</Switch>
						)}
					/>

					<Controller
						name="haveSecondMakeUpExam"
						control={control}
						render={({ field }) => (
							<Switch {...field} value="" isSelected={field.value}>¿Tienes que presentar segundo exámen extraordinario?</Switch>
						)}
					/>

					<div className="flex justify-center mt-2 md:col-span-2">
						<Button className="bg-utm-container-3 text-utm-on-container-3 w-32" type="submit">
							{isComplete ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}