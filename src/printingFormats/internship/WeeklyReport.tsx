import logo from './../../assets/UTMEscudo.png'


export const WeeklyReport = () => {

	return (
		<section className="w-full text-[38px] h-full flex flex-col justify-between">
			<div>
				<div id="header" className="flex flex-wrap mb-6 px-6">
					<img src={logo} alt="logo" />
					<div className="flex-grow text-[50px] mt-8 text-center">
						<p>UNIVERSIDAD TECNOLÓGICA  DE LA MIXTECA</p>
						<p className="font-bold">ESTANCIA PROFESIONAL</p>
					</div>
					<p className="w-full text-center text-[44px]">REPORTE PARCIAL DE ACTIVIDADES REALIZADAS</p>
				</div>

				<div id="content" className="mt-32 flex flex-col gap-14">
					<div>
						<p className="w-full text-right">Formato No. 1</p>
						<p>Para ser llenado por el alumno.</p>
					</div>

					<div id="company_info" className="border-solid border-black border-2 p-4 pb-6 pt-0">
						<div className="flex gap-4">
							<p className="text-left min-w-[500px]">Empresa o Institución:</p>
							<p className="font-medium">Empresa empresa empresita</p>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[500px]">Área:</p>
							<p className="font-medium">Desarrollo de Software</p>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[500px]">Jefe Inmediato Superior:</p>
							<p className="font-medium">Emanuel Palestino Hernández</p>
						</div>
					</div>

					<div id="student_info" className="border-solid border-black border-2 p-4 pb-6 pt-0">
						<div className="flex gap-4">
							<p className="text-left min-w-[500px]">Nombre del Alumno:</p>
							<p className="font-medium">Emanuel Palestino Hernández</p>
						</div>

						<div className="flex gap-16">
							<div className="flex gap-4">
								<p className="text-left min-w-[500px]">Carrera:</p>
								<p className="font-medium min-w-[600px]">Ingeniería en Computación</p>
							</div>

							<div className="flex gap-4">
								<p>Semestre:</p>
								<p className="font-medium">9</p>
							</div>
						</div>

						<div className="flex gap-4">
							<p className="text-left min-w-[500px]">Semana del </p>
							<p className="font-medium">11-01-2023 al 18-01-2023</p>
						</div>

						<div className="flex gap-16">
							<div className="flex gap-4">
								<p className="text-left min-w-[500px]">Horario:</p>
								<p className="font-medium min-w-[600px]">9am - 10pm</p>
							</div>

							<div className="flex gap-4">
								<p>Total de horas trabajadas:</p>
								<p className="font-medium">9</p>
							</div>
						</div>
					</div>

					<div id="description" className="border-solid border-black border-2 p-4 pb-6 pt-0">
						<p className="text-[42px] font-medium mb-4">Descripción de funciones realizadas:</p>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, velit laborum, magni quae a sapiente ipsum autem sed nulla ut quaerat doloremque tenetur in dolore, dolores facilis error veniam soluta!
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo laudantium accusamus praesentium aliquam earum dolores et, id deserunt amet voluptas officia dolore enim quaerat ipsa aperiam, ea accusantium. Consequuntur, possimus!
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem perferendis ratione pariatur possimus, placeat eveniet, esse ad eaque provident dolorem, modi perspiciatis illo quod omnis vel? Tempora magnam eaque placeat?
							Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam mollitia minima eaque obcaecati vel doloremque, nesciunt necessitatibus quo placeat cupiditate quas natus sunt pariatur cumque quasi repellendus, quae rem fugiat.
						</p>
					</div>

					<div id="comments" className="border-solid border-black border-2 p-4 pb-6 pt-0">
						<p className="text-[42px] font-medium mb-4">Comentarios:</p>
						<p>
							Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet voluptas unde nostrum asperiores sint nam ratione aspernatur fugit cupiditate vitae, voluptatem, accusantium pariatur labore veritatis! Facere, repellat? Quam, accusantium dolorum!
						</p>
					</div>
				</div>
			</div>

			<div className="flex justify-around">
				<p className="border-t-2 border-black">Firma del Alumno</p>
				<p className="border-t-2 border-black text-center">Vo. Bo. <br />Jefe inmediato superior</p>
			</div>
		</section>
	)

}