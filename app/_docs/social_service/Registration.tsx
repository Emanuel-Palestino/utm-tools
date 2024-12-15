import { Header } from "@app/_docs/social_service/Header"
import { FC } from "react"
import { formatedDate } from "@app/_lib/format"
import { Person } from "@app/_lib/types/Common"
import {
  GovernmentAgency,
  SocialServicePeriod,
  SocialServiceStudent,
} from "@app/_lib/types/SocialService"

interface RegistrationProps {
  person: Person
  student: SocialServiceStudent
  period: SocialServicePeriod
  governmentAgency: GovernmentAgency
  date: number
}

export const Registration: FC<RegistrationProps> = ({
  person,
  student,
  period,
  governmentAgency,
  date,
}) => {
  const selectedOptionClass =
    "font-extrabold border-2 border-black rounded-lg p-1 w-[31px] text-center h-[31px] leading-[18px]"
  const unselectedOptionClass =
    "p-1 border-2 border-white text-gray-600 w-[31px] h-[31px] text-center leading-[18px]"

  return (
    <section className="w-full h-full text-[14px] flex flex-col justify-between">
      <div className="px-4">
        <Header title="Formato de solicitud para la presentación de Servicio Social" />

        <p className="text-right mt-2 pr-4">FECHA: {formatedDate(date)}</p>

        <div className="flex flex-col gap-2 mt-4">
          <div className="flex gap-2 items-center">
            <p className="w-[180px] font-semibold leading-4">
              Nombre del Alumno (A) / Egresado(A):
            </p>
            <p>{`${person.paternalSurname} ${person.maternalSurname} ${person.name}`}</p>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-2">
              <p className="w-[180px] font-semibold">Matrícula:</p>
              <p>{student.enrollment}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold">Carrera:</p>
              <p>{student.career}</p>
            </div>
          </div>

          <div className="flex gap-12">
            <div className="flex gap-2">
              <p className="w-[180px] font-semibold">Semestre:</p>
              <p>{student.semester}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold">% de Créditos Aprobados:</p>
              <p>{student.percentageOfApprovedCredits}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <p className="w-[180px] font-semibold">Email:</p>
            <p>{person.email}</p>
          </div>

          <div className="flex gap-2">
            <p className="w-[180px] font-semibold">Teléfono:</p>
            <p>{person.phone}</p>
          </div>

          <div className="flex gap-2">
            <p className="w-[180px] font-semibold">Domicilio:</p>
            <p>{student.address}</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="w-[180px] font-semibold leading-4">
              Hablande de lengua indígena:
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <p
                  className={
                    person.isSpeakerOfIndigenousLanguage
                      ? selectedOptionClass
                      : unselectedOptionClass
                  }
                >
                  Sí
                </p>
                <p
                  className={
                    !person.isSpeakerOfIndigenousLanguage
                      ? selectedOptionClass
                      : unselectedOptionClass
                  }
                >
                  No
                </p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">Nombre de la lengua indígena:</p>
                <p>
                  {person.isSpeakerOfIndigenousLanguage
                    ? person.indigenousLanguage
                    : ""}
                </p>
              </div>
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <p className="w-[180px] font-semibold leading-4">
              ¿Tienes algún tipo de discapacidad?
            </p>
            <div className="flex gap-4 items-center">
              <div className="flex gap-2">
                <p
                  className={
                    person.hasDisability
                      ? selectedOptionClass
                      : unselectedOptionClass
                  }
                >
                  Sí
                </p>
                <p
                  className={
                    !person.hasDisability
                      ? selectedOptionClass
                      : unselectedOptionClass
                  }
                >
                  No
                </p>
              </div>
              <div className="flex gap-2">
                <p className="font-semibold">
                  Nombre del tipo de discapacidad:
                </p>
                <p>{person.hasDisability ? person.disability : ""}</p>
              </div>
            </div>
          </div>

          <p className="text-center font-bold mt-4">
            DATOS DE LA INSTITUCIÓN DONDE SE REALIZARÁ EL SERVICIO SOCIAL
          </p>

          <div className="flex gap-2">
            <p className="w-[180px] font-semibold">
              Institución y/o dependencia
            </p>
            <p>{governmentAgency.name}</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="min-w-[180px] font-semibold leading-4">
              Nombre del Programa o Proyecto
            </p>
            <p className="leading-4">{period.projectName}</p>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-2">
              <p className="w-[180px] font-semibold">Responsable Inmediato:</p>
              <p>{governmentAgency.supervisorName}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold">Email:</p>
              <p>{governmentAgency.supervisorEmail}</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-2">
              <p className="w-[180px] font-semibold">Cargo que ocupa:</p>
              <p>{governmentAgency.supervisorPosition}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold">Area:</p>
              <p>{governmentAgency.supervisorWorkArea}</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-2">
              <p className="w-[180px] font-semibold">Domicilio Laboral:</p>
              <p>{governmentAgency.address}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold">Estado:</p>
              <p>{governmentAgency.state}</p>
            </div>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-2">
              <p className="w-[180px] font-semibold">Ciudad o localidad:</p>
              <p>{governmentAgency.city}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold">Tel. Laboral:</p>
              <p>{governmentAgency.supervisorPhone}</p>
            </div>
          </div>

          <div className="flex gap-2">
            <p className="w-[180px] font-semibold leading-4">
              Dirección de correo electrónico:
            </p>
            <p>{governmentAgency.email}</p>
          </div>

          <div className="flex gap-8">
            <div className="flex gap-2">
              <p className="w-[180px] font-semibold">Fecha de Inicio:</p>
              <p>{formatedDate(period.startDate)}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold">Fecha de Termino:</p>
              <p>{formatedDate(period.endDate)}</p>
            </div>
          </div>

          <div className="flex gap-12">
            <div className="flex gap-2">
              <p className="w-[180px] font-semibold">Duración (meses):</p>
              <p>{period.months}</p>
            </div>

            <div className="flex gap-2">
              <p className="font-semibold">Total de Horas:</p>
              <p>{period.totalHours}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-6 items-end text-center">
        <div>
          <p className="mb-14">V°B°</p>
          <p className="border-t border-black">
            Vice-Rectoría Académica Firma, fecha y sello
          </p>
        </div>

        <p className="border-t border-black">
          Jefe(a) de carrera <br /> Firma y nombre
        </p>
        <p className="border-t border-black">
          Responsable inmediato Firma, fecha y sello
        </p>
        <p className="border-t border-black">
          Firma del Alumno <br /> &nbsp;{" "}
        </p>
      </div>
    </section>
  )
}
