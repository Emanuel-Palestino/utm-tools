'use client'

import { usePDF } from "@/src/hooks/usePDF"
import { useInternshipStore } from "@/app/store/internship"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input"
import { formatedDate } from "@/app/utils/format"
import { useForm } from "react-hook-form"
import { DownloadIcon, DocumentIcon } from "@/app/icons"
import dynamic from "next/dynamic"

const PresentationLetter = dynamic(() => import('@/app/printingFormats/internship/PresentationLetter').then(mod => mod.PresentationLetter))
const FinalEvaluation = dynamic(() => import('@/app/printingFormats/internship/FinalEvaluation').then(mod => mod.FinalEvaluation))
const CommitmentLetter = dynamic(() => import('@/app/printingFormats/CommitmentLetter').then(mod => mod.CommitmentLetter))
const FinalReport = dynamic(() => import('@/app/printingFormats/internship/FinalReport').then(mod => mod.FinalReport))
const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))
const PartialReportModal = dynamic(() => import('./PartialReportModal').then(mod => mod.PartialReportModal))


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


	const { target: intershipTarget, createPDF: createIntership } = usePDF('Solicitud de Estancias Profesionales')
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
		watch
	} = useForm<{ formatNumber: number, period: string, totalHours: number, description: string, comments: string }>({
		defaultValues: {
			formatNumber: 1,
			period: '0000-00-00 - 0000-00-00',
			totalHours: 40,
			description: '',
			comments: ''
		}
	})

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
			<section>
				<h2 className="text-xl sm:text-2xl text-center md:text-left mb-4">2 - Descarga tu documentación</h2>

				<div className="flex flex-wrap gap-4 justify-center w-fit">
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
			</section>


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
					{isOpen && (
						<PartialReportModal
							isOpen={isOpen}
							onOpenChange={onOpenChange}
						/>
					)}

					<PDFWrapper target={intershipTarget} >
						<PresentationLetter data={internshipData} />
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