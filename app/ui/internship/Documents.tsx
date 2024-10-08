'use client'

import { usePDF } from "@/src/hooks/usePDF"
import { useInternshipStore } from "@/app/store/internship"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { useDisclosure } from "@nextui-org/modal"
import { formatedDate } from "@/app/utils/format"
import { DownloadIcon, DocumentIcon } from "@/app/icons"
import dynamic from "next/dynamic"

const PresentationLetter = dynamic(() => import('@/app/printingFormats/internship/PresentationLetter'))
const CommitmentLetter = dynamic(() => import('@/app/printingFormats/CommitmentLetter'))
const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))
const PartialReportModal = dynamic(() => import('./PartialReportModal'))
const FinalReportModal = dynamic(() => import('./FinalReportModal'))
const FinalEvaluationModal = dynamic(() => import('./FinalEvaluationModal'))
const DocumentReception = dynamic(() => import('@/app/printingFormats/internship/DocumentReception'))


export const Documents = () => {

	const { dataComplete, internshipData, documentsDownloaded, setDocumentDownloaded } = useInternshipStore(state => ({
		dataComplete: state.isCompanyDataComplete && state.isPeriodDataComplete && state.isPersonalDataComplete && state.isStudentDataComplete,
		internshipData: {
			applicationDate: Date.now(),
			person: state.personalData!,
			student: state.studentData!,
			period: state.periodData!,
			company: state.companyData!
		},
		documentsDownloaded: state.documentsDownloaded,
		setDocumentDownloaded: (key: string) => state.setDocumentDownloaded(key, true)
	}))


	const { target: intershipTarget, createPDF: createIntership } = usePDF('Solicitud de Estancias Profesionales')
	const { target: commitmentLetterTarget, createPDF: createCommitmentLetter } = usePDF('Carta Compromiso')
	const { target: documentReceptionTarget, createPDF: createDocumentReception } = usePDF('Formato de Recpeción de Documentos')

	const { isOpen, onOpen, onOpenChange } = useDisclosure()

	const {
		isOpen: isFinalReportOpen,
		onOpen: onFinalReportOpen,
		onOpenChange: onFinalReportOpenChange
	} = useDisclosure()

	const {
		isOpen: isFinalEvaluationOpen,
		onOpen: onFinalEvaluationOpen,
		onOpenChange: onFinalEvaluationOpenChange
	} = useDisclosure()

	const documents = [
		{
			name: 'Solicitud',
			action: createIntership,
			stateKey: 'presentation-letter',
			instantDownload: true
		},
		{
			name: 'Carta Compromiso',
			action: createCommitmentLetter,
			stateKey: 'commitment-letter',
			instantDownload: true
		},
		{
			name: 'Reportes Parciales',
			action: onOpen,
			stateKey: 'none',
			instantDownload: false
		},
		{
			name: 'Reporte Final',
			action: onFinalReportOpen,
			stateKey: 'final-report',
			instantDownload: false
		},
		{
			name: 'Reporte de Evaluación Final',
			action: onFinalEvaluationOpen,
			stateKey: 'final-evaluation',
			instantDownload: false
		},
		{
			name: 'Recepción de Documentos',
			action: createDocumentReception,
			stateKey: 'document-reception',
			instantDownload: true
		}
	]


	return (
		<>
			<div className="flex flex-wrap gap-4 justify-center w-fit">
				{documents.map(doc => (
					<Card
						isPressable={dataComplete}
						isDisabled={!dataComplete}
						onPress={() => {
							doc.action()
							if (doc.instantDownload) setDocumentDownloaded(doc.stateKey)
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

					<PDFWrapper target={commitmentLetterTarget}>
						<CommitmentLetter data={internshipData} date={formatedDate(Date.now())} />
					</PDFWrapper>

					{isFinalReportOpen && (
						<FinalReportModal
							isOpen={isFinalReportOpen}
							onOpenChange={onFinalReportOpenChange}
						/>
					)}

					{isFinalEvaluationOpen && (
						<FinalEvaluationModal
							isOpen={isFinalEvaluationOpen}
							onOpenChange={onFinalEvaluationOpenChange}
						/>
					)}

					<PDFWrapper target={documentReceptionTarget}>
						<DocumentReception
							person={internshipData.person}
							student={internshipData.student}
							period={internshipData.period}
						/>
					</PDFWrapper>
				</>
			)}
		</>
	)

}