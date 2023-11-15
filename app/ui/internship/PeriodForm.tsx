import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Slider } from "@nextui-org/slider"
import { InternshipPeriod } from "@/src/models/InternshipPeriod"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { FC } from "react"


interface PeriodFormProps {
	nextForm: () => void
}

export const PeriodForm: FC<PeriodFormProps> = ({ nextForm }) => {

	const {
		handleSubmit,
		control,
	} = useForm<InternshipPeriod>({
		defaultValues: {
			startDate: new Date().toISOString().split('T')[0],
			endDate: new Date().toISOString().split('T')[0],
			schedule: [9, 18],
			totalHours: 280
		}
	})

	const onSubmit: SubmitHandler<InternshipPeriod> = (data) => {
		data.totalHours = Number(data.totalHours)
		localStorage.setItem('period', JSON.stringify(data))
		nextForm()
	}

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
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
						name="startDate"
						control={control}
						render={({ field }) => (
							<Input
								type="date"
								label="Fecha de Inicio"
								isRequired
								{...field}
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

					<div className="col-span-2 flex justify-center mt-2">
						<Button className="bg-utm-container-3 text-utm-on-container-3 w-32" type="submit">Guardar</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}