import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Slider } from "@nextui-org/slider"
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { useInternshipStore } from "@app/store/internship"
import { Select, SelectItem } from "@nextui-org/select"
import { INTERNSHIP_PERIODS } from "@app/utils/constants"
import { formatedDate } from "@app/utils/format"
import { MinusIcon, PlusIcon } from "@app/icons"
import { formatISO, parseISO } from "date-fns"
import { InternshipPeriod } from "@app/_lib/types/Iternship"


const PeriodForm = () => {

	const { setPeriodData, periodData } = useInternshipStore()

	const {
		handleSubmit,
		control,
		watch
	} = useForm<InternshipPeriod>({
		defaultValues: {
			projectName: '',
			workArea: '',
			startDate: Date.now(),
			endDate: Date.now(),
			// values is passed due to the field array takes always the default value
			schedules: periodData?.schedules || [[9, 18]],
			totalHours: 280,
			periodNumber: 1,
			customPeriod: false,
			reportFrecuency: 3
		},
		values: periodData
	})

	const { fields, append, remove } = useFieldArray({ control, name: 'schedules' })

	const onSubmit: SubmitHandler<InternshipPeriod> = data => {
		data.totalHours = Number(data.totalHours)
		data.reportFrecuency = Number(data.reportFrecuency)
		data.periodNumber = Number(data.periodNumber)

		if (data.periodNumber !== -1) {
			data.startDate = INTERNSHIP_PERIODS[data.periodNumber - 1].startDate
			data.endDate = INTERNSHIP_PERIODS[data.periodNumber - 1].endDate
		}

		setPeriodData(data)
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
								description="Área en el que realizarás tus estancias profesionales."
								isRequired
								autoFocus
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
								description="Nombre del proyecto en el que trabajarás en tus estancias profesionales."
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
										value={typeof field.value === 'number' ? formatISO(field.value, { representation: 'date' }) : field.value}
										onChange={e => field.onChange(parseISO(e.target.value).getTime())}
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
										value={typeof field.value === 'number' ? formatISO(field.value, { representation: 'date' }) : field.value}
										onChange={e => field.onChange(parseISO(e.target.value).getTime())}
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

					<section>
						<div className="flex gap-2 items-end">
							<p className="font-medium text-lg">Horarios</p>
							<Button
								isIconOnly
								color="primary"
								size="sm"
								onPress={() => append([[9, 18]])}
								isDisabled={fields.length >= 2}
								className="text-white min-w-6 w-6 h-6"
							>
								<PlusIcon />
							</Button>
						</div>

						{fields.map((field, index) => (
							<Controller
								key={field.id}
								name={`schedules.${index}` as const}
								control={control}
								render={({ field }) => (
									<Slider
										label={`Horario ${index + 1}`}
										step={1}
										maxValue={22}
										minValue={6}
										getValue={value => Array.isArray(value) ? `${value[0]}:00 hrs. a ${value[1]}:00 hrs.` : ''}
										showSteps
										{...field}
										endContent={
											fields.length > 1 &&
											<Button
												isIconOnly
												color="danger"
												size="sm"
												onPress={() => remove(index)}
												className="text-white min-w-6 w-6 h-6"
											>
												<MinusIcon />
											</Button>
										}
									/>
								)}
							/>
						))}
					</section>

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
							{periodData ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}

export default PeriodForm