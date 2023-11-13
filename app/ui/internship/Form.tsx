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
import { Card, CardBody, Slider, Tab, Tabs } from "@nextui-org/react"


export const Form = () => {

	const {
		register,
		control,
		handleSubmit,
	} = useForm<Internship>({ defaultValues: { period: { schedule: [9, 18] } } })


	const onSubmit: SubmitHandler<Internship> = (data) => console.log(data)

	return (
		<div className="p-4">
			<Tabs aria-label="Options">
				<Tab key="personal" title="Información Personal">
					<Card>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
								<Input type="text" {...register('student.name')} label="Nombre Completo" isRequired />

								<Input type="text" inputMode="tel" label="Número Celular" {...register('student.phone')} isRequired />

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

								<div className="col-span-2 flex justify-center mt-2">
									<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar Información</Button>
								</div>
							</form>
						</CardBody>
					</Card>
				</Tab>

				<Tab key="student" title="Información Estudiantil">
					<Card>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
								<Select
									label="Estado"
									{...register('student.state')}
									isRequired
								>
									<SelectItem key={StudentState.ACTIVE} value={StudentState.ACTIVE}>Activo</SelectItem>
									<SelectItem key={StudentState.GRADUATED} value={StudentState.GRADUATED}>Egresado</SelectItem>
									<SelectItem key={StudentState.TEMPORARY_LEAVE} value={StudentState.TEMPORARY_LEAVE}>Baja Temporal</SelectItem>
								</Select>

								<Autocomplete
									label="Carrera"
									{...register('student.career')}
									isRequired
								>
									{careers.map(career => (
										<AutocompleteItem key={career} value={career}>
											{career}
										</AutocompleteItem>
									))}
								</Autocomplete>

								<Input type="number" inputMode="numeric" {...register('student.semester')} label="Semestre" isRequired min={6} max={10} />

								<Input type="number" {...register('student.enrollment')} label="Matrícula" isRequired min={1000000000} />

								<Input type="number" label="Número de Seguro Social" {...register('student.ss')} isRequired min={1000000} />

								<Input
									type="text"
									label="Materias de Curso de Verano"
									description="Si tienes que cursar materias en curso de verano, escríbelas aquí. Si no, déjalo en blanco."
									{...register('student.summerCourses')}
								/>

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


								<div className="col-span-2 flex justify-center mt-2">
									<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar Información</Button>
								</div>
							</form>
						</CardBody>
					</Card>
				</Tab>

				<Tab key="period" title="Periodo y Prácticas">
					<Card>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
								<Input
									type="text"
									label="Área de Trabajo"
									description="Área en el que realizarás tus prácticas profesionales."
									isRequired
									{...register('student.summerCourses')}

								/>

								<Input
									type="text"
									label="Nombre del Proyecto"
									description="Nombre del proyecto en el que trabajarás en tus prácticas profesionales."
									{...register('student.summerCourses')}
								/>

								<Input type="date" defaultValue="2023-11-11" {...register('period.startDate')} label="Fecha de Inicio" isRequired />

								<Input type="date" defaultValue="2023-11-12" {...register('period.endDate')} label="Fecha de Término" isRequired />

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

								<Input
									type="number"
									label="Total de Horas"
									inputMode="numeric"
									defaultValue="280"
									min={280}
									isRequired
									{...register('period.totalHours')}
								/>


								<div className="col-span-2 flex justify-center mt-2">
									<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar Información</Button>
								</div>
							</form>
						</CardBody>
					</Card>
				</Tab>

				<Tab key="company" title="Información de la Empresa">
					<Card>
						<CardBody>
							<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
								<Input type="text" {...register('companyName')} label="Nombre de la Empresa" isRequired />

								<Input type="text" {...register('industry')} label="Giro de la Empresa" isRequired />

								<Select
									label="Sector"
									isRequired
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
									description="Número telefónico o celular."
									isRequired
									{...register('phone')}
								/>

								<Input type="email" inputMode="email" {...register('email')} label="Correo Electrónico" isRequired />

								<Input type="text" {...register('address')} label="Dirección" isRequired />

								<Input type="text" inputMode="url" {...register('webPage')} label="Página Web" />

								<Input type="text" {...register('companyContact')} label="Contacto de la Empresa" isRequired />

								<Input
									type="text"
									label="Nombre a quien se le dirigirá el oficio"
									description="Nombre del titular de la empresa al que se le dirigirá el oficio de presentación. Debe ser sólo una persona."
									isRequired
									{...register('recipientName')}
								/>

								<Input
									type="text"
									label="Cargo de la Persona"
									description="Cargo del titular de la empresa al que se le dirigirá el oficio de presentación."
									isRequired
									{...register('recipientPosition')}
								/>

								<Input type="text" {...register('inAtentionOf')} label="En atención a" />


								<div className="col-span-2 flex justify-center mt-2">
									<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar Información</Button>
								</div>
							</form>
						</CardBody>
					</Card>
				</Tab>
			</Tabs>

		</div>
	)

}