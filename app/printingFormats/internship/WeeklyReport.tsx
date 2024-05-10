/* eslint-disable @next/next/no-img-element */
import { FC } from 'react'
import { Internship } from '@/src/models/Internship'
import logo from '@/public/UTMEscudo.png'
import { formatedDate, formatSchedule } from '@/app/utils/format'
import { PartialReport } from '@/src/models/PartialReport'


interface WeeklyReportProps {
	data: Omit<Internship, 'applicationDate'>
	partialReport: PartialReport
}

const WeeklyReport: FC<WeeklyReportProps> = ({ data, partialReport }) => {

	return (
		<section className="w-full h-full text-[15px] flex flex-col justify-between">
			<div>
				<div className="flex flex-wrap px-6">
					<img width={120} height={120} src={logo.src} alt="logo" className="w-[120px] h-[120px]" />
					<div className="flex-grow text-[20px] text-center mt-4">
						<p>UNIVERSIDAD TECNOLÓGICA  DE LA MIXTECA</p>
						<p className="font-semibold">ESTANCIA PROFESIONAL</p>
					</div>
					<p className="w-full text-center text-[18px]">REPORTE PARCIAL DE ACTIVIDADES REALIZADAS</p>
				</div>

				<div className="flex flex-col mt-8 gap-4">
					<div>
						<p className="w-full text-right">Formato No. {partialReport.formatNumber}</p>
						<p>Para ser llenado por el alumno.</p>
					</div>

					<div className="border-black border-[1px] p-1">
						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Empresa o Institución:</p>
							<p className="font-medium">{data.company.companyName}</p>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Área:</p>
							<p className="font-medium">{data.period.workArea}</p>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Jefe Inmediato Superior:</p>
							<p className="font-medium">{data.company.recipientName}</p>
						</div>
					</div>

					<div className="border-black border-[1px] p-1">
						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Nombre del Alumno:</p>
							<p className="font-medium">{data.person.name}</p>
						</div>

						<div className="flex gap-16">
							<div className="flex gap-4">
								<p className="text-left min-w-[180px]">Carrera:</p>
								<p className="font-medium min-w-[200px]">{data.student.career}</p>
							</div>

							<div className="flex gap-4">
								<p>Semestre:</p>
								<p className="font-medium">{data.student.semester}</p>
							</div>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Semana del </p>
							<p className="font-medium">{formatedDate(partialReport.startDate)} <span className="inline-block w-20 text-center font-normal">AL</span> {formatedDate(partialReport.endDate)}</p>
						</div>

						<div className="flex gap-16">
							<div className="flex gap-4">
								<p className="text-left min-w-[180px]">Horario:</p>
								<p className="font-medium min-w-[200px]">{formatSchedule(data.period.schedule)}</p>
							</div>

							<div className="flex gap-4">
								<p>Total de horas trabajadas:</p>
								<p className="font-medium">{partialReport.hours}</p>
							</div>
						</div>
					</div>

					<div className="border-black border-[1px] p-1 min-h-[245px]">
						<p className="text-[16px] font-medium mb-2">Descripción de funciones realizadas:</p>
						<p>{partialReport.description}</p>
					</div>

					<div className="border-black border-[1px] p-1 min-h-[110px]">
						<p className="text-[16px] font-medium mb-2">Comentarios:</p>
						<p>{partialReport.comments}</p>
					</div>
				</div>
			</div>

			<div className="flex justify-around text-center">
				<p className="border-t-[1px] border-black min-w-[170px]">Firma del Alumno</p>
				<p className="border-t-[1px] border-black leading-4 min-w-[170px] pb-1">Vo. Bo. <br />Jefe inmediato superior</p>
			</div>
		</section>
	)

}

export default WeeklyReport