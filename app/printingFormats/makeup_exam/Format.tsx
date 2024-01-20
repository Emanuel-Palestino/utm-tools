import logo from '@/public/UTMEscudo.png'
import Image from 'next/image'
import { FC } from 'react'


export const Format = () => {

	return (
		<section className="w-full h-full text-[15px] px-6 flex flex-col justify-between">
			<Section to="Servicios Escolares" />
			<Section to="el alumno" />
		</section>
	)

}

const Section: FC<{ to: string }> = ({ to }) => {

	return (
		<div>
			<div className="h-28">
				<Image width={90} height={90} src={logo} alt="logo" className="inline-block align-top" />
				<div className="ml-16 pl-4 inline-block align-top text-center mt-4 text-[18px]">
					<p className="leading-none">UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA</p>
					<p className="font-semibold leading-none">DEPTO. DE SERVICIOS ESCOLARES</p>
					<p className="font-bold">SOLICITUD DE EXAMEN EXTRAORDINARIO</p>
				</div>
			</div>

			<div className="flex flex-col gap-3">
				<div className="flex gap-4">
					<p className="font-semibold">NOMBRE DEL ALUMNO:</p>
					<p>Palestino Hernández Emanuel</p>
				</div>

				<div className="flex gap-6">
					<div className="flex gap-4">
						<p className="font-semibold">MATRÍCULA:</p>
						<p>2019020337</p>
					</div>
					<div className="flex gap-4">
						<p className="font-semibold">GRUPO ACTUAL:</p>
						<p>902-A</p>
					</div>
					<div className="flex gap-4">
						<p className="font-semibold">PORCENTAJE DE BECA:</p>
						<p>100%</p>
					</div>
				</div>

				<div className="flex gap-4 items-center">
					<p className="font-semibold">MATERIA(S):</p>
					<p>Ingenieria de requerimientos, pruebas de software, matematicas aplicadas, otra materia de relleno</p>
				</div>

				<div className="flex gap-4">
					<p className="font-semibold">SEMESTRE AL QUE CORRESPONDE(N) LAS MATERIA(S):</p>
					<p>Noveno</p>
				</div>

				<div className="flex gap-4">
					<p>1° Extraordinario (✔)</p>
					<p>2° Extraordinario (✔)</p>
					<div className="flex gap-4">
						<p>Número de materias cursadas y/o recursadas:</p>
						<p>5</p>
					</div>
				</div>
			</div>

			<div className="mt-4 text-center">
				<p>HUAJUAPAN DE LEÓN, OAX, A 19 de Enero de 2023</p>
			</div>

			<p className="font-bold mt-2 leading-none text-[14px]">En caso de que el alumno no tenga derecho a presentar el examen de acuerdo al Reglamento de alumnos de Licenciatura vigente, la calificación obtenida en el examen no tendrá validez.</p>

			<div className="flex gap-16 justify-center mt-11 text-[14px]">
				<p className="border-black border-t w-56 text-center leading-none">FIRMA DEL ALUMNO</p>
				<p className="border-black border-t w-56 text-center leading-none">DEPTO. DE SERVICIOS ESCOLARES</p>
			</div>

			<small className="block mt-3">Comprobante para {to}.</small>
		</div>
	)

}