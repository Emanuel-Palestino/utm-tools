'use client'

import { PresentationLetter } from "@/app/printingFormats/internship/PresentationLetter"
import { usePDF } from "@/src/hooks/usePDF"
import { PDFWrapper } from "@/app/ui/PDFWrapper"
import { WeeklyReport } from "@/app/printingFormats/internship/WeeklyReport"
import { FinalEvaluation } from "../printingFormats/internship/FinalEvaluation"
import { CommitmentLetter } from "../printingFormats/CommitmentLetter"
import { Card, CardBody, CardFooter } from "@nextui-org/card"
import { Form } from "@/app/ui/internship/Form"
import { useEffect } from "react"
import { useInternshipStore } from "../store/internship"


const Internship = () => {

	const { dataComplete, data, documentsDownloaded, setDocumentDownded } = useInternshipStore(state => ({
		dataComplete: state.isCompanyDataComplete && state.isPeriodDataComplete && state.isPersonalDataComplete && state.isStudentDataComplete,
		data: {
			applicationDate: new Date().toISOString().split('T')[0],
			person: state.personalData!,
			student: state.studentData!,
			period: state.periodData!,
			company: state.companyData!
		},
		documentsDownloaded: state.documentsDownloaded,
		setDocumentDownded: state.setDocumentDownloaded
	}))

	const { target: intershipTarget, createPDF: createIntership } = usePDF('Solicitud de Prácticas Profesionales')
	const { target: weeklyReportTarget, createPDF: createWeeklyReport } = usePDF('Reporte Semanal')
	const { target: finalEvaluationTarget, createPDF: createFinalEvaluation } = usePDF('Reporte de Evaluación Final')
	const { target: commitmentLetterTarget, createPDF: createCommitmentLetter } = usePDF('Carta Compromiso')

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
			name: 'Reporte Semanal',
			action: createWeeklyReport,
			stateKey: 'weekly-report'
		},
		{
			name: 'Reporte de Evaluación Final',
			action: createFinalEvaluation,
			stateKey: 'final-evaluation'
		}
	]

	useEffect(() => {
		useInternshipStore.persist.rehydrate()
	}, [])

	return (
		<div className="container mx-auto py-4">
			<h1 className="text-4xl text-center mb-10">Prácticas Profesionales</h1>

			<div className="w-full flex gap-12">
				<Form />

				<div className="grid grid-cols-2 gap-4 h-fit">
					<h2 className="text-2xl col-span-2 mb-14">Documentación</h2>
					{documents.map(doc => (
						<Card
							isPressable
							onPress={() => {
								doc.action()
								setDocumentDownded(doc.stateKey, true)
							}}
							key={doc.name}
							className="w-32 h-36"
							isDisabled={!dataComplete}
						>
							<CardBody className="pb-0">
								<svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 -960 960 960">
									<path d="M264.615-120Q237-120 218.5-138.5 200-157 200-184.615v-590.77Q200-803 218.5-821.5 237-840 264.615-840h288.539q12.923 0 25.115 5.231 12.192 5.23 20.885 13.923l141.692 141.692q8.693 8.693 13.923 20.885Q760-646.077 760-633.154v448.539Q760-157 741.5-138.5 723-120 695.385-120h-430.77ZM560-672.307V-800H264.615q-9.23 0-16.923 7.692Q240-784.615 240-775.385v590.77q0 9.23 7.692 16.923Q255.385-160 264.615-160h430.77q9.23 0 16.923-7.692Q720-175.385 720-184.615V-640H592.307q-13.923 0-23.115-9.192Q560-658.384 560-672.307ZM240-800v160-160 640-640Z" />
								</svg>
								{documentsDownloaded[doc.stateKey] && (
									<span className="text-green-500 font-bold absolute right-3 top-1">✓</span>
								)}
							</CardBody>
							<CardFooter className="flex-grow">
								<p className="w-full text-center leading-4">{doc.name}</p>
							</CardFooter>
						</Card>
					))}
				</div>

			</div>

			{dataComplete && (
				<>
					<PDFWrapper target={intershipTarget} >
						<PresentationLetter data={data} />
					</PDFWrapper>

					<PDFWrapper target={weeklyReportTarget}>
						<WeeklyReport
							data={data}
							comments="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
							description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
							formatNumber={1}
							period="01/01/2023 - 01/01/2023"
							totalHours={40}
						/>
					</PDFWrapper>

					<PDFWrapper target={finalEvaluationTarget}>
						<FinalEvaluation data={data} />
					</PDFWrapper>

					<PDFWrapper target={commitmentLetterTarget}>
						<CommitmentLetter data={data} date="05 de Noviembre de 2023" />
					</PDFWrapper>
				</>
			)}
		</div>
	)

}

export default Internship