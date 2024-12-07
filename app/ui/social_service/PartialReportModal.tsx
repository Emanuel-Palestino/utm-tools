import { DownloadIcon } from "@/app/icons"
import { useSocialServiceStore } from "@/app/store/socialService"
import { usePDF } from "@/src/hooks/usePDF"
import { PartialReport } from "@/src/models/PartialReport"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal"
import { Select, SelectItem } from "@nextui-org/select"
import { addMonths, differenceInBusinessDays } from "date-fns"
import dynamic from "next/dynamic"
import { FC, useEffect } from "react"
import { Controller, useForm } from "react-hook-form"

const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))
const PartialReportPDF = dynamic(() => import('@/app/printingFormats/social_service/PartialReport'))


interface PartialReportModalProps {
	isOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}

const PartialReportModal: FC<PartialReportModalProps> = ({ isOpen, onOpenChange }) => {

	/* Social Service data in local storage */
	const { socialServiceData, reports, addReport, documentsDownloaded, setReportDownloaded } = useSocialServiceStore(state => ({
		socialServiceData: {
			person: state.personalData!,
			student: state.studentData!,
			period: state.periodData!,
			governmentAgency: state.governmentAgencyData!,
		},
		reports: state.reports,
		addReport: (number: number, data: PartialReport) => state.setReport(`partial-report-${number}`, data),
		documentsDownloaded: state.documentsDownloaded,
		setReportDownloaded: (number: number) => state.setDocumentDownloaded(`partial-report-${number}`, true)
	}))

	const {
		handleSubmit,
		register,
		control,
		setValue,
		watch
	} = useForm<PartialReport>({
		defaultValues: {
			formatNumber: 1,
			startDate: Date.now(),
			endDate: Date.now(),
			hours: 0,
			description: ''
		},
	})

	let formatNumber = watch('formatNumber')

	useEffect(() => {
		setValue('description', reports[`partial-report-${formatNumber}`]?.description || '', { shouldDirty: false, shouldTouch: false, shouldValidate: false })
	}, [formatNumber, setValue, reports])

	const { target, createPDF } = usePDF('Reporte Parcial de Actividades')

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Reporte Parcial</ModalHeader>

							<ModalBody>
								<form
									id="report_form"
									className="flex flex-col gap-4"
									onSubmit={handleSubmit(async data => {
										data.startDate = addMonths(socialServiceData.period.startDate, formatNumber - 1).getTime()
										data.endDate = addMonths(socialServiceData.period.startDate, formatNumber).getTime()

										const hoursPerDay = socialServiceData.period.schedules.reduce((acc, [start, end]) => acc + (end - start), 0)
										data.hours = differenceInBusinessDays(data.endDate, data.startDate) * hoursPerDay

										// Save report info
										addReport(data.formatNumber, data)
										setReportDownloaded(data.formatNumber)

										// Create report
										await createPDF()
										onClose()
									})}
								>
									<Select
										label="Número de reporte"
										autoFocus
										{...register('formatNumber', { required: true })}
										isRequired
									>
										{Array.from({ length: socialServiceData.period.months }).map((_, i) => (
											<SelectItem
												key={i + 1}
												value={i + 1}
												endContent={
													documentsDownloaded[`partial-report-${i + 1}`] ?
														<span className="fill-green-600 font-bold absolute right-3 pr-4">
															<DownloadIcon />
														</span>
														: <></>
												}
											>
												{`${i + 1}° Reporte`}
											</SelectItem>
										))}
									</Select>

									<Controller
										name="description"
										control={control}
										render={({ field }) => (
											<Textarea
												minRows={8}
												label="Descripción de actividades"
												isRequired
												description="Usa saltos de línea para separar las actividades."
												{...field}
											/>
										)}
									/>
								</form>
							</ModalBody>

							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Cancelar
								</Button>

								<Button
									color="primary"
									form="report_form"
									type="submit"
								>
									Descargar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal >

			{reports[`partial-report-${formatNumber}`] && (
				<PDFWrapper target={target}>
					<PartialReportPDF
						person={socialServiceData.person}
						student={socialServiceData.student}
						governmentAgency={socialServiceData.governmentAgency}
						period={socialServiceData.period}
						formatNumber={formatNumber}
						activity={reports[`partial-report-${formatNumber}`]}
						description={reports[`partial-report-${formatNumber}`].description}
					/>
				</PDFWrapper>
			)}
		</>
	)
}

export default PartialReportModal