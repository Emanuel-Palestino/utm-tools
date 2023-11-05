import logo from './../../assets/UTMEscudo.png'


export const WeeklyReport = () => {

	return (
		<section className="w-full h-full text-[15px] flex flex-col justify-between">
			<div>
				<div className="flex flex-wrap px-6">
					<img src={logo} alt="logo" className="w-24 h-28" />
					<div className="flex-grow text-[20px] text-center mt-1">
						<p>UNIVERSIDAD TECNOLÓGICA  DE LA MIXTECA</p>
						<p className="font-semibold">ESTANCIA PROFESIONAL</p>
					</div>
					<p className="w-full text-center text-[18px]">REPORTE PARCIAL DE ACTIVIDADES REALIZADAS</p>
				</div>

				<div className="flex flex-col mt-8 gap-4">
					<div>
						<p className="w-full text-right">Formato No. 1</p>
						<p>Para ser llenado por el alumno.</p>
					</div>

					<div className="border-black border-[1px] px-1 pb-3">
						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Empresa o Institución:</p>
							<p className="font-medium">Empresa empresa empresita</p>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Área:</p>
							<p className="font-medium">Desarrollo de Software</p>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Jefe Inmediato Superior:</p>
							<p className="font-medium">Emanuel Palestino Hernández</p>
						</div>
					</div>

					<div className="border-black border-[1px] px-1 pb-3">
						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Nombre del Alumno:</p>
							<p className="font-medium">Emanuel Palestino Hernández</p>
						</div>

						<div className="flex gap-16">
							<div className="flex gap-4">
								<p className="text-left min-w-[180px]">Carrera:</p>
								<p className="font-medium min-w-[200px]">Ingeniería en Computación</p>
							</div>

							<div className="flex gap-4">
								<p>Semestre:</p>
								<p className="font-medium">9</p>
							</div>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[180px]">Semana del </p>
							<p className="font-medium">11-01-2023 al 18-01-2023</p>
						</div>

						<div className="flex gap-16">
							<div className="flex gap-4">
								<p className="text-left min-w-[180px]">Horario:</p>
								<p className="font-medium min-w-[200px]">9am - 10pm</p>
							</div>

							<div className="flex gap-4">
								<p>Total de horas trabajadas:</p>
								<p className="font-medium">9</p>
							</div>
						</div>
					</div>

					<div className="border-black border-[1px] px-1 pb-3 min-h-[245px]">
						<p className="text-[16px] font-medium mb-2">Descripción de funciones realizadas:</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, velit laborum, magni quae a sapiente ipsum autem sed nulla ut quaerat doloremque tenetur in dolore, dolores facilis error veniam soluta!
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium accusamus praesentium aliquam earum dolores et, id deserunt amet voluptas officia dolore enim quaerat ipsa aperiam, ea accusantium. Consequuntur, possimus!
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis ratione pariatur possimus, placeat eveniet, esse ad eaque provident dolorem, modi perspiciatis illo quod omnis vel? Tempora magnam eaque placeat?
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam mollitia minima eaque obcaecati vel doloremque, nesciunt necessitatibus quo placeat cupiditate quas natus sunt pariatur cumque quasi repellendus, quae rem fugiat.
						</p>
					</div>

					<div className="border-black border-[1px] px-1 pb-3 min-h-[110px]">
						<p className="text-[16px] font-medium mb-2">Comentarios:</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptas unde nostrum asperiores sint nam ratione aspernatur fugit cupiditate vitae, voluptatem, accusantium pariatur labore veritatis! Facere, repellat? Quam, accusantium dolorum!
						</p>
					</div>
				</div>
			</div>

			<div className="flex justify-around text-center">
				<p className="border-t-[1px] border-black min-w-[170px]">Firma del Alumno</p>
				<p className="border-t-[1px] border-black leading-4 min-w-[170px] pb-1">Vo. Bo. <br />Jefe inmediato superior</p>
			</div>
		</section>
	)

}