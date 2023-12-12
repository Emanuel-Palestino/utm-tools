import Image from "next/image"
import logo from '@/public/UTMEscudo.png'


export const ScheduleOfActivities = () => {

	return (
		<section className="w-full h-full text-[14px] flex flex-col justify-between">
			<div>
				<div className="px-6 w-full flex gap-12 items-center">
					<Image width={100} height={100} src={logo} alt="logo" className="flex-shrink-0 basis-[130px]" />
					<div className="text-center text-[19px]">
						<div className="flex">
							<div className="w-0 h-0 border-r-[50px] border-r-[#b3b2b2] border-b-[80px] border-b-transparent"></div>
							<p className="text-right font-bold bg-[#b3b2b2] p-2 px-10 text-white">COORDINACIÓN DE ESTANCIAS PROFESIONALES, SERVICIO SOCIAL Y VIAJES DE PRÁCTICAS ESCOLARES</p>
						</div>
						<p className="text-center font-semibold mt-4 text-[19px]">CRONOGRAMA DE ACTIVIDADES DE SERVICIO SOCIAL</p>
					</div>
				</div>

				<p className="text-right text-[16px] px-6 mt-8">FECHA: 12 de noviembre de 2023</p>

				<div className="flex flex-col gap-1 px-8 mt-4">
					<div className="flex gap-4">
						<p className="w-[230px] font-semibold text-right">NOMBRE COMPLETO DEL ALUMNO:</p>
						<p>Emanuel Palestino Hernández</p>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-4">
							<p className="w-[230px] font-semibold text-right">CARRERA:</p>
							<p>Ingeniería en Computación</p>
						</div>

						<div className="flex gap-4">
							<p className="font-semibold">SEMESTRE:</p>
							<p>Octavo</p>
						</div>

						<div className="flex gap-4">
							<p className="font-semibold">MATRÍCULA:</p>
							<p>23498729347</p>
						</div>
					</div>

					<div className="flex gap-4">
						<p className="w-[230px] font-semibold text-right">INSTITUCIÓN Y/O DEPENDENCIA:</p>
						<p>23498729347</p>
					</div>

					<div className="flex gap-4 items-center">
						<p className="w-[230px] font-semibold text-right">NOMBRE DEL PROGRAMA O PROYECTO:</p>
						<p>algo algo algo algo</p>
					</div>

					<div className="flex gap-4">
						<p className="w-[230px] font-semibold text-right">PERIODO:</p>
						<p>Del 5 de octubre del 2020 al 5 de octubre del 2020</p>
					</div>

					<div className="flex gap-4">
						<p className="w-[230px] font-semibold flex-shrink-0 text-right">OBJETIVO:</p>
						<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti necessitatibus officia nam rerum repellendus odit assumenda nostrum neque adipisci consectetur dicta tempore, optio quidem magni molestias praesentium rem. Reprehenderit, officia!</p>
					</div>
				</div>

				<div className="text-[13px] mt-4 px-8">
					<table className="w-full table-auto border-collapse">
						<thead className="border-t border-l border-black">
							<tr>
								<th rowSpan={2} className="border-b border-r border-black">NÚM.</th>
								<th rowSpan={2} className="border-b border-r border-black w-96">ACTIVIDAD</th>

								<th colSpan={3} className="text-center border-b border-r border-black">DEL</th>
								<th colSpan={3} className="text-center border-b border-r border-black">AL</th>

								<th rowSpan={2} className="border-b border-r border-black">NÚMERO DE HORAS</th>
							</tr>
							<tr className="text-[12px]">
								<th className="border-b border-r border-black">Día</th>
								<th className="border-b border-r border-black">Mes</th>
								<th className="border-b border-r border-black">Año</th>

								<th className="border-b border-r border-black">Día</th>
								<th className="border-b border-r border-black">Mes</th>
								<th className="border-b border-r border-black">Año</th>
							</tr>
						</thead>

						<tbody className="border-l border-black">
							<tr className="text-center">
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
							</tr>
							<tr className="text-center">
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
							</tr>
							<tr className="text-center">
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
							</tr>
							<tr className="text-center">
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
							</tr>
							<tr className="text-center">
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
							</tr>
							<tr className="text-center">
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
								<td className="border-b border-r border-black">a</td>
							</tr>
						</tbody>
						<tfoot>
							<tr className="text-[14px]">
								<td></td>
								<td></td>
								<td colSpan={6} className="text-right font-semibold p-1">TOTAL DE HORAS:</td>
								<td className="text-center font-semibold border-2 border-black">999</td>
							</tr>
						</tfoot>
					</table>
				</div>

			</div>

			<div className="flex gap-4 px-8">
				<p className="border-t-[1.5px] border-black w-60 text-center">Firma del Alumno</p>
				<p className="border-t-[1.5px] border-black w-60 text-center">Responsable Inmediato (firma y sello)</p>
			</div>
		</section>
	)

}