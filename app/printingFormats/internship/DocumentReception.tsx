import { formatedDate } from "@/app/utils/format"
import { InternshipPeriod } from "@/src/models/InternshipPeriod"
import { InternshipStudent } from "@/src/models/InternshipStudent"
import { Person } from "@/src/models/Person"
import { FC } from "react"


interface DocumentReceptionProps {
	person: Person
	student: InternshipStudent
	period: InternshipPeriod
}

const DocumentReception: FC<DocumentReceptionProps> = props => {

	return (
		<section className="w-full h-full text-[13px]">
			<Section {...props} />
			<span className="block h-16" />
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
							<th className="border-b border-r border-black p-1" colSpan={2}>NOMBRE</th>
							<th className="border-b border-r border-black p-1">MATRÍCULA</th>
							<th className="border-b border-r border-black p-1" colSpan={2}>PERIODO DE ESTANCIAS</th>
							<th className="border-b border-r border-black p-1">SEMESTRE</th>
							<th className="border-b border-r border-black p-1">CARRERA</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="border-b border-r border-black p-1" colSpan={2}>{person.name}</td>
							<td className="border-b border-r border-black p-1">{student.enrollment}</td>
							<td className="border-b border-r border-black p-1" colSpan={2}>{formatedDate(period.startDate)} AL <br /> {formatedDate(period.endDate)}</td>
							<td className="border-b border-r border-black p-1">{student.semester}</td>
							<td className="border-b border-r border-black p-1">{student.career}</td>
						</tr>
						<tr>
							<td className="border-b border-r border-black text-left p-1 h-16 align-top" colSpan={7}>
								<span className="font-bold">Observaciones: </span>
							</td>
						</tr>
						<tr className="text-[10px]">
							<td className="border-b border-r border-black p-1">Acuse del oficio de presentación por parte de la empresa receptora</td>
							<td className="border-b border-r border-black p-1">Oficio de aceptación</td>
							<td className="border-b border-r border-black p-1">Reportes parciales de actividades realizadas (En periodos máximos de tres semanas para cada reporte)</td>
							<td className="border-b border-r border-black p-1">Evaluación final</td>
							<td className="border-b border-r border-black p-1">Oficio de terminación</td>
							<td className="border-b border-r border-black p-1">Informe final con V°B° de Jefatura de Carrera</td>
							<td className="border-b border-r border-black p-1">Cuestionario</td>
						</tr>
						<tr>
							<td className="border-b border-r border-black h-12"></td>
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
				<div className="flex flex-col justify-evenly basis-5/12 text-center px-2">
					<p className="font-bold">RECIBIÓ</p>
					<p>COORDINACIÓN DE ESTANCIA PROFESIONAL</p>
				</div>

				<div className="flex-grow flex flex-col gap-1">
					<p className="text-center font-bold mb-2">ENTREGÓ</p>

					<div className="flex gap-4">
						<p className="w-[80px]">FIRMA:</p>
						<p className="border-b border-black flex-grow"></p>
					</div>

					<div className="flex gap-4 items-center">
						<p className="w-[80px]">DIRECCIÓN:</p>
						<p></p>
					</div>

					<div className="flex gap-4">
						<p className="w-[80px]">CEL.:</p>
						<p>{person.phone}</p>
					</div>

					<div className="flex gap-4">
						<p className="w-[80px]">CORREO:</p>
						<p>{person.email}</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DocumentReception