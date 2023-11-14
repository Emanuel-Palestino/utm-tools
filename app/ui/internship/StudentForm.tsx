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


export const StudentForm = () => {

	const {
		register,
		handleSubmit,
		control,
	} = useForm<InternshipStudent>()

	const onSubmit: SubmitHandler<InternshipStudent> = (data) => console.log(data)

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
					<Select
						label="Estado"
						{...register('state')}
						isRequired
					>
						<SelectItem key={StudentState.ACTIVE} value={StudentState.ACTIVE}>Activo</SelectItem>
						<SelectItem key={StudentState.GRADUATED} value={StudentState.GRADUATED}>Egresado</SelectItem>
						<SelectItem key={StudentState.TEMPORARY_LEAVE} value={StudentState.TEMPORARY_LEAVE}>Baja Temporal</SelectItem>
					</Select>

					<Autocomplete
						label="Carrera"
						{...register('career')}
						isRequired
					>
						{careers.map(career => (
							<AutocompleteItem key={career} value={career}>
								{career}
							</AutocompleteItem>
						))}
					</Autocomplete>

					<Input type="number" inputMode="numeric" {...register('semester')} label="Semestre" isRequired min={6} max={10} />

					<Input type="number" {...register('enrollment')} label="Matrícula" isRequired min={1000000000} />

					<Input type="number" label="Número de Seguro Social" {...register('ss')} isRequired min={1000000} />

					<Input
						type="text"
						label="Materias de Curso de Verano"
						description="Si tienes que cursar materias en curso de verano, escríbelas aquí. Si no, déjalo en blanco."
						{...register('summerCourses')}
					/>

					<Controller
						name="haveToRetakeSubjects"
						control={control}
						render={({ field }) => (
							<Switch {...field} value={String(field.value)}>¿Tienes que recursar materias?</Switch>
						)}
					/>

					<Controller
						name="haveFirstMakeUpExam"
						control={control}
						render={({ field }) => (
							<Switch {...field} value={String(field.value)}>¿Tienes que presentar primer exámen extraordinario?</Switch>
						)}
					/>

					<Controller
						name="haveSecondMakeUpExam"
						control={control}
						render={({ field }) => (
							<Switch {...field} value={String(field.value)}>¿Tienes que presentar segundo exámen extraordinario?</Switch>
						)}
					/>


					<div className="col-span-2 flex justify-center mt-2">
						<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}