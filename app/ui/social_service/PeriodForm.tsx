import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"
import { Slider } from "@nextui-org/slider"
import { Controller, SubmitHandler, useFieldArray, useForm } from "react-hook-form"
import React, { FC, useEffect } from "react"
import { useSocialServiceStore } from "@/app/store/socialService"
import { SocialServicePeriod } from "@/src/models/social_service/SocialServicePeriod"
import { addMonths, differenceInMonths } from "date-fns"
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
		watch,
		setValue,
		formState: { dirtyFields }
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
		data.totalHours = Number(data.totalHours)

		data.startDate = new Date(`${data.startDate} UTC-6`)
		data.endDate = new Date(`${data.endDate} UTC-6`)

		data.months = differenceInMonths(data.endDate, data.startDate)

		save(data)
		nextForm()
	}

	/* Update end date depending on start date */
	let startDate = watch('startDate')

	useEffect(() => {
		if (dirtyFields.startDate)
			setValue('endDate', addMonths(new Date(`${startDate} GMT-6`), 6))
	}, [setValue, dirtyFields.startDate, startDate])

	return (
		<Card>
			<CardBody className="p-4">
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4">
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
								min={addMonths(new Date(`${startDate} GMT-6`), 6).toISOString().split('T')[0]}
								{...field}
								value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
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
								min={480}
								isRequired
								{...field}
								value={String(field.value)}
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
								isRequired
								{...field}
							/>
						)}
					/>

					<Controller
						name="projectObjective"
						control={control}
						render={({ field }) => (
							<Textarea
								type="text"
								label="Objetivo del Proyecto"
								isRequired
								{...field}
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

export default PeriodForm