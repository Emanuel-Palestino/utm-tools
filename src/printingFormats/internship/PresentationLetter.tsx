import logo from './../../assets/UTMEscudo.png'


export const PresentationLetter = () => {

    return (
        <section className="w-full text-[38px]">
            <div id="header" className="flex gap-16 mb-6 px-6">
                <img src={logo} alt="logo" />
                <div className="text-[46px] mt-3">
                    <p className="font-bold text-[52px]">UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA</p>
                    <p>SOLICITUD DE ESTANCIAS PROFESIONALES</p>
                    <p>DATOS PARA LA ELABORACIÓN DE LA CARTA DE PRESENTACIÓN</p>
                </div>
            </div>

            <div id="content" className="p-5 flex flex-col gap-4 flex-wrap mb-1 border-solid border-black border-2">
                <p className="text-[42px] font-bold">I.- DATOS DEL ALUMNO</p>

                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Nombre completo:</p>
                        <p className="font-medium">Emanuel Palestino Hernández</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Hablante de Lengua Indígena:</p>
                        <p className="font-medium">No</p>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">¿Tienes algún tipo de discapacidad?</p>
                        <p className="font-medium">Si</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Menciona el tipo de discapacidad:</p>
                        <p className="font-medium">Jua Jua Jua JUa Jua</p>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Matrícula:</p>
                        <p className="font-medium">2019202337</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Carrera:</p>
                        <p className="font-medium">Ingeniería en Computación</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Grupo:</p>
                        <p className="font-medium">902-A</p>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Teléfono(s):</p>
                        <p className="font-medium">9809809809809</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="w-1/2">No. SS:</p>
                        <p className="font-medium">9872394872934</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Correo electrónico:</p>
                    <p className="font-medium">emanuel.palestino.h@gmail.com</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Adeudo de materia(s):</p>
                        <p className="font-medium">Sí</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Examen extraordinario:</p>
                        <p className="font-medium">Sí</p>
                    </div>
                    <div className="flex gap-4">
                        <p>1°:</p>
                        <p className="font-medium">Sí</p>
                    </div>
                    <div className="flex gap-4">
                        <p>2°:</p>
                        <p className="font-medium">Sí</p>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Curso de Verano:</p>
                        <p className="font-medium">Sí</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Nombre de la(s) materia(s):</p>
                        <p className="font-medium">Métodos Numéricos, Arquitectura de la computación</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Estado:</p>
                    <p className="font-medium">Activo</p>
                </div>


                <p className="text-center text-[40px]">PERIODO (Fecha de inicio y de terminación)</p>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Del:</p>
                    <p className="font-medium">25-Diciembre-2001 al 30-Enero-2002</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Horario:</p>
                        <p className="font-medium">5:00am a 10:00pm</p>
                    </div>

                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Total de horas por semana:</p>
                        <p className="font-medium">80</p>
                    </div>
                </div>



                <p className="text-[42px] font-bold">II.- DATOS DE LA EMPRESA O INSTITUCIÓN</p>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Nacional:</p>
                        <p className="font-medium">Sí</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Extranjero:</p>
                        <p className="font-medium">No</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Sector:</p>
                    <p className="font-medium">Público</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Giro de la empresa:</p>
                    <p className="font-medium">Desarrollo de software</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Nombre de la empresa/institución:</p>
                    <p className="font-medium">Desarrollo de software</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Área donde realizará las estancias:</p>
                    <p className="font-medium">Desarrollo de software</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Nombre del proyecto:</p>
                    <p className="font-medium">Desarrollo de software</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Dirección Completa:</p>
                    <p className="font-medium">Desarrollo de software</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Teléfono(s):</p>
                        <p className="font-medium">9512347898, 9559782332</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Ext.:</p>
                        <p className="font-medium">52</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Email:</p>
                    <p className="font-medium">algo@gmail.com</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Página web:</p>
                    <p className="font-medium">www.algo.com</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Contacto:</p>
                    <p className="font-medium">Emanuel Palestino Hernández</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Nombre del titular de la empresa al que se le dirigirá el oficio:</p>
                    <p className="font-medium">Emanuel Palestino Hernández</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Cargo de la persona:</p>
                    <p className="font-medium">Desarrollador</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">En atención a (opcional):</p>
                    <p className="font-medium">Emanuel Palestino Hernández</p>
                </div>
            </div>

            <p className="text-[34px] mb-6">Bajo protesta de decir verdad, manifiesto que los datos asentados en el presente documento son ciertos.</p>

            <p className="mb-7">V°B° DE JEFATURA DE CARRERA:</p>

            <div className="grid grid-cols-2">
                <p>Firma del Solicitante (Alumno):</p>
                <p>Fecha de Solicitud:</p>
            </div>
        </section>
    )

}