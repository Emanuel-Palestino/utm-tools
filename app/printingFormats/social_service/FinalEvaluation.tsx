import logo from '@/public/UTMEscudo.png'
import Image from 'next/image'


const evaluation: string[] = [
	'Disciplina',
	'Puntualidad',
	'Presentación',
	'Responsabilidad',
	'Desempeño',
	'Calidad en el Trabajo',
	'Nivel de Conocimientos',
	'Iniciativa',
	'Eficiencia',
	'Lealtad y Discreción'
]

export const FinalEvaluation = () => {

	return (
		<section className="w-full h-full text-[13px]">

			<div className="flex px-6 items-center">
				<Image width={90} height={90} src={logo} alt="logo" className="w-[90px] h-[90px]" />
				<div className="flex-grow mt-1">
					<p className="text-[20px] text-center mb-2 font-bold">UNIVERSIDAD TECNOLÓGICA  DE LA MIXTECA</p>
					<p className="w-full text-center text-[17px] font-semibold">REPORTE DE EVALUACIÓN FINAL DEL SERVICIO SOCIAL</p>
				</div>
			</div>


			<div className="px-8">
				<p className="text-right mt-6">Formato No. 1</p>

				<p className="mb-1">C. JEFE DE ÁREA.</p>
				<p className="mb-1">Con la finalidad de atender cada vez con mayor calidad y eficiencia del SERVICIO SOCIAL de nuestro alumno(a), así como para tener referentes que nos orienten al mejor funcionamiento de las necesidades del Sector Público. Le agradeceré el llenado del siguiente formato:</p>

				<div className="flex flex-col gap-1 mt-4 mb-2">
					<div className="flex gap-2 items-center">
						<p className="text-left w-[170px] font-semibold">NOMBRE COMPLETO DEL ALUMNO:</p>
						<p>Emanuel Palestino Hernández</p>
					</div>

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[170px] font-semibold">CARRERA:</p>
							<p>Ingeniería en Computación</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">SEMESTRE:</p>
							<p>Octavo</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">MATRÍCULA:</p>
							<p>239847293784</p>
						</div>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[170px] font-semibold">PERIODO:</p>
						<p>Del 5 de octubre del 2023 a 5 de octubre del 2023</p>
					</div>

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[170px] font-semibold">HORARIO:</p>
							<p>De 9am a 10pm</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">TOTAL DE HORAS REALIZADAS:</p>
							<p>555</p>
						</div>
					</div>

					<div className="flex gap-2 items-center">
						<p className="text-left w-[170px] font-semibold">INSTITUCIÓN Y/O DEPENDENCIA:</p>
						<p>Municipio de oaxaca oaxaca</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[170px] font-semibold">ÁREA O DEPARTAMENTO:</p>
						<p>Estadística y Computación</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[170px] font-semibold">DIRECCIÓN:</p>
						<p>calle 1 oaxaca oaxaca huajuapan</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[170px] font-semibold">CIUDAD O LOCALIDAD:</p>
						<p>Huajuapan de leon</p>
					</div>

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[170px] font-semibold">ESTADO:</p>
							<p>Oaxaca</p>
						</div>

						<div className="flex gap-2">
							<p className="text-left font-semibold">TELÉFONO:</p>
							<p>95323423424</p>
						</div>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[170px] font-semibold">RESPONSABLE INMEDIATO:</p>
						<p>Emanuel palestino Hernández</p>
					</div>
				</div>

				<div className="mb-1">
					<table className="w-full table-auto border-collapse border-t border-l border-black">
						<thead>
							<tr>
								<th className="border-b border-r border-black bg-gray-300" colSpan={6}>
									Evaluación General del Alumno
								</th>
							</tr>
						</thead>

						<tbody>
							<tr className="text-center">
								<td className="border-b border-r border-black"></td>
								<td className="border-b border-r border-black w-20">Muy Bien</td>
								<td className="border-b border-r border-black w-20">Bien</td>
								<td className="border-b border-r border-black w-20">Regular</td>
								<td className="border-b border-r border-black w-20">Mal</td>
								<td className="border-b border-r border-black w-20">Pésimo</td>
							</tr>
							{evaluation.map(e => (
								<tr key={`e_${e}`}>
									<td className="border-b border-r border-black">{e}</td>
									<td className="border-b border-r border-black"></td>
									<td className="border-b border-r border-black"></td>
									<td className="border-b border-r border-black"></td>
									<td className="border-b border-r border-black"></td>
									<td className="border-b border-r border-black"></td>
								</tr>
							))}
						</tbody>

					</table>
				</div>

				<div className="mb-2">
					<p>¿Considera necesario reforzar y/o incorporar algunos temas en la carrera del alumno?</p>
					<div className="flex gap-1">
						<p>Sí</p>
						<p className="min-w-[40px] border-b border-black"></p>
						<p>No</p>
						<p className="min-w-[40px] border-b border-black"></p>
						<p>Especifique:</p>
						<p className="w-auto flex-grow border-b border-black"></p>
					</div>
				</div>

				<div className="flex gap-4 mb-8 flex-wrap">
					<p>Observaciones:</p>
					<p className="border-b border-black flex-grow w-auto"></p>
					<p className="border-b border-black flex-grow w-full"></p>
				</div>

				<div className="flex justify-around text-center">
					<p className="border-t-[1px] border-black min-w-[170px]">Fecha</p>
					<p className="border-t-[1px] border-black leading-4 min-w-[170px] pb-1">Firma y Sello</p>
				</div>

				<p className="mt-4"><span className="font-bold">Nota: </span> Le agradeceré esta información sea confidencial y se remita en sobre cerrado y sello inviolable.</p>
			</div>
		</section>
	)

}