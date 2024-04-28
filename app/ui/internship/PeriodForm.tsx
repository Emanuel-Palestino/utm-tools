import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Slider } from "@nextui-org/slider"
import { InternshipPeriod } from "@/src/models/InternshipPeriod"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useInternshipStore } from "@/app/store/internship"
import { Select, SelectItem } from "@nextui-org/select"
import { INTERNSHIP_PERIODS } from "@/app/utils/constants"
import { formatedDate } from "@/app/utils/format"


export const PeriodForm = () => {

	const { save, values, isComplete } = useInternshipStore(state => ({
		save: state.setPeriodData,
		values: state.periodData,
		isComplete: state.isPeriodDataComplete
	}))

	const {
		handleSubmit,
		control,
		watch
	} = useForm<InternshipPeriod>({
		defaultValues: {
			projectName: '',
			workArea: '',
			startDate: new Date(),
			endDate: new Date(),
			schedule: [9, 18],
			totalHours: 280,
			periodNumber: 1,
			customPeriod: false,
			reportFrecuency: 3
		},
		values
	})

	const onSubmit: SubmitHandler<InternshipPeriod> = data => {
		data.totalHours = Number(data.totalHours)
		data.reportFrecuency = Number(data.reportFrecuency)
		data.periodNumber = Number(data.periodNumber)

		if (data.periodNumber === -1) {
			data.startDate = new Date(`${data.startDate} UTC-6`)
			data.endDate = new Date(`${data.endDate} UTC-6`)
		} else {
			data.startDate = INTERNSHIP_PERIODS[data.periodNumber - 1].startDate
			data.endDate = INTERNSHIP_PERIODS[data.periodNumber - 1].endDate
		}

		save(data)
	}

	return (
		<Card>
			<CardBody className="p-4">
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
					<Controller
						name="workArea"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Área de Trabajo"
								description="Área en el que realizarás tus prácticas profesionales."
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="projectName"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Nombre del Proyecto"
								description="Nombre del proyecto en el que trabajarás en tus prácticas profesionales."
								{...field}
							/>
						)}
					/>

					<Controller
						name="periodNumber"
						control={control}
						render={({ field }) => (
							<Select
								label="Número de Periodo"
								isRequired
								{...field}
								selectedKeys={field.value ? [String(field.value)] : []}
							>
								{[
									...INTERNSHIP_PERIODS.map((period, index) => (
										<SelectItem key={index + 1} value={index + 1}>
											{
												`${index + 1} - ` +
												`${formatedDate(period.startDate)} al ` +
												`${formatedDate(period.endDate)}`
											}
										</SelectItem>
									)),
									<SelectItem key={-1} value={-1}>Periodo Personalizado</SelectItem>
								]}

							</Select>
						)}
					/>

					{Number(watch('periodNumber')) === -1 && (
						<>
							<Controller
								name="startDate"
								control={control}
								render={({ field }) => (
									<Input
										type="date"
										label="Fecha de Inicio"
										isRequired
										{...field}
										value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
									/>
								)}
							/>

							<Controller
								name="endDate"
								control={control}
								render={({ field }) => (
									<Input
										type="date"
										label="Fecha de Término"
										isRequired
										{...field}
										value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
									/>
								)}
							/>
						</>
					)}

					<Controller
						name="reportFrecuency"
						control={control}
						render={({ field }) => (
							<Select
								label="Frecuencia de reportes"
								isRequired
								{...field}
								selectedKeys={field.value ? [String(field.value)] : []}
							>
								<SelectItem key={1} value={1}>Cada semana</SelectItem>
								<SelectItem key={2} value={2}>Cada dos semanas</SelectItem>
								<SelectItem key={3} value={3}>Cada tres semanas</SelectItem>
							</Select>
						)}
					/>

					<Controller
						name="schedule"
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

					<Controller
						name="totalHours"
						control={control}
						render={({ field }) => (
							<Input
								type="number"
								label="Total de Horas"
								min={280}
								isRequired
								{...field}
								value={String(field.value)}
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