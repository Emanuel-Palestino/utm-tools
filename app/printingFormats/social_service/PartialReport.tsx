import Image from "next/image"
import logo from '@/public/UTMEscudo.png'


export const PartialReport = () => {

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

				<p className="text-right mt-8">Formato No. 1</p>

				<div className="flex flex-col gap-1 mt-4">
					<div className="flex gap-2 items-center">
						<p className="text-left w-[180px] font-semibold">NOMBRE COMPLETO DEL ALUMNO:</p>
						<p>Emanuel Palestino Hernández</p>
					</div>

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">CARRERA:</p>
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
						<p className="text-left w-[180px] font-semibold">RESPONSABLE INMEDIATO:</p>
						<p>Emanuel palestino Hernández</p>
					</div>

					<div className="flex gap-2 items-center">
						<p className="text-left w-[180px] font-semibold">INSTITUCIÓN Y/O DEPENDENCIA:</p>
						<p>Municipio de oaxaca oaxaca</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">ÁREA O DEPARTAMENTO:</p>
						<p>Estadística y Computación</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">DIRECCIÓN:</p>
						<p>calle 1 oaxaca oaxaca huajuapan</p>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">CIUDAD O LOCALIDAD:</p>
						<p>Huajuapan de leon</p>
					</div>

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">ESTADO:</p>
							<p>Oaxaca</p>
						</div>

						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">TELÉFONO:</p>
							<p>95323423424</p>
						</div>
					</div>

					<div className="flex gap-6">
						<div className="flex gap-2">
							<p className="text-left w-[180px] font-semibold">HORARIO:</p>
							<p>De 9am a 10pm</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">TOTAL DE HORAS REALIZADAS:</p>
							<p>555</p>
						</div>
					</div>

					<div className="flex gap-2">
						<p className="text-left w-[180px] font-semibold">PERIODO:</p>
						<p>Del 5 de octubre del 2023 a 5 de octubre del 2023</p>
					</div>
				</div>

				<div className="text-[13px] mt-4">
					<table className="w-full table-auto border-collapse">
						<thead>
							<tr>
								<th className="border border-black p-2">No.</th>
								<th className="border border-black p-2">DESCRIPCIÓN DE ACTIVIDADES REALIZADAS EN EL PERIODO SEÑALADO:</th>
							</tr>
						</thead>

						<tbody>
							<tr>
								<td className="border border-black p-2">1.-</td>
								<td className="border border-black p-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique porro doloribus, deleniti commodi earum odit unde itaque quia, est, iusto voluptates tempore. Eos soluta praesentium quasi provident neque, impedit maiores!</td>
							</tr>
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