import { Header } from "@app/printingFormats/social_service/Header"
import { FC } from "react"
import { formatedDate } from "@app/_lib/format"
import { getDate, getMonth, getYear } from "date-fns"
import { Person } from "@app/_lib/types/Common"
import { Activity, GovernmentAgency, SocialServicePeriod, SocialServiceStudent } from "@app/_lib/types/SocialService"


interface ScheduleOfActivitiesProps {
	person: Person
	student: SocialServiceStudent
	governmentAgency: GovernmentAgency
	period: SocialServicePeriod
	activities: Activity[]
	date: number
}

export const ScheduleOfActivities: FC<ScheduleOfActivitiesProps> = ({
	person,
	student,
	governmentAgency,
	period,
	activities,
	date
}) => {

	return (
		<section className="w-full h-full text-[14px] flex flex-col justify-between">
			<div>
				<Header title="CRONOGRAMA DE ACTIVIDADES DE SERVICIO SOCIAL" landscape />

				<p className="text-right text-[16px] px-10 mt-6">FECHA: {formatedDate(date)}</p>

				<div className="flex flex-col gap-1 px-8 mt-4">
					<div className="flex gap-4">
						<p className="w-[230px] font-semibold text-right">NOMBRE COMPLETO DEL ALUMNO:</p>
						<p>{`${person.paternalSurname} ${person.maternalSurname} ${person.name}`}</p>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-4">
							<p className="w-[230px] font-semibold text-right">CARRERA:</p>
							<p className="w-[250px]">{student.career}</p>
						</div>

						<div className="flex gap-4">
							<p className="font-semibold">SEMESTRE:</p>
							<p>{student.semester}</p>
						</div>

						<div className="flex gap-4">
							<p className="font-semibold">MATRÍCULA:</p>
							<p>{student.enrollment}</p>
						</div>
					</div>

					<div className="flex gap-4">
						<p className="w-[230px] font-semibold text-right">INSTITUCIÓN Y/O DEPENDENCIA:</p>
						<p>{governmentAgency.name}</p>
					</div>

					<div className="flex gap-4 items-center">
						<p className="min-w-[230px] font-semibold text-right leading-4">NOMBRE DEL PROGRAMA O PROYECTO:</p>
						<p className="leading-4">{period.projectName}</p>
					</div>

					<div className="flex gap-4">
						<p className="w-[230px] font-semibold text-right">PERIODO DEL:</p>
						<p>{formatedDate(period.startDate)} <span className="inline-block w-20 text-center font-semibold">AL</span> {formatedDate(period.endDate)}</p>
					</div>

					<div className="flex gap-4">
						<p className="w-[230px] font-semibold flex-shrink-0 text-right">OBJETIVO:</p>
						<p className="text-balance leading-4">{period.projectObjective}</p>
					</div>
				</div>

				<div className="text-[13px] mt-4 px-8">
					<table className="w-full table-auto border-collapse">
						<thead className="border-t border-l border-black">
							<tr>
								<th rowSpan={2} className="border-b border-r border-black px-1 text-[11px]">NÚM.</th>
								<th rowSpan={2} className="border-b border-r border-black min-w-96">ACTIVIDAD</th>

								<th colSpan={3} className="text-center border-b border-r border-black">DEL</th>
								<th colSpan={3} className="text-center border-b border-r border-black">AL</th>

								<th rowSpan={2} className="border-b border-r border-black px-1 text-[10px]">NÚMERO DE HORAS POR ACTIVIDAD</th>
							</tr>
							<tr className="text-[12px]">
								<th className="border-b border-r border-black px-2">Día</th>
								<th className="border-b border-r border-black px-2">Mes</th>
								<th className="border-b border-r border-black px-2">Año</th>

								<th className="border-b border-r border-black px-2">Día</th>
								<th className="border-b border-r border-black px-2">Mes</th>
								<th className="border-b border-r border-black px-2">Año</th>
							</tr>
						</thead>

						<tbody className="border-l border-black">
							{activities.map((activity, index) => (
								<tr key={`activity-${index}`} className="text-center">
									<td className="border-b border-r border-black">{index + 1}</td>
									<td className="border-b border-r border-black text-left pl-1">{activity.description}</td>
									<td className="border-b border-r border-black">{String(getDate(activity.startDate)).padStart(2, '0')}</td>
									<td className="border-b border-r border-black">{String(getMonth(activity.startDate) + 1).padStart(2, '0')}</td>
									<td className="border-b border-r border-black">{getYear(activity.startDate)}</td>
									<td className="border-b border-r border-black">{String(getDate(activity.endDate)).padStart(2, '0')}</td>
									<td className="border-b border-r border-black">{String(getMonth(activity.endDate) + 1).padStart(2, '0')}</td>
									<td className="border-b border-r border-black">{getYear(activity.endDate)}</td>
									<td className="border-b border-r border-black">{activity.hours}</td>
								</tr>
							))}
						</tbody>

						<tfoot>
							<tr className="text-[14px]">
								<td></td>
								<td></td>
								<td colSpan={6} className="text-right font-semibold p-1">TOTAL DE HORAS:</td>
								<td className="text-center font-semibold border-2 border-black">{period.totalHours}</td>
							</tr>
						</tfoot>
					</table>
				</div>

			</div>

			<div className="flex gap-4 px-8">
				<p className="border-t-[1.5px] border-black w-60 text-center">Firma del Alumno</p>
				<p className="border-t-[1.5px] border-black w-60 text-center">Responsable Inmediato (firma y sello)</p>
			</div>
		</section>
	)

}