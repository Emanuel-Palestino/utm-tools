import { formatedDate } from "@/app/utils/format"
import { Person } from "@/src/models/Person"
import { SocialServicePeriod } from "@/src/models/social_service/SocialServicePeriod"
import { SocialServiceStudent } from "@/src/models/social_service/SocialServiceStudent"
import { FC } from "react"


interface DocumentReceptionProps {
	person: Person
	student: SocialServiceStudent
	period: SocialServicePeriod
}

export const DocumentReception: FC<DocumentReceptionProps> = props => {

	return (
		<section className="w-full h-full text-[13px]">
			<p className="text-center text-[14px]">COORDINACIÓN DE ESTANCIAS PROFESIONALES, SERVICIO SOCIAL Y VIAJE DE PRÁCTICAS ESCOLARES</p>
			<p className="text-center font-bold text-[14px]">Recepción de Documentos</p>

			<Section {...props} />
			<span className="block h-12" />
			<Section {...props} />
		</section>
	)

}

const Section: FC<DocumentReceptionProps> = ({ person, student, period }) => {
	return (
		<div>
			<div className="mt-5">
				<table className="w-full table-auto border-collapse border-t border-l border-black text-center">
					<thead>
						<tr className="text-[11px]">
							<th className="border-b border-r border-black p-1" colSpan={3}>NOMBRE</th>
							<th className="border-b border-r border-black p-1">MATRÍCULA</th>
							<th className="border-b border-r border-black p-1" colSpan={2}>PERIODO DE SERVICIO SOCIAL</th>
							<th className="border-b border-r border-black p-1">SEMESTRE</th>
							<th className="border-b border-r border-black p-1">CARRERA</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="border-b border-r border-black p-1 leading-3" colSpan={3}>{`${person.paternalSurname} ${person.maternalSurname} ${person.name}`}</td>
							<td className="border-b border-r border-black p-1">{student.enrollment}</td>
							<td className="border-b border-r border-black p-1 leading-3" colSpan={2}>{formatedDate(period.startDate)} AL <br /> {formatedDate(period.endDate)}</td>
							<td className="border-b border-r border-black p-1">{student.semester}</td>
							<td className="border-b border-r border-black p-1 leading-3">{student.career}</td>
						</tr>
						<tr>
							<td className="border-b border-r border-black text-left p-1 h-16 align-top" colSpan={8}>
								<span className="font-bold">Observaciones: </span>
							</td>
						</tr>
						<tr className="text-[10px]">
							<td className="border-b border-r border-black p-1 leading-4">FORMATO DE SOLICITUD PARA LA PRESTACIÓN DE SERVICIO SOCIAL</td>
							<td className="border-b border-r border-black p-1 leading-4">CRONOGRAMA DE ACTIVIDADES</td>
							<td className="border-b border-r border-black p-1 leading-4">ACUSE DE OFICIO DE PRESENTACIÓN</td>
							<td className="border-b border-r border-black p-1 leading-4">OFICIO DE ACEPTACIÓN EMITIDO POR LA INSTITUCIÓN O DEPENDENCIA</td>
							<td className="border-b border-r border-black p-1 leading-4">REPORTES MENSUALES DE ACTIVIDADES</td>
							<td className="border-b border-r border-black p-1 leading-4">EVALUACIÓN FINAL POR PARTE DE LA INSTITUCIÓN O DEPENDENCIA</td>
							<td className="border-b border-r border-black p-1 leading-4">OFICIO DE TERMINACIÓN EMITIDO POR PARTE DE LA INSTITUCIÓN O DEPENDENCIA</td>
							<td className="border-b border-r border-black p-1 leading-4">INFORME FINAL CON V°B° DE JEFATURA DE CARRERA</td>
						</tr>
						<tr>
							<td className="border-b border-r border-black h-12"></td>
							<td className="border-b border-r border-black"></td>
							<td className="border-b border-r border-black"></td>
							<td className="border-b border-r border-black"></td>
							<td className="border-b border-r border-black"></td>
							<td className="border-b border-r border-black"></td>
							<td className="border-b border-r border-black"></td>
							<td className="border-b border-r border-black"></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="flex gap-8 mt-6 px-3">
				<div className="flex flex-col justify-between basis-5/12 text-center px-2">
					<p>RECIBIÓ</p>
					<p className="leading-4">L.C.E. María Luisa Barragán Ramírez Coordinadora de Vinculación de Alumnos y Egresados</p>
				</div>

				<div className="flex-grow flex flex-col gap-1">
					<p className="text-center mb-2">ENTREGÓ</p>

					<div className="flex gap-4">
						<p className="w-[80px]">FIRMA:</p>
						<p className="border-b border-black flex-grow"></p>
					</div>

					<div className="flex gap-4 items-center">
						<p className="w-[80px]">DIRECCIÓN:</p>
						<p className="leading-3">{student.address}</p>
					</div>

					<div className="flex gap-4">
						<p className="w-[80px]">CORREO:</p>
						<p>{person.email}</p>
					</div>

					<div className="flex gap-4">
						<p className="w-[80px]">CEL.:</p>
						<p>{person.phone}</p>
					</div>
				</div>
			</div>
		</div>
	)
}