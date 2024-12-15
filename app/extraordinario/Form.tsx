"use client"

import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Radio, RadioGroup } from "@nextui-org/radio"
import { Button } from "@nextui-org/button"
import { Select, SelectItem } from "@nextui-org/select"
import { Controller, useForm } from "react-hook-form"
import { PDFWrapper } from "@app/_components/PDFWrapper"
import { Format } from "@app/_docs/makeup_exam/Format"
import { usePDF } from "@app/_lib/hooks/usePDF"
import { useState } from "react"
import { MakeUpExam } from "@app/_lib/types/MakeUpExam"

export const Form = () => {
  const { target, createPDF } = usePDF("Solicitud de Examen Extraordinario")
  const [data, setData] = useState<MakeUpExam>()

  const updateData = async (data: MakeUpExam) => setData(data)

  const { handleSubmit, control } = useForm<MakeUpExam>({
    defaultValues: {
      name: "",
      paternalSurname: "",
      maternalSurname: "",
      enrollment: "",
      group: "",
      percentageOfScholarship: 100,
      makeupExamCourses: "",
      semester: "Primero",
      makeUpExamNumber: 1,
      courses: 0,
    },
  })

  const onSubmit = handleSubmit(async (data) => {
    data.makeUpExamNumber = Number(data.makeUpExamNumber)
    data.courses = Number(data.courses)
    await updateData(data)

    createPDF()
  })

  return (
    <>
      <Card>
        <CardBody>
          <form
            onSubmit={onSubmit}
            className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 md:gap-4 p-1"
          >
            <h3 className="md:col-span-2 xl:col-span-3 text-xl">
              Datos Escolares
            </h3>

            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input type="text" {...field} label="Nombre(s)" isRequired />
              )}
            />

            <Controller
              name="paternalSurname"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  {...field}
                  label="Apellido Paterno"
                  isRequired
                />
              )}
            />

            <Controller
              name="maternalSurname"
              control={control}
              render={({ field }) => (
                <Input
                  type="text"
                  {...field}
                  label="Apellido Materno"
                  isRequired
                />
              )}
            />

            <Controller
              name="enrollment"
              control={control}
              render={({ field }) => (
                <Input type="text" label="Matrícula" isRequired {...field} />
              )}
            />

            <Controller
              name="group"
              control={control}
              render={({ field }) => (
                <Input type="text" label="Grupo Actual" isRequired {...field} />
              )}
            />

            <Controller
              name="percentageOfScholarship"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  label="Porcentaje de beca"
                  isRequired
                  {...field}
                  value={String(field.value)}
                />
              )}
            />

            <h3 className="md:col-span-2 xl:col-span-3 text-xl">Solicitud</h3>
            <Controller
              name="makeupExamCourses"
              control={control}
              render={({ field }) => (
                <Input type="text" label="Materias" isRequired {...field} />
              )}
            />

            <Controller
              name="semester"
              control={control}
              render={({ field }) => (
                <Select
                  label="Semestre de la(s) materia(s)"
                  isRequired
                  {...field}
                  selectedKeys={[field.value]}
                >
                  <SelectItem key="Primero" value="Primero">
                    Primero
                  </SelectItem>
                  <SelectItem key="Segundo" value="Segundo">
                    Segundo
                  </SelectItem>
                  <SelectItem key="Tercero" value="Tercero">
                    Tercero
                  </SelectItem>
                  <SelectItem key="Cuarto" value="Cuarto">
                    Cuarto
                  </SelectItem>
                  <SelectItem key="Quinto" value="Quinto">
                    Quinto
                  </SelectItem>
                  <SelectItem key="Sexto" value="Sexto">
                    Sexto
                  </SelectItem>
                  <SelectItem key="Séptimo" value="Séptimo">
                    Séptimo
                  </SelectItem>
                  <SelectItem key="Octavo" value="Octavo">
                    Octavo
                  </SelectItem>
                  <SelectItem key="Noveno" value="Noveno">
                    Noveno
                  </SelectItem>
                  <SelectItem key="Décimo" value="Décimo">
                    Décimo
                  </SelectItem>
                </Select>
              )}
            />

            <Controller
              name="makeUpExamNumber"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  label="Solicitud para:"
                  orientation="horizontal"
                  {...field}
                  value={String(field.value)}
                >
                  <Radio value="1">Primer Extraordinario</Radio>
                  <Radio value="2">Segundo Extraordinario</Radio>
                </RadioGroup>
              )}
            />

            <Controller
              name="courses"
              control={control}
              render={({ field }) => (
                <Input
                  type="number"
                  label="Número de materias cursadas y/o recursadas"
                  isRequired
                  {...field}
                  value={String(field.value)}
                />
              )}
            />

            <div className="flex justify-center mt-2 md:col-span-2 xl:col-span-3">
              <Button className="w-36" color="primary" type="submit">
                Descargar Solicitud
              </Button>
            </div>
          </form>
        </CardBody>
      </Card>

      {data ? (
        <PDFWrapper target={target}>
          <Format data={data} date={Date.now()} />
        </PDFWrapper>
      ) : null}
    </>
  )
}
