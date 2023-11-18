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

	const { dataComplete, data } = useInternshipStore(state => ({
		dataComplete: state.isCompanyDataComplete && state.isPeriodDataComplete && state.isPersonalDataComplete && state.isStudentDataComplete,
		data: {
			applicationDate: new Date().toISOString().split('T')[0],
			person: state.personalData!,
			student: state.studentData!,
			period: state.periodData!,
			company: state.companyData!
		}
	}))

	const { target: intershipTarget, createPDF: createIntership } = usePDF('Solicitud de Prácticas Profesionales')
	const { target: weeklyReportTarget, createPDF: createWeeklyReport } = usePDF('Reporte Semanal')
	const { target: finalEvaluationTarget, createPDF: createFinalEvaluation } = usePDF('Reporte de Evaluación Final')
	const { target: commitmentLetterTarget, createPDF: createCommitmentLetter } = usePDF('Carta Compromiso')

	const documents = [
		{
			name: 'Solicitud',
			action: createIntership
		},
		{
			name: 'Carta Compromiso',
			action: createCommitmentLetter
		},
		{
			name: 'Reporte Semanal',
			action: createWeeklyReport
		},
		{
			name: 'Reporte de Evaluación Final',
			action: createFinalEvaluation
		}
	]

	useEffect(() => {
		useInternshipStore.persist.rehydrate()
	}, [])

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl py-2">Prácticas Profesionales</h1>

			<Form />

			<h2 className="text-2xl py-2">Documentación</h2>

			<div className="flex flex-wrap gap-4">
				{documents.map(doc => (
					<Card
						isPressable
						onPress={doc.action}
						key={doc.name}
						className="w-32 min-h-36"
						isDisabled={!dataComplete}
					>
						<CardBody className="pb-0">
							<svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 384 512">
								<path d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z" />
							</svg>
						</CardBody>
						<CardFooter className="flex-grow">
							<b className="w-full text-center leading-4">{doc.name}</b>
						</CardFooter>
					</Card>
				))}
			</div>


			{
				dataComplete && (
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
				)
			}
		</div>
	)

}

export default Internship