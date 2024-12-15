/* eslint-disable @next/next/no-img-element */
import logo from '@public/UTMEscudo.png'
import { FC } from "react"
import { formatSchedule, formatedDate } from "@app/_lib/format"
import { Person } from '@app/_lib/types/Common'
import { Activity, GovernmentAgency, SocialServicePeriod, SocialServiceStudent } from '@app/_lib/types/SocialService'


interface PartialReportProps {
	person: Person
	student: SocialServiceStudent
	governmentAgency: GovernmentAgency
	period: SocialServicePeriod
	formatNumber: number
	activity: Activity
	description: string
}

const PartialReport: FC<PartialReportProps> = ({
	person,
	student,
	governmentAgency,
	period,
	formatNumber,
	activity,
	description
}) => {

	return (
		<section className="w-full h-full text-[13px] flex flex-col justify-between">
			<div className="px-4">
				<div className="flex px-6 items-center">
					<img width={120} height={120} src={logo.src} alt="logo" className="w-[120px] h-[120px]" />
					<div className="flex-grow">
						<p className="text-[20px] text-center mb-2 font-bold">UNIVERSIDAD TECNOLÓGICA  DE LA MIXTECA</p>
						<p className="w-full text-center text-[17px] font-semibold">REPORTE MENSUAL DE ACTIVIDADES DEL SERVICIO SOCIAL</p>
					</div>
				</div>

				<p className="text-right mt-8">Formato No. {formatNumber}</p>

				<div className="flex flex-col gap-2 mt-4">
					<div className="flex gap-2 items-center">
						<p className="text-left w-[180px] font-semibold leading-4">NOMBRE COMPLETO DEL ALUMNO:</p>
						<p>{`${person.paternalSurname} ${person.maternalSurname} ${person.name}`}</p>
					</div>

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">CARRERA:</p>
							<p>{student.career}</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">SEMESTRE:</p>
							<p>{student.semester}</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">MATRÍCULA:</p>
							<p>{student.enrollment}</p>
						</div>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">RESPONSABLE INMEDIATO:</p>
						<p>{governmentAgency.supervisorName}</p>
					</div>

					<div className="flex gap-2 items-center">
						<p className="text-left w-[180px] font-semibold">INSTITUCIÓN:</p>
						<p>{governmentAgency.name}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">ÁREA O DEPARTAMENTO:</p>
						<p>{governmentAgency.supervisorWorkArea}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">DIRECCIÓN:</p>
						<p>{governmentAgency.address}</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">CIUDAD O LOCALIDAD:</p>
						<p>{governmentAgency.city}</p>
					</div>

					<div className="flex gap-10">
						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">ESTADO:</p>
							<p>{governmentAgency.state}</p>
						</div>

						<div className="flex gap-2">
							<p className="text-left font-semibold">TELÉFONO:</p>
							<p>{governmentAgency.supervisorPhone}</p>
						</div>
					</div>

					<div className="flex gap-10">
						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">HORARIO:</p>
							<p>{
								period.schedules.length === 1
									? formatSchedule(period.schedules[0])
									: `${formatSchedule(period.schedules[0])} y ${formatSchedule(period.schedules[1])}`
							}</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">TOTAL DE HORAS REALIZADAS:</p>
							<p>{activity.hours}</p>
						</div>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">PERIODO DEL:</p>
						<p>{formatedDate(activity.startDate)} <span className="inline-block w-32 font-semibold text-center">AL</span> {formatedDate(activity.endDate)}</p>
					</div>
				</div>

				<div className="text-[13px] mt-4">
					<table className="w-full table-auto border-collapse border-t border-l border-black">
						<thead>
							<tr>
								<th className="border-b border-r border-black p-2">No.</th>
								<th className="border-b border-r border-black p-2">A CONTINUACIÓN DESCRIBA LAS ACTIVIDADES REALIZADAS EN EL PERIODO SEÑALADO:</th>
							</tr>
						</thead>

						<tbody>
							{
								description.split(/\s+/).map((paragraph, index) => (
									<tr key={`activity-description-${index}`}>
										<td className="border-b border-r border-black p-2 text-center">{index + 1}.-</td>
										<td className="border-b border-r border-black p-2">{paragraph}</td>
									</tr>
								))
							}
						</tbody>
					</table>
				</div>
			</div>

			<div className="flex justify-evenly items-end text-[11px]">
				<p className="border-t border-black w-60 text-center">FIRMA DEL PRESTADOR DEL SERVICIO SOCIAL</p>
				<div className="flex flex-col gap-8 text-center w-60">
					<p>Vo. Bo.</p>
					<p className="border-t border-black">FIRMA DEL RESPONSABLE INMEDIATO</p>
				</div>
			</div>
		</section>
	)

}

export default PartialReport