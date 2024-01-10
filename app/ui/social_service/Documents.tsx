'use client'

import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input"
import { Select, SelectItem } from "@nextui-org/select"
import { useForm } from "react-hook-form"
import { PDFWrapper } from "../PDFWrapper"
import { ScheduleOfActivities } from "@/app/printingFormats/social_service/ScheduleOfActivities"
import { usePDF } from "@/src/hooks/usePDF"
import { PartialReport } from "@/app/printingFormats/social_service/PartialReport"
import { FinalEvaluation } from "@/app/printingFormats/social_service/FinalEvaluation"
import { DocumentReception } from "@/app/printingFormats/social_service/DocumentReception"
import { Registration } from "@/app/printingFormats/social_service/Registration"
import { useSocialServiceStore } from "@/app/store/socialService"
import { DownloadIcon, DocumentIcon } from "@/app/icons"


export const Documents = () => {

	/* Social Service data in local storage */
	const { dataComplete, socialServiceData, documentsDownloaded, setDocumentDownloaded } = useSocialServiceStore(state => ({
		dataComplete: state.isGovernmentAgencyDataComplete && state.isActivitiesDataComplete && state.isPeriodDataComplete && state.isPersonalDataComplete && state.isStudentDataComplete,
		socialServiceData: {
			person: state.personalData!,
			student: state.studentData!,
			period: state.periodData!,
			activities: state.activitiesData!,
			governmentAgency: state.governmentAgencyData!
		},
		documentsDownloaded: state.documentsDownloaded,
		setDocumentDownloaded: (key: string) => state.setDocumentDownloaded(key, true)
	}))

	/* PDF documents */
	const { target: registration, createPDF: createRegistration } = usePDF('Registro de Servicio Social')
	const { target: scheduleOfActivities, createPDF: createScheduleOfActivities } = usePDF('Cronograma de Actividades', true)
	const { target: partialReport, createPDF: createPartialReport } = usePDF('Reporte Parcial de Actividades')
	const { target: finalReport, createPDF: createFinalReport } = usePDF('Reporte Final')
	const { target: documentReception, createPDF: createDocumentReception } = usePDF('Formato de Recepción de Documentos')

	/* Partial report modal */
	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	/* Form handle for partial report data */
	const {
		handleSubmit,
		register,
		watch
	} = useForm<{ formatNumber: number, description: string }>({
		defaultValues: {
			formatNumber: 1,
			description: '',
		}
	})

	/* Downloadable documents */
	const documents = [
		{
			name: 'Registro de Servicio Social',
			action: createRegistration,
			stateKey: 'registration'
		},
		{
			name: 'Cronograma de Actividades',
			action: createScheduleOfActivities,
			stateKey: 'schedule-activities'
		},
		{
			name: 'Reportes Parciales',
			action: onOpen,
			stateKey: 'none'
		},
		{
			name: 'Reporte de Evaluación Final',
			action: createFinalReport,
			stateKey: 'final-evaluation'
		},
		{
			name: 'Recepción de Documentos',
			action: createDocumentReception,
			stateKey: 'document-reception'
		}
	]


	return (
		<>
			<div className="flex flex-wrap xl:grid xl:grid-cols-2 gap-4 h-fit place-content-center lg:place-content-start">
				<h2 className="w-full text-2xl xl:col-span-2 xl:mb-14 text-center md:text-left">Documentación</h2>

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
								<span className="fill-green-600 font-bold absolute right-3">
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
									onSubmit={handleSubmit(data => {
										setDocumentDownloaded(`partial-report-${data.formatNumber}`)
										createPartialReport()
										onClose()
									})}
								>
									<Select
										label="Número de reporte"
										isRequired
										autoFocus
										{...register('formatNumber')}
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

									<Textarea
										minRows={8}
										label="Descripción de actividades"
										isRequired
										description="Usa saltos de línea para separar las actividades."
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

			{dataComplete && (
				<>
					<PDFWrapper target={scheduleOfActivities} landscape>
						<ScheduleOfActivities
							person={socialServiceData.person}
							student={socialServiceData.student}
							governmentAgency={socialServiceData.governmentAgency}
							period={socialServiceData.period}
							activities={socialServiceData.activities}
							date={new Date()}
						/>
					</PDFWrapper>

					<PDFWrapper target={partialReport}>
						<PartialReport
							person={socialServiceData.person}
							student={socialServiceData.student}
							governmentAgency={socialServiceData.governmentAgency}
							period={socialServiceData.period}
							formatNumber={Number(watch('formatNumber'))}
							activity={socialServiceData.activities[(Number(watch('formatNumber') || 1)) - 1]}
							description={watch('description')}
						/>
					</PDFWrapper>

					<PDFWrapper target={finalReport}>
						<FinalEvaluation
							person={socialServiceData.person}
							student={socialServiceData.student}
							period={socialServiceData.period}
							governmentAgency={socialServiceData.governmentAgency}
							formatNumber={socialServiceData.period.months + 1}
						/>
					</PDFWrapper>

					<PDFWrapper target={documentReception}>
						<DocumentReception
							person={socialServiceData.person}
							student={socialServiceData.student}
							period={socialServiceData.period}
						/>
					</PDFWrapper>

					<PDFWrapper target={registration}>
						<Registration
							person={socialServiceData.person}
							student={socialServiceData.student}
							period={socialServiceData.period}
							governmentAgency={socialServiceData.governmentAgency}
							date={new Date()}
						/>
					</PDFWrapper>
				</>
			)}
		</>
	)

}