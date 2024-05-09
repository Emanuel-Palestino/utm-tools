'use client'

import { usePDF } from "@/src/hooks/usePDF"
import { useInternshipStore } from "@/app/store/internship"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { useDisclosure } from "@nextui-org/modal"
import { formatedDate } from "@/app/utils/format"
import { DownloadIcon, DocumentIcon } from "@/app/icons"
import dynamic from "next/dynamic"

const PresentationLetter = dynamic(() => import('@/app/printingFormats/internship/PresentationLetter').then(mod => mod.PresentationLetter))
const FinalEvaluation = dynamic(() => import('@/app/printingFormats/internship/FinalEvaluation').then(mod => mod.FinalEvaluation))
const CommitmentLetter = dynamic(() => import('@/app/printingFormats/CommitmentLetter').then(mod => mod.CommitmentLetter))
const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))
const PartialReportModal = dynamic(() => import('./PartialReportModal').then(mod => mod.PartialReportModal))
const FinalReportModal = dynamic(() => import('./FinalReportModal').then(mod => mod.FinalReportModal))


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

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const {
		isOpen: isFinalReportOpen,
		onOpen: onFinalReportOpen,
		onOpenChange: onFinalReportOpenChange
	} = useDisclosure()

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

					<PDFWrapper target={finalEvaluationTarget}>
						<FinalEvaluation data={internshipData} />
					</PDFWrapper>

					<PDFWrapper target={commitmentLetterTarget}>
						<CommitmentLetter data={internshipData} date={formatedDate(new Date())} />
					</PDFWrapper>

					{isFinalReportOpen && (
						<FinalReportModal
							isOpen={isFinalReportOpen}
							onOpenChange={onFinalReportOpenChange}
						/>
					)}
				</>
			)}
		</>
	)

}