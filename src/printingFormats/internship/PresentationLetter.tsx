import { FC } from 'react'
import { Internship } from '../../models/Internship'
import logo from './../../assets/UTMEscudo.png'


interface PresentationLetterProps {
    data: Internship
}

export const PresentationLetter: FC<PresentationLetterProps> = ({ data }) => {

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
                        <p className="font-medium">{data.student.name}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Hablante de Lengua Indígena:</p>
                        <p className="font-medium">{data.student.isSpeakerOfIndigenousLanguage ? 'Sí' : 'No'}</p>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">¿Tienes algún tipo de discapacidad?</p>
                        <p className="font-medium">{data.student.hasDisability ? 'Sí' : 'No'}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Menciona el tipo de discapacidad:</p>
                        <p className="font-medium">{data.student.disability}</p>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Matrícula:</p>
                        <p className="font-medium">{data.student.enrollment}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Carrera:</p>
                        <p className="font-medium">{data.student.career}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Grupo:</p>
                        <p className="font-medium">{data.student.semester}</p>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Teléfono(s):</p>
                        <p className="font-medium">{data.student.phone}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="w-1/2">No. SS:</p>
                        <p className="font-medium">{data.student.ss}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Correo electrónico:</p>
                    <p className="font-medium">{data.student.email}</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Adeudo de materia(s):</p>
                        <p className="font-medium">{data.student.haveToRetakeSubjects ? 'Sí' : 'No'}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Examen extraordinario:</p>
                        <p className="font-medium">{data.student.haveMakeUpExam ? 'Sí' : 'No'}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>1°:</p>
                        <p className="font-medium">{data.student.haveFirstMakeUpExam ? 'Sí' : 'No'}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>2°:</p>
                        <p className="font-medium">{data.student.haveSecondMakeUpExam ? 'Sí' : 'No'}</p>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Curso de Verano:</p>
                        <p className="font-medium">{data.student.haveSummerClass ? 'Sí' : 'No'}</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Nombre de la(s) materia(s):</p>
                        <p className="font-medium">{data.student.summerCourses}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Estado:</p>
                    <p className="font-medium">{data.student.state}</p>
                </div>


                <p className="text-center text-[40px]">PERIODO (Fecha de inicio y de terminación)</p>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Del:</p>
                    <p className="font-medium">{data.period.startDate} al {data.period.endDate}</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Horario:</p>
                        <p className="font-medium">{data.period.schedule}</p>
                    </div>

                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Total de horas por semana:</p>
                        <p className="font-medium">{data.period.totalHours}</p>
                    </div>
                </div>



                <p className="text-[42px] font-bold">II.- DATOS DE LA EMPRESA O INSTITUCIÓN</p>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Nacional:</p>
                        <p className="font-medium">{!data.isInternacional ? 'Sí' : ''}</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Extranjero:</p>
                        <p className="font-medium">{data.isInternacional ? 'Sí' : ''}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Sector:</p>
                    <p className="font-medium">{data.sector}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Giro de la empresa:</p>
                    <p className="font-medium">{data.industry}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Nombre de la empresa/institución:</p>
                    <p className="font-medium">{data.companyName}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Área donde realizará las estancias:</p>
                    <p className="font-medium">{data.workArea}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Nombre del proyecto:</p>
                    <p className="font-medium">{data.projectName}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Dirección Completa:</p>
                    <p className="font-medium">{data.address}</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[300px]">Teléfono(s):</p>
                        <p className="font-medium">{data.phone}</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Ext.:</p>
                        <p className="font-medium">{data.phoneExtension}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Email:</p>
                    <p className="font-medium">{data.email}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Página web:</p>
                    <p className="font-medium">{data.webPage}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Contacto:</p>
                    <p className="font-medium">{data.companyContact}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Nombre del titular de la empresa al que se le dirigirá el oficio:</p>
                    <p className="font-medium">{data.recipientName}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">Cargo de la persona:</p>
                    <p className="font-medium">{data.recipientPosition}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[300px]">En atención a (opcional):</p>
                    <p className="font-medium">{data.inAtentionOf}</p>
                </div>
            </div>

            <p className="text-[34px] mb-6">Bajo protesta de decir verdad, manifiesto que los datos asentados en el presente documento son ciertos.</p>

            <p className="mb-7">V°B° DE JEFATURA DE CARRERA:</p>

            <div className="grid grid-cols-2">
                <p>Firma del Solicitante (Alumno):</p>
                <p>Fecha de Solicitud: {data.applicationDate}</p>
            </div>
        </section>
    )

}