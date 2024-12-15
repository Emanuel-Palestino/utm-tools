/* eslint-disable @next/next/no-img-element */
import { Internship } from '@app/_lib/types/Iternship'
import { formatedDate } from '@app/utils/format'
import logo from '@public/UTMEscudo.png'
import React from 'react'
import { FC } from 'react'


interface FinalReportProps {
	data: Omit<Internship, 'applicationDate'>,
	informContent: string
}

const FinalReport: FC<FinalReportProps> = ({ data, informContent }) => {
	return (
		<section className="w-full h-full text-[14px]">

			<div className="relative px-10 h-[110px]">
				<img width={120} height={120} src={logo.src} alt="logo" className="inline-block align-top" />
				<div className="ml-12 inline-block align-top text-center mt-6 text-[20px]">
					<p className="leading-none">UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA</p>
					<p className="mt-1 font-semibold">INFORME FINAL DE ESTANCIA PROFESIONAL</p>
				</div>
			</div>

			<div className="w-full flex gap-2 justify-end pr-10 mb-6">
				<p className="font-semibold">FECHA:</p>
				<p>{formatedDate(Date.now())}</p>
			</div>

			<div className="px-10">
				<div className="flex flex-col mb-2 gap-1 ">
					<div className="flex gap-4">
						<p className="min-w-[75px]">Nombre del alumno:</p>
						<p className="font-semibold">{data.person.name}</p>
					</div>

					<div className="flex gap-12">
						<div className="flex gap-4">
							<p className="min-w-[75px]">Carrera:</p>
							<p className="font-semibold">{data.student.career}</p>
						</div>

						<div className="flex gap-4">
							<p className="min-w-[75px]">Semestre:</p>
							<p className="font-semibold">{data.student.semester}</p>
						</div>
					</div>


					<div className="flex gap-4">
						<p className="min-w-[75px]">Periodo de estancia en la empresa/institución:</p>
						<p className="font-semibold">{data.company.companyName}</p>
					</div>

					<div className="flex gap-4 pb-3">
						<p className="">Del:</p>
						<p className="font-medium">{formatedDate(data.period.startDate)} <span className="inline-block w-28 text-center">al</span> {formatedDate(data.period.endDate)}</p>
					</div>

					<div id="content" className="p-6 flex place-content-up flex-col gap-4 flex-wrap mb-1 border-solid border-black border-2 h-[590px] text-[15px]">
						{informContent}
					</div>

					<div className="flex justify-around text-center mt-16">
						<p className="border-t-[1px] border-black min-w-[170px]">Firma del Alumno</p>
						<p className="border-t-[1px] border-black leading-4 min-w-[170px] pb-1">Vo. Bo. <br />Jefatura de Carrera</p>
					</div>
				</div>
			</div>

		</section>
	)
}

export default FinalReport