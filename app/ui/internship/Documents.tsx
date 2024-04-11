'use client'

import { usePDF } from "@/src/hooks/usePDF"
import { useInternshipStore } from "@/app/store/internship"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input"
import { Select, SelectItem } from "@nextui-org/select"
import { formatedDate } from "@/app/utils/format"
import { useForm } from "react-hook-form"
import { addDays, differenceInCalendarWeeks, eachWeekOfInterval } from "date-fns"
import { DownloadIcon, DocumentIcon } from "@/app/icons"
import dynamic from "next/dynamic"

const PresentationLetter = dynamic(() => import('@/app/printingFormats/internship/PresentationLetter').then(mod => mod.PresentationLetter))
const WeeklyReport = dynamic(() => import('@/app/printingFormats/internship/WeeklyReport').then(mod => mod.WeeklyReport))
const FinalEvaluation = dynamic(() => import('@/app/printingFormats/internship/FinalEvaluation').then(mod => mod.FinalEvaluation))
const CommitmentLetter = dynamic(() => import('@/app/printingFormats/CommitmentLetter').then(mod => mod.CommitmentLetter))
const FinalReport = dynamic(() => import('@/app/printingFormats/internship/FinalReport').then(mod => mod.FinalReport))
const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))


export const Documents = () => {

	const { dataComplete, internshipData, documentsDownloaded, setDocumentDownloaded } = useInternshipStore(state => ({
		dataComplete: state.isCompanyDataComplete && state.isPeriodDataComplete && state.isPersonalDataComplete && state.isStudentDataComplete,
		internshipData: {
			applicationDate: new Date(),
			person: state.personalData!,
			student: state.studentData!,
			period: state.periodData!,
			company: state.companyData!
		},
		documentsDownloaded: state.documentsDownloaded,
		setDocumentDownloaded: (key: string) => state.setDocumentDownloaded(key, true)
	}))


	const { target: intershipTarget, createPDF: createIntership } = usePDF('Solicitud de Prácticas Profesionales')
	const { target: weeklyReportTarget, createPDF: createWeeklyReport } = usePDF('Reporte Semanal')
	const { target: finalEvaluationTarget, createPDF: createFinalEvaluation } = usePDF('Reporte de Evaluación Final')
	const { target: commitmentLetterTarget, createPDF: createCommitmentLetter } = usePDF('Carta Compromiso')
	const { target: finalReportTarget, createPDF: createFinalReport } = usePDF('Reporte Final')

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const {
		isOpen: isFinalReportOpen,
		onOpen: onFinalReportOpen,
		onOpenChange: onFinalReportOpenChange
	} = useDisclosure()

	const {
		handleSubmit,
		register,
		watch,
		setValue
	} = useForm<{ formatNumber: number, period: string, totalHours: number, description: string, comments: string }>({
		defaultValues: {
			formatNumber: 1,
			period: '0000-00-00 - 0000-00-00',
			totalHours: 40,
			description: '',
			comments: ''
		}
	})

	const updatePeriod = async (p: string) => setValue('period', p)

	const updatePeriodHours = async (h: number) => setValue('totalHours', h)

	const documents = [
		{
			name: 'Solicitud',
			action: createIntership,
			stateKey: 'presentation-letter'
		},
		{
			name: 'Carta Compromiso',
			action: createCommitmentLetter,
			stateKey: 'commitment-letter'
		},
		{
			name: 'Reportes Parciales',
			action: onOpen,
			stateKey: 'none'
		},
		{
			name: 'Reporte Final',
			action: onFinalReportOpen,
			stateKey: 'none'
		},
		{
			name: 'Reporte de Evaluación Final',
			action: createFinalEvaluation,
			stateKey: 'final-evaluation'
		}
	]


	return (
		<>
			<div className="flex flex-wrap xl:grid xl:grid-cols-2 gap-4 h-fit place-content-center lg:place-content-start">
				<h2 className="w-full text-lg sm:text-xl xl:col-span-2 text-center md:text-left">Documentación</h2>

				{documents.map(doc => (
					<Card
						isPressable={dataComplete}
						isDisabled={!dataComplete}
						onPress={() => {
							doc.action()
							if (doc.stateKey !== 'none') setDocumentDownloaded(doc.stateKey)
						}}
						key={doc.name}
						className="w-32 h-36"
					>
						<CardBody className="pb-0">
							<DocumentIcon />
							{doc.stateKey !== 'none' && documentsDownloaded[doc.stateKey] && (
								<span className="fill-green-600 font-bold absolute right-3" >
									<DownloadIcon />
								</span>
							)}
						</CardBody>

						<CardFooter className="flex-grow">
							<p className="w-full text-center leading-4">{doc.name}</p>
						</CardFooter>
					</Card>
				))}
			</div>


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
										// Create the report period string
										const periodWeeks = eachWeekOfInterval({
											start: internshipData.period.startDate,
											end: internshipData.period.endDate
										})

										const reportWeeks = periodWeeks.slice(
											(Number(data.formatNumber) - 1) * internshipData.period.reportFrecuency,
											Number(data.formatNumber) * internshipData.period.reportFrecuency
										)

										await updatePeriod(`${formatedDate(reportWeeks[0])} al ${formatedDate(addDays(reportWeeks[reportWeeks.length - 1], 4))}`)

										// Calculate the partial period hours
										const periodHours = internshipData.period.totalHours / periodWeeks.length * internshipData.period.reportFrecuency
										await updatePeriodHours(periodHours)

										setDocumentDownloaded(`weekly-report-${data.formatNumber}`)
										createWeeklyReport()
										onClose()
									})}
								>
									<Select
										label="Número de reporte"
										isRequired
										autoFocus
										{...register('formatNumber')}
									>
										{Array.from({
											length: Math.ceil((differenceInCalendarWeeks(
												internshipData.period.endDate,
												internshipData.period.startDate
											) + 1) / internshipData.period.reportFrecuency)
										}).map((_, i) => (
											<SelectItem
												key={i + 1}
												value={i + 1}
												endContent={
													documentsDownloaded[`weekly-report-${i + 1}`] ?
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

									<Textarea
										minRows={8}
										label="Descripción de actividades"
										isRequired
										{...register('description')}
									/>

									<Textarea
										label="Comentarios"
										{...register('comments')}
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

			<Modal isOpen={isFinalReportOpen} onOpenChange={onFinalReportOpenChange} size="lg">
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Reporte Final de Actividades</ModalHeader>
							<ModalBody>
								<form
									id="final_report_form"
									onSubmit={handleSubmit(() => {
										createFinalReport()
										setDocumentDownloaded('final-report')
										onClose()
									})}
								>
									<Textarea
										minRows={16}
										label="Descripción de actividades"
										isRequired
										{...register('description')}
									/>
								</form>
							</ModalBody>
							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Cancelar
								</Button>
								<Button
									color="primary"
									form="final_report_form"
									type="submit"
								>
									Descargar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal >

			{dataComplete && (
				<>
					<PDFWrapper target={intershipTarget} >
						<PresentationLetter data={internshipData} />
					</PDFWrapper>

					<PDFWrapper target={weeklyReportTarget}>
						<WeeklyReport
							data={internshipData}
							comments={watch('comments')}
							description={watch('description')}
							formatNumber={Number(watch('formatNumber'))}
							period={watch('period')}
							totalHours={watch('totalHours')}
						/>
					</PDFWrapper>

					<PDFWrapper target={finalReportTarget}>
						<FinalReport data={internshipData} informContent={watch('description')} />
					</PDFWrapper>

					<PDFWrapper target={finalEvaluationTarget}>
						<FinalEvaluation data={internshipData} />
					</PDFWrapper>

					<PDFWrapper target={commitmentLetterTarget}>
						<CommitmentLetter data={internshipData} date={formatedDate(new Date())} />
					</PDFWrapper>
				</>
			)}
		</>
	)

}