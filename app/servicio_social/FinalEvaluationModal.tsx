import { useSocialServiceStore } from "@app/_store/socialService"
import { usePDF } from "@app/_lib/hooks/usePDF"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from "@nextui-org/modal"
import dynamic from "next/dynamic"
import { FC } from "react"
import { useForm } from "react-hook-form"

const PDFWrapper = dynamic(() =>
  import("@app/_components/PDFWrapper").then((mod) => mod.PDFWrapper),
)
const FinalEvaluation = dynamic(() =>
  import("@app/_docs/social_service/FinalEvaluation").then(
    (mod) => mod.FinalEvaluation,
  ),
)

interface FinalEvaluationModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

const FinalEvaluationModal: FC<FinalEvaluationModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const {
    personalData,
    studentData,
    periodData,
    governmentAgencyData,
    setDocumentDownloaded,
    finalEvaluationDescription,
    setFinalEvaluationDescription,
  } = useSocialServiceStore()

  const socialServiceData = {
    person: personalData!,
    student: studentData!,
    period: periodData!,
    governmentAgency: governmentAgencyData!,
  }

  const { handleSubmit, register, watch } = useForm<{ description: string }>({
    defaultValues: { description: "" },
    values: { description: finalEvaluationDescription || "" },
  })

  const { target, createPDF } = usePDF("Reporte Final")

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Reporte de Evaluación Final</ModalHeader>

              <ModalBody>
                <form
                  id="report_form"
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit(async (data) => {
                    setFinalEvaluationDescription(data.description)
                    setDocumentDownloaded("final-evaluation", true)
                    await createPDF()
                    onClose()
                  })}
                >
                  <Textarea
                    minRows={4}
                    label="Breve descripción de las actividades realizadas"
                    isRequired
                    {...register("description")}
                  />
                </form>
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Cancelar
                </Button>

                <Button color="primary" form="report_form" type="submit">
                  Descargar
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <PDFWrapper target={target}>
        <FinalEvaluation
          person={socialServiceData.person}
          student={socialServiceData.student}
          period={socialServiceData.period}
          governmentAgency={socialServiceData.governmentAgency}
          formatNumber={socialServiceData.period.months + 1}
          description={watch("description")}
        />
      </PDFWrapper>
    </>
  )
}

export default FinalEvaluationModal
