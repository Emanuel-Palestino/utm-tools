import { Activity } from "@/src/models/social_service/SocialServicePeriod"
import { Card, CardBody } from "@nextui-org/card"
import { Input, Textarea } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { useSocialServiceStore } from "@/app/store/socialService"


const ActivitiesForm = () => {

	const { activities, save, isComplete, periodMonths } = useSocialServiceStore(state => ({
		save: state.setActivitiesData,
		activities: state.activitiesData,
		isComplete: state.isActivitiesDataComplete,
		periodMonths: state.periodData?.months || 0
	}))

	const { handleSubmit, control } = useForm<{ activities: Activity[] }>({
		defaultValues: {
			activities: Array.from({ length: periodMonths }, () => ({
				description: '',
				startDate: new Date(),
				endDate: new Date(),
				hours: 0
			}))
		},
		values: activities ? { activities } : undefined
	})

	const { fields } = useFieldArray({ control, name: 'activities' })

	const onSubmit = handleSubmit(data => {
		save(data.activities.map(activity => ({
			...activity,
			startDate: new Date(`${activity.startDate} UTC-6`),
			endDate: new Date(`${activity.endDate} UTC-6`)
		})))
	})

	return (
		<Card>
			<CardBody className="p-4">
				<ul className="p-2 pl-6 mb-3 text-sm text-gray-600 list-disc list-outside">
					<li>Las principales actividades a realizar en el servicio social.</li>
					<li>Este <b>listado de actividades</b> aparecerá únicamente en el documento <b>cronograma de actividades</b>. Debido a esto la <b>descripción</b> debe ser <b>corta.</b></li>
					<li>Las <b>fechas</b> se utilizarán para generar los <b>reportes parciales</b> (mensuales).</li>
				</ul>
				<form onSubmit={onSubmit} className="flex flex-col gap-6 md:gap-4">
					{fields.map((_, index) => (
						<div key={`activity_${index}`} className="w-full flex flex-col md:flex-row gap-2">
							<Controller
								name={`activities.${index}.description`}
								control={control}
								render={({ field }) => (
									<Textarea
										type="text"
										label={`Descripción de la Actividad ${index + 1}`}
										minRows={2}
										{...field}
										className="md:basis-1/2"
									/>
								)}
							/>

							<div className="flex flex-grow flex-wrap md:flex-nowrap gap-2">
								<Controller
									name={`activities.${index}.startDate`}
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
									name={`activities.${index}.endDate`}
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

								<Controller
									name={`activities.${index}.hours`}
									control={control}
									render={({ field }) => (
										<Input
											type="number"
											label="Horas"
											isRequired
											min={1}
											step={1}
											{...field}
											value={String(field.value)}
										/>
									)}
								/>
							</div>
						</div>
					))}

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

export default ActivitiesForm