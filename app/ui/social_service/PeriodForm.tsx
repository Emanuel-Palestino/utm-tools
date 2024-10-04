import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"
import { Slider } from "@nextui-org/slider"
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import { FC } from "react"
import { useSocialServiceStore } from "@/app/store/socialService"
import { SocialServicePeriod } from "@/src/models/social_service/SocialServicePeriod"
import { addMonths, differenceInBusinessDays, differenceInMonths, formatISO, parseISO } from "date-fns"
import { MinusIcon, PlusIcon } from "@/app/icons"


interface PeriodFormProps {
	nextForm: () => void
}

const PeriodForm: FC<PeriodFormProps> = ({ nextForm }) => {

	const { save, values, isComplete } = useSocialServiceStore(state => ({
		save: state.setPeriodData,
		values: state.periodData,
		isComplete: state.isPeriodDataComplete
	}))

	const today = new Date()

	const {
		handleSubmit,
		control,
		register,
		watch,
		setValue,
		getValues
	} = useForm<SocialServicePeriod>({
		defaultValues: {
			startDate: today,
			endDate: addMonths(today, 6),
			// values is passed due to the field array takes always the default value
			schedules: values?.schedules || [[9, 18]],
			totalHours: 480,
			months: 6,
			projectName: '',
			projectObjective: ''
		},
		values
	})

	const { fields, append, remove } = useFieldArray({ control, name: 'schedules' })

	const onSubmit: SubmitHandler<SocialServicePeriod> = data => {
		data.months = differenceInMonths(data.endDate, data.startDate)
		data.totalHours = Number(data.totalHours)
		save(data)
		nextForm()
	}

	/* Update end date depending on start date */
	let startDate = watch('startDate')
	let endDate = watch('endDate')

	const onDatesChange = (start: Date, end: Date) => {
		const schedules = getValues('schedules')
		const totalHoursPerDay = schedules.reduce((acc, [start, end]) => acc + (end - start), 0)
		setValue('totalHours', totalHoursPerDay * differenceInBusinessDays(end, start))
	}

	return (
		<Card>
			<CardBody className="p-4">
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
					<Controller
						name="startDate"
						control={control}
						rules={{
							onChange: ({ target }) => {
								const endDate = addMonths(target.value, 6)
								setValue('endDate', endDate)
								onDatesChange(target.value, endDate)
							}
						}}
						render={({ field }) => (
							<Input
								type="date"
								label="Fecha de Inicio"
								isRequired
								{...field}
								value={field.value instanceof Date ? formatISO(field.value, { representation: 'date' }) : field.value}
								onChange={e => field.onChange(parseISO(e.target.value))}
							/>
						)}
					/>

					<Controller
						name="endDate"
						control={control}
						rules={{
							onChange: ({ target }) => onDatesChange(startDate, target.value)
						}}
						render={({ field }) => (
							<Input
								type="date"
								label="Fecha de Término"
								isRequired
								min={formatISO(addMonths(startDate, 6), { representation: 'date' })}
								{...field}
								value={field.value instanceof Date ? formatISO(field.value, { representation: 'date' }) : field.value}
								onChange={e => field.onChange(parseISO(e.target.value))}
							/>
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
								rules={{
									onChange: ({ target }) => {
										const currentHours = target.value[1] - target.value[0]

										let otherHours = 0
										if (fields.length > 1) {
											if (index === 0) {
												const secondSchedule = getValues(`schedules.${index + 1}`)
												otherHours = secondSchedule[1] - secondSchedule[0]
											} else {
												const firstSchedule = getValues(`schedules.${index}`)
												otherHours = firstSchedule[1] - firstSchedule[0]
											}
										}

										const totalHoursPerDay = currentHours + otherHours
										setValue('totalHours', totalHoursPerDay * differenceInBusinessDays(endDate, startDate))
									}
								}}
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

					<Input
						type="number"
						label="Total de Horas"
						min={480}
						{...register('totalHours', { required: true })}
						isRequired
					/>

					<Input
						type="text"
						label="Nombre del Proyecto"
						{...register('projectName', { required: true })}
						isRequired
					/>

					<Textarea
						type="text"
						label="Objetivo del Proyecto"
						{...register('projectObjective', { required: true })}
						isRequired
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

export default PeriodForm