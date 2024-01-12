import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Input, Textarea } from "@nextui-org/input"
import { Slider } from "@nextui-org/slider"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import React, { FC } from "react"
import { useSocialServiceStore } from "@/app/store/socialService"
import { SocialServicePeriod } from "@/src/models/social_service/SocialServicePeriod"


interface PeriodFormProps {
	nextForm: () => void
}

export const PeriodForm: FC<PeriodFormProps> = ({ nextForm }) => {

	const { save, values, isComplete } = useSocialServiceStore(state => ({
		save: state.setPeriodData,
		values: state.periodData,
		isComplete: state.isPeriodDataComplete
	}))

	const {
		handleSubmit,
		control,
	} = useForm<SocialServicePeriod>({
		defaultValues: {
			startDate: new Date(),
			endDate: new Date(),
			schedule: [9, 18],
			totalHours: 460,
			months: 6,
			projectName: '',
			projectObjective: ''
		},
		values
	})

	const onSubmit: SubmitHandler<SocialServicePeriod> = data => {
		data.totalHours = Number(data.totalHours)
		data.months = Number(data.months)

		data.startDate = new Date(`${data.startDate} UTC-6`)
		data.endDate = new Date(`${data.endDate} UTC-6`)

		save(data)
		nextForm()
	}

	return (
		<Card>
			<CardBody>
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
								{...field}
								value={field.value instanceof Date ? field.value.toISOString().split('T')[0] : field.value}
							/>
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

					<Controller
						name="months"
						control={control}
						render={({ field }) => (
							<Input
								type="number"
								label="Cantidad de Meses"
								min={6}
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