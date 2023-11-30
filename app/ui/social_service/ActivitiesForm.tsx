import { Activity } from "@/src/models/social_service/SocialServicePeriod"
import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Button } from "@nextui-org/button"
import { FC } from "react"
import { Controller, useFieldArray, useForm } from "react-hook-form"
import { useSocialServiceStore } from "@/app/store/socialService"


interface ActivitiesFormProps {
	nextForm: () => void
}

export const ActivitiesForm: FC<ActivitiesFormProps> = ({ nextForm }) => {

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
		save(data.activities)
		nextForm()
	})

	return (
		<Card>
			<CardBody>
				<form onSubmit={onSubmit} className="flex flex-col gap-4">
					{fields.map((_, index) => (
						<div key={`activity_${index}`} className="w-full flex gap-2">
							<Controller
								name={`activities.${index}.description`}
								control={control}
								render={({ field }) => (
									<Input
										type="text"
										label="Descripción de la Actividad"
										{...field}
										className="basis-1/2"
									/>
								)}
							/>

							<div className="flex flex-grow gap-2 items-center">
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
						<Button className="bg-utm-container-3 text-utm-on-container-3 w-32" type="submit">
							{isComplete ? 'Actualizar' : 'Guardar'}
						</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}