import logo from '@/public/UTMEscudo.png'
import { Internship } from '@/src/models/Internship'
import Image from 'next/image'
import { FC } from 'react'

interface FinalReportProps {
	data: Internship
}

export const FinalReport: FC<FinalReportProps> = ({ data }) => {
	return (
		<section className="w-full h-full text-[13.5px]">

			<div className="relative px-6 h-[150px]">
				<Image width={90} height={90} src={logo} alt="logo" className="inline-block align-top" />
				<div className="ml-12 inline-block align-top text-center mt-1 text-[20px]">
					<p className="leading-none">UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA</p>
					<p className="font-semibold leading-none">ESTANCIA PROFESIONAL</p>
					<p className="font-semibold leading-normal">Carretera          a          Acatlima          Km.          2.5</p>
					<p className="font-semibold leading-normal">Huajuapan          de          León,          Oaxaca. </p>
					<p className="mt-1">INFORME FINAL DE ESTANCIA PROFESIONAL</p>
				</div>
			</div>

			<div className="px-10">
				<div className="flex flex-col mb-2 ">


					<div className="flex gap-4">
						<p className="min-w-[160px]">Fecha:</p>
						<p className="font-semibold">{data.applicationDate}</p>
					</div>

					<div className="flex gap-4">
						<p className="min-w-[160px]">Nombre:</p>
						<p className="font-semibold">{data.student.name}</p>
					</div>

					<div className="flex gap-4">
						<p className="min-w-[160px]">Carrera:</p>
						<p className="font-semibold">{data.student.career}</p>
					</div>

					<div className="flex gap-4">
						<p className="min-w-[160px]">Semestre:</p>
						<p className="font-semibold">{data.student.semester}</p>
					</div>

					<div className="flex gap-4 pb-[15px]">
						<p className="min-w-[160px]">Empresa:</p>
						<p className="font-semibold">{data.companyName}</p>
					</div>

					<div id="content" className="p-10 flex place-content-center flex-col gap-4 flex-wrap mb-1 border-solid border-black border-2 h-[600px] text-[10px]">
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					<p>─────────────────────────────────────────────────────────────────────────────────────────────</p>
					</div>

					<div className="flex gap-4 place-content-center py-[25px]">
						<p className="place-content-center">Firma</p>
					</div>
					<div className="flex gap-4 place-content-center">
						<p className="font-semibold min-w-[160px]">{data.student.name}</p>
					</div>

				</div>
			</div>

		</section>
	)
}