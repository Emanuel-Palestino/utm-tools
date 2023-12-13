import { Header } from "./Header"

export const Registration = () => {

	return (
		<section className="w-full h-full text-[14px] flex flex-col justify-between">
			<div className="px-4">
				<Header title="Formato de solicitud para la presentación de Servicio Social" />

				<p className="text-right mt-2">FECHA: 12 de Diciembre del 2023</p>

				<div className="flex flex-col gap-2 mt-4">
					<div className="flex gap-2 items-center">
						<p className="w-[180px] font-semibold">Nombre del Alumno(a) / Egresado(a):</p>
						<p>Palestino Hernández Emanuel</p>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-2">
							<p className="w-[180px] font-semibold">Matrícula:</p>
							<p>234987239487</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">Carrera:</p>
							<p>Ingeniería en Computación</p>
						</div>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-2">
							<p className="w-[180px] font-semibold">Semestre:</p>
							<p>Octavo</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">% de Créditos Aprobados:</p>
							<p>83.5</p>
						</div>
					</div>

					<div className="flex gap-2">
						<p className="w-[180px] font-semibold">Email:</p>
						<p>chemascamp@gmail.com</p>
					</div>

					<div className="flex gap-2">
						<p className="w-[180px] font-semibold">Teléfono:</p>
						<p>9519872367</p>
					</div>

					<div className="flex gap-2">
						<p className="w-[180px] font-semibold">Domicilio:</p>
						<p>oaxaca, oaxaca, jua jua, oaxaca</p>
					</div>

					<div className="flex gap-2 items-center">
						<p className="w-[180px] font-semibold">Hablande de lengua indígena:</p>
						<p>Si/No &emsp; Zapoteco</p>
					</div>

					<div className="flex gap-2 items-center">
						<p className="w-[180px] font-semibold">¿Tienes algún tipo de discapacidad?</p>
						<p>Si/No &emsp; Una discapacidad</p>
					</div>

					<p className="text-center font-bold mt-4">DATOS DE LA INSTITUCIÓN DONDE SE REALIZARÁ EL SERVICIO SOCIAL</p>

					<div className="flex gap-2">
						<p className="w-[180px] font-semibold">Institución y/o dependencia</p>
						<p>Alcaldia de oaxaca oaxaca</p>
					</div>

					<div className="flex gap-2 items-center">
						<p className="w-[180px] font-semibold">Nombre del Programa o Proyecto</p>
						<p>Sistema de bla bla bla bla</p>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-2">
							<p className="w-[180px] font-semibold">Responsable Inmediato:</p>
							<p>Una persona bla bla bla</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">Email:</p>
							<p>fiscalia@gmail.com</p>
						</div>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-2">
							<p className="w-[180px] font-semibold">Cargo que ocupa:</p>
							<p>Una persona bla bla bla</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">Area:</p>
							<p>Sistema de estadísticas</p>
						</div>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-2">
							<p className="w-[180px] font-semibold">Domicilio Laboral:</p>
							<p>direccion direccion direccion direccion</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">Estado:</p>
							<p>Oaxaca</p>
						</div>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-2">
							<p className="w-[180px] font-semibold">Ciudad o localidad:</p>
							<p>Huajuapan de León</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">Tel. Laboral:</p>
							<p>293847293847</p>
						</div>
					</div>

					<div className="flex gap-2">
						<p className="w-[180px] font-semibold">Email Laboral:</p>
						<p>asdfasdfasdfasdfasdf@gmail.com</p>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-2">
							<p className="w-[180px] font-semibold">Fecha de inicio:</p>
							<p>12 de Diciembre de 2023</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">Fecha de termino:</p>
							<p>12 de Diciembre de 2023</p>
						</div>
					</div>

					<div className="flex gap-8">
						<div className="flex gap-2">
							<p className="w-[180px] font-semibold">Duración (meses):</p>
							<p>6</p>
						</div>

						<div className="flex gap-2">
							<p className="font-semibold">Total de Horas:</p>
							<p>480</p>
						</div>
					</div>
				</div>
			</div>

			<div className="grid grid-cols-4 gap-6 items-end text-center">
				<div>
					<p className="mb-14">V°B°</p>
					<p className="border-t border-black">Vice-Rectoría Académica Firma, fecha y sello</p>
				</div>

				<p className="border-t border-black">Jefe(a) de carrera <br /> Firma y Nombre</p>
				<p className="border-t border-black">Responsable inmediato Firma, fecha y sello</p>
				<p className="border-t border-black">Firma del Alumno <br /> &nbsp; </p>
			</div>
		</section>
	)

}