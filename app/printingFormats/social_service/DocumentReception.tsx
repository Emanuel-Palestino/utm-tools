
export const DocumentReception = () => {

	return (
		<section className="w-full h-full text-[13px]">
			<p className="text-center text-[14px]">COORDINACIÓN DE ESTANCIAS PROFESIONALES, SERVICIO SOCIAL Y VIAJE DE PRÁCTICAS ESCOLARES</p>
			<p className="text-center font-semibold">Recepción de Documentos</p>

			<Section />
			<span className="block h-10" />
			<Section />
		</section>
	)

}

const Section = () => {
	return (
		<div>
			<div className="mt-5">
				<table className="w-full table-auto border-collapse border border-black text-center">
					<thead>
						<tr className="text-[11px]">
							<th className="border border-black p-1" colSpan={3}>NOMBRE</th>
							<th className="border border-black p-1">MATRÍCULA</th>
							<th className="border border-black p-1" colSpan={2}>PERIODO DE SERVICIO SOCIAL</th>
							<th className="border border-black p-1">SEMESTRE</th>
							<th className="border border-black p-1">CARRERA</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td className="border border-black" colSpan={3}>Emanuel Palestino Hernández</td>
							<td className="border border-black">201963040</td>
							<td className="border border-black" colSpan={2}>2020-01-01 - 2020-01-01</td>
							<td className="border border-black">9</td>
							<td className="border border-black">Ingeniería en Computación</td>
						</tr>
						<tr>
							<td className="text-left p-1 h-16 align-top" colSpan={8}><span className="font-bold">Observaciones: </span></td>
						</tr>
						<tr className="text-[10px]">
							<td className="border border-black p-1">FORMATO DE SOLICITUD PARA LA PRESTACIÓN DE SERVICIO SOCIAL</td>
							<td className="border border-black p-1">CRONOGRAMA DE ACTIVIDADES</td>
							<td className="border border-black p-1">ACUSE DE OFICIO DE PRESENTACIÓN</td>
							<td className="border border-black p-1">OFICIO DE ACEPTACIÓN EMITIDO POR LA INSTITUCIÓN O DEPENDENCIA</td>
							<td className="border border-black p-1">REPORTES MENSUALES DE ACTIVIDADES</td>
							<td className="border border-black p-1">EVALUACIÓN FINAL POR PARTE DE LA INSTITUCIÓN O DEPENDENCIA</td>
							<td className="border border-black p-1">OFICIO DE TERMINACIÓN EMITIDO POR PARTE DE LA INSTITUCIÓN O DEPENDENCIA</td>
							<td className="border border-black p-1">INFORME FINAL CON V°B° DE JEFATURA DE CARRERA</td>
						</tr>
						<tr>
							<td className="border border-black h-12"></td>
							<td className="border border-black"></td>
							<td className="border border-black"></td>
							<td className="border border-black"></td>
							<td className="border border-black"></td>
							<td className="border border-black"></td>
							<td className="border border-black"></td>
							<td className="border border-black"></td>
						</tr>
					</tbody>
				</table>
			</div>

			<div className="flex gap-8 mt-6 px-3">
				<div className="flex flex-col justify-between basis-5/12 text-center px-2">
					<p>RECIBIÓ</p>
					<p>L.C.E. María Luisa Barragán Ramírez Coordinadora de Vinculación de Alumnos y Egresados</p>
				</div>

				<div className="flex-grow flex flex-col gap-1">
					<p className="text-center mb-2">ENTREGÓ</p>

					<div className="flex gap-4">
						<p className="w-[80px]">FIRMA:</p>
						<p className="border-b border-black flex-grow"></p>
					</div>

					<div className="flex gap-4 items-center">
						<p className="w-[80px]">DIRECCIÓN:</p>
						<p></p>
					</div>

					<div className="flex gap-4">
						<p className="w-[80px]">CORREO:</p>
						<p>emanuel.palestino.h@gmail.com</p>
					</div>

					<div className="flex gap-4">
						<p className="w-[80px]">CEL.:</p>
						<p>9512349087</p>
					</div>
				</div>
			</div>
		</div>
	)
}