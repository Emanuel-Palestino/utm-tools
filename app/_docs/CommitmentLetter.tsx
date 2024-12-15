import { FC } from "react"
import { formatedDate } from "@app/_lib/format"
import { Internship } from "@app/_lib/types/Iternship"

interface CommitmentLetterProps {
  data: Internship
  date: string
}

const CommitmentLetter: FC<CommitmentLetterProps> = ({ data, date }) => {
  return (
    <section className="w-full h-full text-[15px] px-16">
      <div className="pt-10">
        <p className="font-bold text-center text-[18px]">CARTA COMPROMISO</p>
        <p className="text-right mt-5">Huajuapan de León, Oax. a {date}.</p>
      </div>

      <div className="mt-8">
        <strong className="leading-5">
          <p>COORDINACIÓN DE VINCULACIÓN</p>
          <p>DE ALUMNOS Y EGRESADOS</p>
          <p>PRESENTE:</p>
        </strong>
      </div>

      <div className="mt-4">
        <p className="text-justify">
          Quien suscribe, <strong>C. {data.person.name}</strong>, estudiante de
          la carrera de <strong>{data.student.career}</strong> con número de
          matrícula <strong>{data.student.enrollment}</strong>, por medio de la
          presente{" "}
          <strong>
            manifiesto mi compromiso y responsabilidad de cumplir con las
            disposiciones, políticas y reglamentos internos establecidos por la
            empresa
            {" " + data.company.companyName}
          </strong>
          , durante el periodo de realización de la estancia profesional y/o
          servicio social que comprende del
          <strong> {formatedDate(data.period.startDate)}</strong> al{" "}
          <strong>{formatedDate(data.period.endDate)}</strong>.
        </p>
      </div>

      <div className="mt-4 text-justify">
        <p className="mb-1">
          Al firmar la presente carta el alumno conviene a:
        </p>
        <p>
          a)&emsp;&emsp;Tratar y mantener confidencialmente toda la información
          recibida por parte de la empresa, de no revelar ningún dato de la
          información a ninguna otra parte, sin el consentimiento previo por
          escrito de la autoridad competente de la empresa.
        </p>
        <p>
          b)&emsp;&emsp;Se compromete una vez que inicia sus actividades de
          estancias profesionales y/o servicio social a cumplir con apego la
          normativa interna que señale la empresa.
        </p>
        <p>
          c)&emsp;&emsp;Entregar a la L.C.E. María Luisa Barragán Ramírez en
          tiempos establecidos la entrega de la documentación que avale el
          desarrollo de las estancias profesionales y/o servicio social, de
          acuerdo como lo establece el Reglamento de Alumnos de Licenciatura.
        </p>
        <p>
          d)&emsp;&emsp;El alumno no podrá interpretar como constitutivo
          cualquier tipo de asociación o vínculo de carácter laboral con la
          empresa, por lo cual es sin responsabilidad para la empresa y la
          Universidad.
        </p>
        <p className="mt-1">
          En caso de ocurrir lo contrario me sujetaré a las sanciones que
          determinen las autoridades universitarias.
        </p>
        <p>Sin otro en particular, con respeto me despido.</p>
      </div>

      <p className="mt-10 text-center text-[16px] tracking-widest">
        Atentamente
      </p>

      <div className="mt-4">
        <div className="flex justify-around mb-12">
          <div></div>
          <p className="text-center">V° B°</p>
        </div>
        <div className="flex justify-around">
          <p className="border-t border-black min-w-[200px] text-center">
            Firma del Alumno
          </p>
          <p className="border-t border-black min-w-[200px] text-center leading-4">
            Jefe (a) de carrera
            <br />
            Firma y nombre
          </p>
        </div>
      </div>

      <p className="mt-12">C.c.p. Expediente del alumno.</p>
    </section>
  )
}

export default CommitmentLetter
