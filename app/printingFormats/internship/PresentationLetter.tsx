'use client'

import { FC } from 'react'
import { Internship } from '@/src/models/Internship'
import logo from '@/public/UTMEscudo.png'
import Image from 'next/image'


interface PresentationLetterProps {
    data: Internship
}

export const PresentationLetter: FC<PresentationLetterProps> = ({ data }) => {

    return (
        <section className="w-full text-[15px]">
            <div id="header" className="mb-2 px-6">
                <Image
                    width={90}
                    height={90}
                    src={logo}
                    alt="logo"
                    className="inline-block w-[90px] h-[90px] align-top"
                />
                <div className="inline-block text-[17px] align-top ml-10">
                    <p className="font-bold text-[20px]">UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA</p>
                    <p>SOLICITUD DE ESTANCIAS PROFESIONALES</p>
                    <p>DATOS PARA LA ELABORACIÓN DE LA CARTA DE PRESENTACIÓN</p>
                </div>
            </div>

            <div id="content" className="p-2 pt-0 flex flex-col gap-[6px] flex-wrap border-solid border-black border-[1px]">
                <p className="text-[16px] font-bold">I.- DATOS DEL ALUMNO</p>

                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[130px]">Nombre completo:</p>
                        <p className="font-medium">{data.student.name}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Hablante de Lengua Indígena:</p>
                        <p className="font-medium">{data.student.isSpeakerOfIndigenousLanguage ? 'Sí' : 'No'}</p>
                    </div>
                </div>

                <div className="flex justify-between">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[130px]">¿Tienes algún tipo de discapacidad?</p>
                        <p className="font-medium">{data.student.hasDisability ? 'Sí' : 'No'}</p>
                    </div>
                    <div className="flex gap-4">
                        <p>Menciona el tipo de discapacidad:</p>
                        <p className="font-medium">{data.student.disability}</p>
                    </div>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[130px]">Matrícula:</p>
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
                        <p className="text-right min-w-[130px]">Teléfono(s):</p>
                        <p className="font-medium">{data.student.phone}</p>
                    </div>
                    <div className="flex gap-4">
                        <p className="w-1/2">No. SS:</p>
                        <p className="font-medium">{data.student.ss}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Correo electrónico:</p>
                    <p className="font-medium">{data.student.email}</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[130px]">Adeudo de materia(s):</p>
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
                        <p className="text-right min-w-[130px]">Curso de Verano:</p>
                        <p className="font-medium">{data.student.haveSummerClass ? 'Sí' : 'No'}</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Nombre de la(s) materia(s):</p>
                        <p className="font-medium">{data.student.summerCourses}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Estado:</p>
                    <p className="font-medium">{data.student.state}</p>
                </div>


                <p className="text-center">PERIODO (Fecha de inicio y de terminación)</p>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Del:</p>
                    <p className="font-medium">{data.period.startDate} al {data.period.endDate}</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[130px]">Horario:</p>
                        <p className="font-medium">{data.period.schedule}</p>
                    </div>

                    <div className="flex gap-4">
                        <p className="text-right min-w-[130px]">Total de horas por semana:</p>
                        <p className="font-medium">{data.period.totalHours}</p>
                    </div>
                </div>



                <p className="text-[16px] font-bold">II.- DATOS DE LA EMPRESA O INSTITUCIÓN</p>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[130px]">Nacional:</p>
                        <p className="font-medium">{!data.isInternacional ? 'Sí' : ''}</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Extranjero:</p>
                        <p className="font-medium">{data.isInternacional ? 'Sí' : ''}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Sector:</p>
                    <p className="font-medium">{data.sector}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Giro de la empresa:</p>
                    <p className="font-medium">{data.industry}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Nombre de la empresa/institución:</p>
                    <p className="font-medium">{data.companyName}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Área donde realizará las estancias:</p>
                    <p className="font-medium">{data.workArea}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Nombre del proyecto:</p>
                    <p className="font-medium">{data.projectName}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Dirección Completa:</p>
                    <p className="font-medium">{data.address}</p>
                </div>

                <div className="flex gap-16">
                    <div className="flex gap-4">
                        <p className="text-right min-w-[130px]">Teléfono(s):</p>
                        <p className="font-medium">{data.phone}</p>
                    </div>

                    <div className="flex gap-4">
                        <p>Ext.:</p>
                        <p className="font-medium">{data.phoneExtension}</p>
                    </div>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Email:</p>
                    <p className="font-medium">{data.email}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Página web:</p>
                    <p className="font-medium">{data.webPage}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Contacto:</p>
                    <p className="font-medium">{data.companyContact}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Nombre del titular de la empresa al que se le dirigirá el oficio:</p>
                    <p className="font-medium">{data.recipientName}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">Cargo de la persona:</p>
                    <p className="font-medium">{data.recipientPosition}</p>
                </div>

                <div className="flex gap-4">
                    <p className="text-right min-w-[130px]">En atención a (opcional):</p>
                    <p className="font-medium">{data.inAtentionOf}</p>
                </div>
            </div>

            <p className="text-[12px] mb-4">Bajo protesta de decir verdad, manifiesto que los datos asentados en el presente documento son ciertos.</p>

            <p className="mb-6">V°B° DE JEFATURA DE CARRERA:</p>

            <div className="grid grid-cols-2">
                <p>Firma del Solicitante (Alumno):</p>
                <p>Fecha de Solicitud: {data.applicationDate}</p>
            </div>
        </section>
    )

}