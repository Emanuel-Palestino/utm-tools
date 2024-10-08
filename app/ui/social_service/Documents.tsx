'use client'

import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { useDisclosure } from "@nextui-org/modal"
import { usePDF } from "@/src/hooks/usePDF"
import { useSocialServiceStore } from "@/app/store/socialService"
import { DownloadIcon, DocumentIcon } from "@/app/icons"
import dynamic from "next/dynamic"

const Registration = dynamic(() => import('@/app/printingFormats/social_service/Registration').then(mod => mod.Registration))
const DocumentReception = dynamic(() => import('@/app/printingFormats/social_service/DocumentReception').then(mod => mod.DocumentReception))
const ScheduleOfActivities = dynamic(() => import('@/app/printingFormats/social_service/ScheduleOfActivities').then(mod => mod.ScheduleOfActivities))
const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))

const PartialReportModal = dynamic(() => import('@/app/ui/social_service/PartialReportModal'))
const FinalEvaluationModal = dynamic(() => import('@/app/ui/social_service/FinalEvaluationModal'))


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
	const { target: documentReception, createPDF: createDocumentReception } = usePDF('Formato de Recepción de Documentos')

	/* Partial report modal */
	const {
		isOpen: isReportModalOpen,
		onOpen: onReportModalOpen,
		onOpenChange: onReportModalChange
	} = useDisclosure()

	/* Final Evaluation modal */
	const {
		isOpen: isEvaluationModalOpen,
		onOpen: onEvaluationModalOpen,
		onOpenChange: onEvaluationModalChange
	} = useDisclosure()

	/* Downloadable documents */
	const documents = [
		{
			name: 'Registro de Servicio Social',
			action: createRegistration,
			stateKey: 'registration',
			instantDownload: true
		},
		{
			name: 'Cronograma de Actividades',
			action: createScheduleOfActivities,
			stateKey: 'schedule-activities',
			instantDownload: true
		},
		{
			name: 'Reportes Parciales',
			action: onReportModalOpen,
			stateKey: 'none',
			instantDownload: false
		},
		{
			name: 'Reporte de Evaluación Final',
			action: onEvaluationModalOpen,
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

			{dataComplete && (
				<>
					{isReportModalOpen && (
						<PartialReportModal
							isOpen={isReportModalOpen}
							onOpenChange={onReportModalChange}
						/>
					)}

					{isEvaluationModalOpen && (
						<FinalEvaluationModal
							isOpen={isEvaluationModalOpen}
							onOpenChange={onEvaluationModalChange}
						/>
					)}

					<PDFWrapper target={scheduleOfActivities} landscape>
						<ScheduleOfActivities
							person={socialServiceData.person}
							student={socialServiceData.student}
							governmentAgency={socialServiceData.governmentAgency}
							period={socialServiceData.period}
							activities={socialServiceData.activities}
							date={Date.now()}
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
							date={Date.now()}
						/>
					</PDFWrapper>
				</>
			)}
		</>
	)

}