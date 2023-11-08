import { FC } from 'react'
import { Internship } from '@/src/models/Internship'
import logo from '@/public/UTMEscudo.png'
import Image from 'next/image'


interface WeeklyReportProps {
	data: Internship
	formatNumber: number
	description: string
	comments: string
	period: string
	totalHours: number
}

export const WeeklyReport: FC<WeeklyReportProps> = ({ data, formatNumber, description, comments, period, totalHours }) => {

	return (
		<section className="w-full h-full text-[15px] flex flex-col justify-between">
			<div>
				<div className="flex flex-wrap px-6">
					<Image width={90} height={90} src={logo} alt="logo" className="w-[90px] h-[90px]" />
					<div className="flex-grow text-[20px] text-center mt-1">
						<p>UNIVERSIDAD TECNOLÓGICA  DE LA MIXTECA</p>
						<p className="font-semibold">ESTANCIA PROFESIONAL</p>
					</div>
					<p className="w-full text-center text-[18px]">REPORTE PARCIAL DE ACTIVIDADES REALIZADAS</p>
				</div>

				<div className="flex flex-col mt-8 gap-4">
					<div>
						<p className="w-full text-right">Formato No. {formatNumber}</p>
						<p>Para ser llenado por el alumno.</p>
					</div>

					<div className="border-black border-[1px] px-1 pb-3">
						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Empresa o Institución:</p>
							<p className="font-medium">{data.companyName}</p>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Área:</p>
							<p className="font-medium">{data.workArea}</p>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Jefe Inmediato Superior:</p>
							<p className="font-medium">{data.recipientName}</p>
						</div>
					</div>

					<div className="border-black border-[1px] px-1 pb-3">
						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Nombre del Alumno:</p>
							<p className="font-medium">{data.student.name}</p>
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
							<p className="font-medium">{period}</p>
						</div>

						<div className="flex gap-16">
							<div className="flex gap-4">
								<p className="text-left min-w-[180px]">Horario:</p>
								<p className="font-medium min-w-[200px]">{data.period.schedule}</p>
							</div>

							<div className="flex gap-4">
								<p>Total de horas trabajadas:</p>
								<p className="font-medium">{totalHours}</p>
							</div>
						</div>
					</div>

					<div className="border-black border-[1px] px-1 pb-3 min-h-[245px]">
						<p className="text-[16px] font-medium mb-2">Descripción de funciones realizadas:</p>
						<p>{description}</p>
					</div>

					<div className="border-black border-[1px] px-1 pb-3 min-h-[110px]">
						<p className="text-[16px] font-medium mb-2">Comentarios:</p>
						<p>{comments}</p>
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