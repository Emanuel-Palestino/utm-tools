import Image from "next/image"
import logo from '@/public/UTMEscudo.png'
import { Person } from "@/src/models/Person"
import { SocialServiceStudent } from "@/src/models/social_service/SocialServiceStudent"
import { GovernmentAgency } from "@/src/models/social_service/GovernmentAgency"
import { Activity, SocialServicePeriod } from "@/src/models/social_service/SocialServicePeriod"
import { FC } from "react"
import { formatSchedule, formatedDate } from "@/app/utils/format"


interface PartialReportProps {
	person: Person
	student: SocialServiceStudent
	governmentAgency: GovernmentAgency
	period: SocialServicePeriod
	formatNumber: number
	activity: Activity
	description: string
}

export const PartialReport: FC<PartialReportProps> = ({
	person,
	student,
	governmentAgency,
	period,
	formatNumber,
	activity,
	description
}) => {

	return (
		<section className="w-full h-full text-[14px] flex flex-col justify-between">
			<div className="px-4">
				<div className="flex px-6 items-center">
					<Image width={90} height={90} src={logo} alt="logo" className="w-[90px] h-[90px]" />
					<div className="flex-grow mt-1">
						<p className="text-[20px] text-center mb-2 font-bold">UNIVERSIDAD TECNOLÓGICA  DE LA MIXTECA</p>
						<p className="w-full text-center text-[17px] font-semibold">REPORTE MENSUAL DE ACTIVIDADES DEL SERVICIO SOCIAL</p>
					</div>
				</div>

				<p className="text-right mt-8">Formato No. {formatNumber}</p>

				<div className="flex flex-col gap-1 mt-4">
					<div className="flex gap-2 items-center">
						<p className="text-left w-[180px] font-semibold">NOMBRE COMPLETO DEL ALUMNO:</p>
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
						<p className="text-left w-[180px] font-semibold">INSTITUCIÓN Y/O DEPENDENCIA:</p>
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

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">ESTADO:</p>
							<p>{governmentAgency.state}</p>
						</div>

						<div className="flex gap-2">
							<p className="text-left font-semibold">TELÉFONO:</p>
							<p>{governmentAgency.supervisorPhone}</p>
						</div>
					</div>

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">HORARIO:</p>
							<p>{formatSchedule(period.schedule)}</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">TOTAL DE HORAS REALIZADAS:</p>
							<p>{activity.hours}</p>
						</div>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">PERIODO:</p>
						<p>Del {formatedDate(activity.startDate)} al {formatedDate(activity.endDate)}</p>
					</div>
				</div>

				<div className="text-[13px] mt-4">
					<table className="w-full table-auto border-collapse border-t border-l border-black">
						<thead>
							<tr>
								<th className="border-b border-r border-black p-2">No.</th>
								<th className="border-b border-r border-black p-2">DESCRIPCIÓN DE ACTIVIDADES REALIZADAS EN EL PERIODO SEÑALADO:</th>
							</tr>
						</thead>

						<tbody>
							{
								description.split('\n').map((paragraph, index) => {
									if (!paragraph)
										return null

									return (
										<tr key={`activity-description-${index}`}>
											<td className="border-b border-r border-black p-2">{index + 1}.-</td>
											<td className="border-b border-r border-black p-2">{paragraph}</td>
										</tr>
									)
								})
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