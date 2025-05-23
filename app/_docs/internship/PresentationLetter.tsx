/* eslint-disable @next/next/no-img-element */
"use client"

import { FC } from "react"
import logo from "@public/UTMEscudo.png"
import { formatSchedule, formatedDate } from "@app/_lib/format"
import { Internship } from "@app/_lib/types/Iternship"

interface PresentationLetterProps {
  data: Internship
}

const PresentationLetter: FC<PresentationLetterProps> = ({ data }) => {
  return (
    <section className="w-full text-[15px]">
      <div id="header" className="mb-2 px-6">
        <img
          width={90}
          height={90}
          src={logo.src}
          alt="logo"
          className="inline-block w-[90px] h-[90px] align-top"
        />
        <div className="inline-block text-[17px] align-top ml-10">
          <p className="font-bold text-[20px]">
            UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA
          </p>
          <p>SOLICITUD DE ESTANCIAS PROFESIONALES</p>
          <p>DATOS PARA LA ELABORACIÓN DE LA CARTA DE PRESENTACIÓN</p>
        </div>
      </div>

      <div
        id="content"
        className="px-2 flex flex-col gap-[5px] flex-wrap border-solid border-black border-[1px]"
      >
        <p className="text-[16px] font-bold">I.- DATOS DEL ALUMNO</p>

        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">Nombre completo:</p>
            <p className="font-medium">{data.person.name}</p>
          </div>
          <div className="flex gap-4">
            <p>Hablante de Lengua Indígena:</p>
            <p className="font-medium">
              {data.person.isSpeakerOfIndigenousLanguage ? "Sí" : "No"}
            </p>
          </div>
        </div>

        <div className="flex justify-between">
          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">
              ¿Tienes algún tipo de discapacidad?
            </p>
            <p className="font-medium">
              {data.person.hasDisability ? "Sí" : "No"}
            </p>
          </div>
          <div className="flex gap-4">
            <p>Menciona el tipo de discapacidad:</p>
            <p className="font-medium">
              {data.person.hasDisability ? data.person.disability : null}
            </p>
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
            <p className="font-medium">{data.student.group}</p>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">Teléfono(s):</p>
            <p className="font-medium">{data.person.phone}</p>
          </div>
          <div className="flex gap-4">
            <p className="w-1/2">No. SS:</p>
            <p className="font-medium">{data.student.ss}</p>
          </div>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Correo electrónico:</p>
          <p className="font-medium">{data.person.email}</p>
        </div>

        <div className="flex gap-16">
          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">Adeudo de materia(s):</p>
            <p className="font-medium">
              {data.student.haveToRetakeSubjects ? "Sí" : "No"}
            </p>
          </div>
          <div className="flex gap-4">
            <p>Examen extraordinario:</p>
            <p className="font-medium">
              {data.student.haveMakeUpExam ? "Sí" : "No"}
            </p>
          </div>
          <div className="flex gap-4">
            <p>1°:</p>
            <p className="font-medium">
              {data.student.haveFirstMakeUpExam ? "Sí" : "No"}
            </p>
          </div>
          <div className="flex gap-4">
            <p>2°:</p>
            <p className="font-medium">
              {data.student.haveSecondMakeUpExam ? "Sí" : "No"}
            </p>
          </div>
        </div>

        <div className="flex gap-16">
          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">Curso de Verano:</p>
            <p className="font-medium">
              {data.student.haveSummerClass ? "Sí" : "No"}
            </p>
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

        <p className="text-center text-[17px] font-bold">
          PERIODO (Fecha de inicio y de terminación)
        </p>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Del:</p>
          <p className="font-medium">
            {formatedDate(data.period.startDate)}{" "}
            <span className="inline-block w-28 text-center ">al</span>{" "}
            {formatedDate(data.period.endDate)}
          </p>
        </div>

        <div className="flex gap-8 justify-between pr-3">
          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">Horario:</p>
            <p className="font-medium">
              {data.period.schedules.length === 1
                ? formatSchedule(data.period.schedules[0])
                : `${formatSchedule(data.period.schedules[0])} y ${formatSchedule(data.period.schedules[1])}`}
            </p>
          </div>

          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">
              Total de horas por semana:
            </p>
            <p className="font-medium">{data.period.totalHours}</p>
          </div>
        </div>

        <p className="text-[16px] font-bold">
          II.- DATOS DE LA EMPRESA O INSTITUCIÓN
        </p>

        <div className="flex gap-16">
          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">Nacional:</p>
            <p className="font-medium">
              {!data.company.isInternacional ? "Sí" : ""}
            </p>
          </div>

          <div className="flex gap-4">
            <p>Extranjero:</p>
            <p className="font-medium">
              {data.company.isInternacional ? "Sí" : ""}
            </p>
          </div>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Sector:</p>
          <p className="font-medium">{data.company.sector}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Giro de la empresa:</p>
          <p className="font-medium">{data.company.industry}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">
            Nombre de la empresa/institución:
          </p>
          <p className="font-medium">{data.company.companyName}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">
            Área donde realizará las estancias:
          </p>
          <p className="font-medium">{data.period.workArea}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Nombre del proyecto:</p>
          <p className="font-medium">{data.period.projectName}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Dirección Completa:</p>
          <p className="font-medium">{data.company.address}</p>
        </div>

        <div className="flex gap-16">
          <div className="flex gap-4">
            <p className="text-right min-w-[130px]">Teléfono(s):</p>
            <p className="font-medium">{data.company.phone}</p>
          </div>

          <div className="flex gap-4">
            <p>Ext.:</p>
          </div>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Email:</p>
          <p className="font-medium">{data.company.email}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Página web:</p>
          <p className="font-medium">{data.company.webPage}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Contacto:</p>
          <p className="font-medium">{data.company.companyContact}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">
            Nombre del titular de la empresa al que se le dirigirá el oficio:
          </p>
          <p className="font-medium">{data.company.recipientName}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">Cargo de la persona:</p>
          <p className="font-medium">{data.company.recipientPosition}</p>
        </div>

        <div className="flex gap-4">
          <p className="text-right min-w-[130px]">En atención a (opcional):</p>
          <p className="font-medium">{data.company.inAtentionOf}</p>
        </div>
      </div>

      <p className="text-[14px] mb-6">
        Bajo protesta de decir verdad, manifiesto que los datos asentados en el
        presente documento son ciertos.
      </p>

      <p className="mb-8">
        V°B° DE JEFATURA DE CARRERA: ___________________________
      </p>

      <div className="flex gap-x-8">
        <p>Firma del Solicitante (Alumno): _____________________________</p>
        <p>Fecha de Solicitud: {formatedDate(data.applicationDate)}</p>
      </div>
    </section>
  )
}

export default PresentationLetter
