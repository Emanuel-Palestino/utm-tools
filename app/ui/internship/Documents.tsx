'use client'

import { usePDF } from "@/src/hooks/usePDF"
import { PDFWrapper } from "../PDFWrapper"
import { PresentationLetter } from "@/app/printingFormats/internship/PresentationLetter"
import { WeeklyReport } from "@/app/printingFormats/internship/WeeklyReport"
import { FinalEvaluation } from "@/app/printingFormats/internship/FinalEvaluation"
import { CommitmentLetter } from "@/app/printingFormats/CommitmentLetter"
import { useInternshipStore } from "@/app/store/internship"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input"
import { Select, SelectItem } from "@nextui-org/select"
import { formatedDate } from "@/app/utils/format"
import { useForm } from "react-hook-form"
import { FinalReport } from "@/app/printingFormats/internship/FinalReport"
import { addDays, differenceInCalendarWeeks, eachWeekOfInterval } from "date-fns"
import es from "date-fns/locale/es"
import { INTERNSHIP_PERIODS } from "@/app/utils/constants"


export const Documents = () => {

	const { dataComplete, internshipData, documentsDownloaded, setDocumentDownloaded } = useInternshipStore(state => ({
		dataComplete: state.isCompanyDataComplete && state.isPeriodDataComplete && state.isPersonalDataComplete && state.isStudentDataComplete,
		internshipData: {
			applicationDate: new Date().toISOString().split('T')[0],
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
			<div className="grid grid-cols-2 gap-4 h-fit">
				<h2 className="text-2xl col-span-2 mb-14">Documentación</h2>

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
							<svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 -960 960 960">
								<path d="M264.615-120Q237-120 218.5-138.5 200-157 200-184.615v-590.77Q200-803 218.5-821.5 237-840 264.615-840h288.539q12.923 0 25.115 5.231 12.192 5.23 20.885 13.923l141.692 141.692q8.693 8.693 13.923 20.885Q760-646.077 760-633.154v448.539Q760-157 741.5-138.5 723-120 695.385-120h-430.77ZM560-672.307V-800H264.615q-9.23 0-16.923 7.692Q240-784.615 240-775.385v590.77q0 9.23 7.692 16.923Q255.385-160 264.615-160h430.77q9.23 0 16.923-7.692Q720-175.385 720-184.615V-640H592.307q-13.923 0-23.115-9.192Q560-658.384 560-672.307ZM240-800v160-160 640-640Z" />
							</svg>
							{doc.stateKey !== 'none' && documentsDownloaded[doc.stateKey] && (
								<span className="text-green-500 font-bold absolute right-3 top-1">✓</span>
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
											...(internshipData.period.customPeriod ?
												{
													start: new Date(`${internshipData.period.startDate} UTC-6`),
													end: new Date(`${internshipData.period.endDate} UTC-6`)
												} :
												{
													start: new Date(`${INTERNSHIP_PERIODS[internshipData.period.periodNumber - 1].startDate} UTC-6`),
													end: new Date(`${INTERNSHIP_PERIODS[internshipData.period.periodNumber - 1].endDate} UTC-6`)
												}
											)
										}, { locale: es })

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
												...(internshipData.period.customPeriod ?
													[
														new Date(`${internshipData.period.endDate} UTC-6`),
														new Date(`${internshipData.period.startDate} UTC-6`)
													] :
													[
														new Date(`${INTERNSHIP_PERIODS[internshipData.period.periodNumber - 1].endDate} UTC-6`),
														new Date(`${INTERNSHIP_PERIODS[internshipData.period.periodNumber - 1].startDate} UTC-6`)
													]) as [Date, Date]
											) + 1) / internshipData.period.reportFrecuency)
										}).map((_, i) => (
											<SelectItem
												key={i + 1}
												value={i + 1}
												endContent={
													documentsDownloaded[`weekly-report-${i + 1}`] ?
														<span className="text-green-500 font-bold absolute right-3 top-1 pr-4">✓</span>
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