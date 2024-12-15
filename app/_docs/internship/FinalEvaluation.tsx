/* eslint-disable @next/next/no-img-element */
import { formatSchedule, formatedDate } from "@app/_lib/format"
import logo from "@public/UTMEscudo.png"
import { FC } from "react"
import { Internship } from "@app/_lib/types/Iternship"

const evaluation: string[] = [
  "Disciplina",
  "Puntualidad",
  "Presentación",
  "Responsabilidad",
  "Desempeño",
  "Calidad en el trabajo desarrollado",
  "Nivel de conocimientos",
  "Iniciativa",
  "Eficiencia",
  "Lealtad y discreción",
]

interface FinalEvaluationProps {
  data: Omit<Internship, "applicationDate">
  description: string
}

const FinalEvaluation: FC<FinalEvaluationProps> = ({ data, description }) => {
  return (
    <section className="w-full h-full text-[13.5px]">
      <div className="relative px-6 h-[92px]">
        <img
          width={90}
          height={90}
          src={logo.src}
          alt="logo"
          className="inline-block align-top"
        />
        <div className="ml-12 inline-block align-top text-center mt-1 text-[20px]">
          <p className="leading-none">UNIVERSIDAD TECNOLÓGICA DE LA MIXTECA</p>
          <p className="font-semibold leading-none">ESTANCIA PROFESIONAL</p>
          <p className="mt-1">EVALUACIÓN FINAL</p>
        </div>
      </div>

      <div className="px-10">
        <p className="border-t border-black ml-32 text-right mb-1">
          Formato Único
        </p>

        <p className="mb-1 text-[13px]">EMPRESA / INSTITUCIÓN</p>
        <p className="mb-1 text-[13px]">
          Con la finalidad de atender cada vez con mayor calidad y eficiencia
          las Estancias profesionales de nuestros alumnos, así como para tener
          referentes que orienten nuestras acciones que respondan a las nuevas
          necesidades del sector productivo, solicitamos a usted requisitar el
          siguiente formato:
        </p>

        <div className="flex flex-col mb-2">
          <div className="flex gap-4">
            <p className="min-w-[160px]">Empresa o Institución:</p>
            <p className="font-semibold">{data.company.companyName}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Giro:</p>
            <p className="font-semibold">{data.company.industry}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Página Web:</p>
            <p className="font-semibold">{data.company.email}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Dirección:</p>
            <p className="font-semibold">{data.company.address}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Estado:</p>
            <p className="font-semibold">{data.company.state}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Jefe inmediato superior:</p>
            <p className="font-semibold">{data.company.recipientName}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Departamento:</p>
            <p className="font-semibold">{data.period.workArea}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Puesto:</p>
            <p className="font-semibold">{data.company.recipientPosition}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Teléfono y ext.:</p>
            <p className="font-semibold">{data.company.phone}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">e-mail:</p>
            <p className="font-semibold">{data.company.email}</p>
          </div>
        </div>

        <div className="flex flex-col mb-1">
          <div className="flex gap-4">
            <p className="min-w-[160px]">Nombre del Alumno:</p>
            <p className="font-semibold">{data.person.name}</p>
          </div>

          <div className="grid grid-cols-[60%_auto]">
            <div className="flex gap-4">
              <p className="min-w-[160px]">Carrera:</p>
              <p className="font-semibold">{data.student.career}</p>
            </div>

            <div className="flex gap-4">
              <p>Semestre:</p>
              <p className="font-semibold">{data.student.semester}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="max-w-[160px] leading-4">
              Periodo de estancia en el departamento de:
            </p>
            <p className="font-semibold">{data.period.workArea}</p>
          </div>

          <div className="flex gap-4">
            <p className="min-w-[160px]">Del:</p>
            <p className="font-semibold">
              {formatedDate(data.period.startDate)} al{" "}
              {formatedDate(data.period.endDate)}
            </p>
          </div>

          <div className="flex gap-8 justify-between pr-2">
            <div className="flex gap-4">
              <p className="min-w-[160px]">Horario:</p>
              <p className="font-semibold">
                {data.period.schedules.length === 1
                  ? formatSchedule(data.period.schedules[0])
                  : `${formatSchedule(data.period.schedules[0])} y ${formatSchedule(data.period.schedules[1])}`}
              </p>
            </div>

            <div className="flex gap-1">
              <p className="min-w-[160px]">Total de horas trabajadas:</p>
              <p className="font-semibold">{data.period.totalHours}</p>
            </div>
          </div>

          <div className="flex gap-4 items-center">
            <p className="min-w-[160px] leading-4">
              Descripción de funciones asignadas al alumno:
            </p>
            <p className="font-semibold leading-4">{description}</p>
          </div>
        </div>

        <div className="text-[13px]">
          <table className="w-full table-auto border-collapse border border-black">
            <thead>
              <tr>
                <th className="border border-black bg-gray-300" colSpan={6}>
                  Evaluación General del Alumno
                </th>
              </tr>
            </thead>

            <tbody>
              <tr className="text-center">
                <td className="border border-black"></td>
                <td className="border border-black w-20">Muy Bien</td>
                <td className="border border-black w-20">Bien</td>
                <td className="border border-black w-20">Regular</td>
                <td className="border border-black w-20">Mal</td>
                <td className="border border-black w-20">Pésimo</td>
              </tr>
              {evaluation.map((e) => (
                <tr key={`e_${e}`}>
                  <td className="border border-black">{e}</td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                  <td className="border border-black"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mb-1">
          <p>
            ¿Considera necesario reforzar y/o incorporar algunos temas en la
            carrera del alumno?
          </p>
          <div className="flex gap-1">
            <p>Sí</p>
            <p className="min-w-[40px] border-b border-black"></p>
            <p>No</p>
            <p className="min-w-[40px] border-b border-black"></p>
            <p>Especifique:</p>
            <p className="w-auto flex-grow border-b border-black"></p>
          </div>
        </div>

        <div className="flex gap-4 mb-8 flex-wrap">
          <p>Observaciones:</p>
          <p className="border-b border-black flex-grow w-auto"></p>
          <p className="border-b border-black flex-grow w-full"></p>
        </div>

        <div className="flex justify-around text-center">
          <p className="border-t-[1px] border-black min-w-[170px]">Fecha</p>
          <p className="border-t-[1px] border-black leading-4 min-w-[170px] pb-1">
            Firma y Sello
          </p>
        </div>
      </div>
    </section>
  )
}

export default FinalEvaluation
