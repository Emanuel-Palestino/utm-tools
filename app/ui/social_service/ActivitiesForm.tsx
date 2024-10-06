import { Activity } from "@/src/models/social_service/SocialServicePeriod"
import { Card, CardBody, CardHeader } from "@nextui-org/card"
import { Input, Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { useSocialServiceStore } from "@/app/store/socialService"
import { MinusIcon } from "@/app/icons"
import { addDays, differenceInBusinessDays, formatISO, parseISO } from "date-fns"


const ActivitiesForm = () => {

	const { activities, save, isComplete, isPeriodComplete, periodData } = useSocialServiceStore(state => ({
		save: state.setActivitiesData,
		activities: state.activitiesData,
		isComplete: state.isActivitiesDataComplete,
		isPeriodComplete: state.isPeriodDataComplete,
		periodData: {
			schedules: state.periodData?.schedules || [[9, 18]],
			startDate: state.periodData?.startDate || new Date(),
			endDate: state.periodData?.endDate || new Date()
		}
	}))

	const totalHoursPerDay = periodData.schedules.reduce((acc, [start, end]) => acc + (end - start), 0)

	const { handleSubmit, control, register, getValues, setValue } = useForm<{ activities: Activity[] }>({
		defaultValues: {
			activities: activities || [{
				description: '',
				startDate: periodData.startDate,
				endDate: periodData.endDate,
				hours: totalHoursPerDay * differenceInBusinessDays(periodData.endDate, periodData.startDate)
			}]
		},
		values: activities ? { activities } : undefined
	})

	const { fields, append, remove } = useFieldArray({ control, name: 'activities' })

	const onEndDateChange = (currentEndDate: Date, index: number) => {
		const currentStartDate = getValues(`activities.${index}.startDate`)

		// If it's the last activity, only update the hours
		setValue(
			`activities.${index}.hours`,
			totalHoursPerDay * differenceInBusinessDays(currentEndDate, currentStartDate)
		)
		if (index === fields.length - 1) return

		// If it's not the last activity, update the start date and the hours of the next activity
		const nextEndDate = getValues(`activities.${index + 1}.endDate`)

		const nextStartDate = addDays(currentEndDate, 1)
		setValue(`activities.${index + 1}.startDate`, nextStartDate)

		const nextHours = totalHoursPerDay * differenceInBusinessDays(nextEndDate, nextStartDate)
		setValue(`activities.${index + 1}.hours`, nextHours)
	}

	const onSubmit = handleSubmit(data => save(data.activities))

	return (
		<Card>
			<CardHeader>
				<ul className="pl-6 text-sm text-gray-600 list-disc list-outside">
					<li>Las principales actividades a realizar en el servicio social.</li>
					<li>Este <b>listado de actividades</b> aparecerá únicamente en el documento <b>cronograma de actividades</b>. Debido a esto la <b>descripción</b> debe ser <b>corta.</b></li>
					<li><b>No es necesario</b> que el número de actividades sea igual al número de meses de duración del servicio social.</li>
				</ul>
			</CardHeader>

			{isPeriodComplete ?
				<CardBody>
					<section className="p-2 mb-1 w-full flex justify-end md:justify-normal">
						<Button
							color="primary"
							size="md"
							onClick={() => append({
								description: '',
								startDate: getValues(`activities.${fields.length - 1}.endDate`),
								endDate: periodData.endDate,
								hours: totalHoursPerDay * differenceInBusinessDays(periodData.endDate, getValues(`activities.${fields.length - 1}.endDate`))
							})}
						>
							Agregar Actividad
						</Button>
					</section>

					<form onSubmit={onSubmit} className="flex flex-col gap-6 md:gap-4">
						{fields.map((field, index) => (
							<div key={field.id} className="w-full flex flex-col md:flex-row gap-2">
								<Textarea
									type="text"
									label={`Descripción de la Actividad ${index + 1}`}
									minRows={2}
									className="md:basis-1/2"
									{...register(`activities.${index}.description`, { required: true })}
									isRequired
								/>

								<div className="flex flex-grow flex-wrap md:flex-nowrap gap-2 items-center justify-center">
									<Controller
										name={`activities.${index}.startDate`}
										control={control}
										render={({ field }) => (
											<Input
												type="date"
												label="Fecha de Inicio"
												isRequired
												{...field}
												value={field.value instanceof Date ? formatISO(field.value, { representation: 'date' }) : field.value}
												readOnly
												isReadOnly
												isDisabled
											/>
										)}
									/>

									<Controller
										name={`activities.${index}.endDate`}
										control={control}
										rules={{
											onChange: e => onEndDateChange(e.target.value, index)
										}}
										render={({ field }) => (
											<Input
												type="date"
												label="Fecha de Término"
												isRequired
												{...field}
												// cast the value to a date object
												onChange={e => field.onChange(parseISO(e.target.value))}
												value={field.value instanceof Date ? formatISO(field.value, { representation: 'date' }) : field.value}
											/>
										)}
									/>

									<Input
										type="number"
										label="Horas"
										min={1}
										step={1}
										{...register(`activities.${index}.hours`, { required: true })}
										isRequired
									/>

									{fields.length > 1 && (
										<Button
											isIconOnly
											color="primary"
											size="sm"
											onClick={() => remove(index)}
										>
											<MinusIcon />
										</Button>
									)}
								</div>
							</div>
						))}

						<div className="flex w-full justify-center md:col-span-2">
							<Button className="w-32" color="primary" type="submit">
								{isComplete ? 'Actualizar' : 'Guardar'}
							</Button>
						</div>
					</form>
				</CardBody>
				:
				<CardBody>
					<p className="text-center text-2xl text-gray-700">Por favor completa la información del <b>periodo</b> para completar este formulario.</p>
				</CardBody>
			}
		</Card>
	)

}

export default ActivitiesForm