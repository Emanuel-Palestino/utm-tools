import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Select, SelectItem } from "@nextui-org/select"
import { Switch } from "@nextui-org/switch"
import { Autocomplete, AutocompleteItem } from "@nextui-org/autocomplete"
import { careers } from "@/src/models/Careers"
import { Internship } from "@/src/models/Internship"
import { StudentState } from "@/src/models/StudentState"
import { CompanySector } from "@/src/models/CompanySector"
import { Slider } from "@nextui-org/react"


export const Form = () => {

	const {
		register,
		control,
		handleSubmit
	} = useForm<Internship>({ defaultValues: { period: { schedule: [9, 18] } } })

	const onSubmit: SubmitHandler<Internship> = (data) => console.log(data)

	return (
		<form onSubmit={handleSubmit(onSubmit)} className="p-4 grid grid-cols-3 gap-3">
			<h2 className="col-span-3 text-xl">Información Personal.</h2>

			<Input type="text" {...register('student.name')} label="Nombre Completo" />

			<Input type="text" inputMode="tel" label="Número Celular" {...register('student.phone')} />

			<Input type="email" inputMode="email" label="Correo Electrónico" {...register('student.email')} />

			<Input
				type="text"
				label="Lengua Indígena"
				description="Si eres hablante de lengua indígena, escríbela aquí. Si no, déjalo en blanco."
				{...register('student.indigenousLanguage')}
			/>

			<Input
				type="text"
				label="Discapacidad"
				description="Si tienes alguna discapacidad, escríbela aquí. Si no, déjalo en blanco."
				{...register('student.disability')}
			/>


			<h2 className="col-span-3 text-xl">Información Estudiantil.</h2>

			<Autocomplete
				label="Carrera"
				{...register('student.career')}
			>
				{careers.map(career => (
					<AutocompleteItem key={career} value={career}>
						{career}
					</AutocompleteItem>
				))}
			</Autocomplete>

			<Input type="number" inputMode="numeric" {...register('student.semester')} label="Semestre" />

			<Input type="number" {...register('student.enrollment')} label="Matrícula" />


			<Input type="number" label="Número de Seguro Social" {...register('student.ss')} />

			<Controller
				name="student.haveToRetakeSubjects"
				control={control}
				render={({ field }) => (
					<Switch {...field} value={String(field.value)}>¿Tienes que recursar materias?</Switch>
				)}
			/>

			<Controller
				name="student.haveFirstMakeUpExam"
				control={control}
				render={({ field }) => (
					<Switch {...field} value={String(field.value)}>¿Tienes que presentar primer exámen extraordinario?</Switch>
				)}
			/>

			<Controller
				name="student.haveSecondMakeUpExam"
				control={control}
				render={({ field }) => (
					<Switch {...field} value={String(field.value)}>¿Tienes que presentar segundo exámen extraordinario?</Switch>
				)}
			/>

			<Input
				type="text"
				label="Materias de Curso de Verano"
				description="Si tienes que cursar materias en curso de verano, escríbelas aquí. Si no, déjalo en blanco."
				{...register('student.summerCourses')}
			/>

			<Select
				label="Estado"
				{...register('student.state')}
			>
				<SelectItem key={StudentState.ACTIVE} value={StudentState.ACTIVE}>Activo</SelectItem>
				<SelectItem key={StudentState.GRADUATED} value={StudentState.GRADUATED}>Egresado</SelectItem>
				<SelectItem key={StudentState.TEMPORARY_LEAVE} value={StudentState.TEMPORARY_LEAVE}>Baja Temporal</SelectItem>
			</Select>


			<h2 className="col-span-3 text-xl">Periodo de Prácticas Profesionales.</h2>

			<Input type="date" defaultValue="2023-11-11" {...register('period.startDate')} label="Fecha de Inicio" />

			<Input type="date" defaultValue="2023-11-12" {...register('period.endDate')} label="Fecha de Término" />

			{/* <Input type="number" inputMode="numeric" defaultValue="00" {...register('period.schedule')} label="Horario" /> */}

			<Controller
				name="period.schedule"
				control={control}
				render={({ field }) => (
					<Slider
						label="Horario"
						step={1}
						maxValue={22}
						minValue={6}
						getValue={value => Array.isArray(value) ? `${value[0]}:00 hrs. a ${value[1]}:00 hrs.` : ''}
						showSteps
						{...field}
					/>
				)}
			/>

			<Input type="number" inputMode="numeric" defaultValue="280" {...register('period.totalHours')} label="Total de Horas" />


			<h2 className="col-span-3 text-xl">Información de la Empresa.</h2>

			<Input type="text" {...register('companyName')} label="Nombre de la Empresa" />

			<Input type="text" {...register('industry')} label="Giro de la Empresa" />

			<Select
				label="Sector"
				{...register('sector')}
			>
				<SelectItem key={CompanySector.PUBLIC} value={CompanySector.PUBLIC}>Público</SelectItem>
				<SelectItem key={CompanySector.PRIVATE} value={CompanySector.PRIVATE}>Privado</SelectItem>
				<SelectItem key={CompanySector.SOCIAL} value={CompanySector.SOCIAL}>Social</SelectItem>
			</Select>

			<Controller
				name="isInternacional"
				control={control}
				render={({ field }) => (<Switch {...field} value={String(field.value)}>¿Es Internacional?</Switch>)}
			/>

			<Input
				type="number"
				inputMode="tel"
				label="Número Telefónico"
				description="Número telefónico o celular sin extensión."
				{...register('phone')}
			/>

			<Input
				type="number"
				inputMode="numeric"
				label="Extensión Telefónica"
				{...register('phoneExtension')}
			/>

			<Input type="email" inputMode="email" {...register('email')} label="Correo Electrónico" />

			<Input type="text" {...register('address')} label="Dirección" />

			<Input type="text" inputMode="url" {...register('webPage')} label="Página Web" />

			<Input type="text" {...register('companyContact')} label="Contacto de la Empresa" />

			<Input
				type="text"
				label="Nombre a quien se le dirigirá el oficio"
				description="Nombre del titular de la empresa al que se le dirigirá el oficio de presentación. Debe ser sólo una persona."
				{...register('recipientName')}
			/>

			<Input
				type="text"
				label="Cargo de la Persona"
				description="Cargo del titular de la empresa al que se le dirigirá el oficio de presentación."
				{...register('recipientPosition')}
			/>

			<Input type="text" {...register('inAtentionOf')} label="En atención a" />

			<Input
				type="text"
				label="Área de Trabajo"
				description="Área en el que realizarás tus prácticas profesionales."
				{...register('student.summerCourses')}
			/>

			<Input
				type="text"
				label="Nombre del Proyecto"
				description="Nombre del proyecto en el que trabajarás en tus prácticas profesionales."
				{...register('student.summerCourses')}
			/>


			<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar Información</Button>
		</form>
	)

}