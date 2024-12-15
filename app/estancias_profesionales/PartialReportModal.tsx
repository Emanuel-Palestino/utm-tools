import { useInternshipStore } from "@app/_store/internship"
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@nextui-org/modal"
import { Select, SelectItem } from "@nextui-org/select"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input"
import {
  addDays,
  differenceInCalendarWeeks,
  eachWeekOfInterval,
} from "date-fns"
import { FC, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"
import dynamic from "next/dynamic"
import { usePDF } from "@app/_lib/hooks/usePDF"
import { PartialReport } from "@app/_lib/types/Common"
import { DownloadIcon } from "@app/_components/icons/DownloadIcon"

const WeeklyReport = dynamic(() => import("@app/_docs/internship/WeeklyReport"))
const PDFWrapper = dynamic(() =>
  import("@app/_components/PDFWrapper").then((mod) => mod.PDFWrapper),
)

interface PartialReportModalProps {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
}

const PartialReportModal: FC<PartialReportModalProps> = ({
  isOpen,
  onOpenChange,
}) => {
  const {
    periodData,
    companyData,
    personalData,
    studentData,
    reports,
    addReport,
    documentsDownloaded,
    setDocumentDownloaded,
  } = useInternshipStore()

  const internshipData = {
    period: periodData!,
    company: companyData!,
    person: personalData!,
    student: studentData!,
  }

  const { handleSubmit, control, setValue, watch } = useForm<PartialReport>({
    defaultValues: {
      formatNumber: 1,
      startDate: Date.now(),
      endDate: Date.now(),
      hours: 0,
      description: "",
      comments: "",
    },
  })

  const format = watch("formatNumber")

  useEffect(() => {
    setValue(
      "description",
      reports[`weekly-report-${format}`]?.description || "",
      { shouldDirty: false, shouldTouch: false, shouldValidate: false },
    )
    setValue("comments", reports[`weekly-report-${format}`]?.comments || "")
  }, [format, setValue, reports])

  const { target: weeklyReportTarget, createPDF: createWeeklyReport } =
    usePDF("Reporte Semanal")

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader>Reporte Parcial</ModalHeader>

              <ModalBody>
                <form
                  id="report_form"
                  className="flex flex-col gap-4"
                  onSubmit={handleSubmit(async (data) => {
                    // Get all the weeks of the full internship period
                    const periodWeeks = eachWeekOfInterval(
                      {
                        start: internshipData.period.startDate,
                        end: internshipData.period.endDate,
                      },
                      { weekStartsOn: 1 },
                    )

                    // Get the weeks of the specific report
                    const reportWeeks = periodWeeks.slice(
                      (Number(data.formatNumber) - 1) *
                        internshipData.period.reportFrecuency,
                      Number(data.formatNumber) *
                        internshipData.period.reportFrecuency,
                    )

                    // Save the dates
                    data.startDate = reportWeeks[0].getTime()
                    data.endDate = addDays(
                      reportWeeks[reportWeeks.length - 1],
                      4,
                    ).getTime()

                    // Calculate the partial period hours
                    data.hours =
                      (internshipData.period.totalHours / periodWeeks.length) *
                      internshipData.period.reportFrecuency

                    // Save report info
                    addReport(`weekly-report-${data.formatNumber}`, data)
                    setDocumentDownloaded(
                      `weekly-report-${data.formatNumber}`,
                      true,
                    )

                    // Create report
                    await createWeeklyReport()
                    onClose()
                  })}
                >
                  <Controller
                    name="formatNumber"
                    control={control}
                    render={({ field }) => (
                      <Select
                        label="Número de reporte"
                        isRequired
                        autoFocus
                        {...field}
                        selectedKeys={field.value ? [String(field.value)] : []}
                      >
                        {Array.from({
                          length: Math.ceil(
                            (differenceInCalendarWeeks(
                              internshipData.period.endDate,
                              internshipData.period.startDate,
                            ) +
                              1) /
                              internshipData.period.reportFrecuency,
                          ),
                        }).map((_, i) => (
                          <SelectItem
                            key={i + 1}
                            value={i + 1}
                            endContent={
                              documentsDownloaded[`weekly-report-${i + 1}`] ? (
                                <span className="fill-green-600 font-bold absolute right-3 pr-4">
                                  <DownloadIcon />
                                </span>
                              ) : (
                                <></>
                              )
                            }
                          >
                            {`${i + 1}° Reporte`}
                          </SelectItem>
                        ))}
                      </Select>
                    )}
                  />

                  <Controller
                    name="description"
                    control={control}
                    render={({ field }) => (
                      <Textarea
                        minRows={8}
                        label="Descripción de actividades"
                        isRequired
                        {...field}
                      />
                    )}
                  />

                  <Controller
                    name="comments"
                    control={control}
                    render={({ field }) => (
                      <Textarea label="Comentarios" {...field} />
                    )}
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

      {reports[`weekly-report-${watch("formatNumber")}`] && (
        <PDFWrapper target={weeklyReportTarget}>
          <WeeklyReport
            data={internshipData}
            partialReport={reports[`weekly-report-${watch("formatNumber")}`]}
          />
        </PDFWrapper>
      )}
    </>
  )
}

export default PartialReportModal
