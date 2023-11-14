import { Card, CardBody } from "@nextui-org/card"
import { Button } from "@nextui-org/button"
import { Input } from "@nextui-org/input"
import { Slider } from "@nextui-org/slider"
import { InternshipPeriod } from "@/src/models/InternshipPeriod"
import { Controller, SubmitHandler, useForm } from "react-hook-form"


export const PeriodForm = () => {

	const {
		register,
		handleSubmit,
		control,
	} = useForm<InternshipPeriod>({ defaultValues: { schedule: [9, 18] } })

	const onSubmit: SubmitHandler<InternshipPeriod> = (data) => console.log(data)

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
					<Input
						type="text"
						label="Área de Trabajo"
						description="Área en el que realizarás tus prácticas profesionales."
						isRequired
						{...register('workArea')}

					/>

					<Input
						type="text"
						label="Nombre del Proyecto"
						description="Nombre del proyecto en el que trabajarás en tus prácticas profesionales."
						{...register('projectName')}
					/>

					<Input type="date" defaultValue="2023-11-11" {...register('startDate')} label="Fecha de Inicio" isRequired />

					<Input type="date" defaultValue="2023-11-12" {...register('endDate')} label="Fecha de Término" isRequired />

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

					<Input
						type="number"
						label="Total de Horas"
						inputMode="numeric"
						defaultValue="280"
						min={280}
						isRequired
						{...register('totalHours')}
					/>

					<div className="col-span-2 flex justify-center mt-2">
						<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar Información</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}