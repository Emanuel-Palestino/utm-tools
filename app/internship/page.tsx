'use client'

import { PresentationLetter } from "@/app/printingFormats/internship/PresentationLetter"
import { usePDF } from "@/src/hooks/usePDF"
import { PDFWrapper } from "@/app/ui/PDFWrapper"
import { Internship as InternshipModel } from "@/src/models/Internship"
import { StudentState } from "@/src/models/StudentState"
import { CompanySector } from "@/src/models/CompanySector"
import { WeeklyReport } from "@/app/printingFormats/internship/WeeklyReport"
import { FinalEvaluation } from "../printingFormats/internship/FinalEvaluation"
import { CommitmentLetter } from "../printingFormats/CommitmentLetter"
import { Button } from "@nextui-org/react"
import { Form } from "@/app/ui/internship/Form"
import { useEffect } from "react"
import { useInternshipStore } from "../store/internship"


const data: InternshipModel = {
	person: {
		name: 'Emanuel Palestino Hernández',
		phone: '9511155807',
		email: 'chemascamp@gmail.com',
		isSpeakerOfIndigenousLanguage: false,
		indigenousLanguage: '',
		hasDisability: false,
		disability: '',
	},
	student: {
		career: 'Ingeniería en Computación',
		semester: 9,
		enrollment: '2019020337',
		ss: '12345678901234',
		haveToRetakeSubjects: false,
		haveMakeUpExam: false,
		haveFirstMakeUpExam: false,
		haveSecondMakeUpExam: false,
		haveSummerClass: false,
		summerCourses: '',
		state: StudentState.ACTIVE
	},
	period: {
		workArea: 'Desarrollo de Software',
		projectName: 'Sistema de Gestión de Prácticas Profesionales',
		startDate: '2023-01-01',
		endDate: '2023-01-01',
		schedule: [9, 18],
		totalHours: 480
	},
	company: {
		isInternacional: false,
		sector: CompanySector.PRIVATE,
		industry: 'Tecnologías de la Información',
		companyName: 'UTM',

		address: 'Av. Universidad 1001, Col. Lomas de San Jacinto, Oaxaca de Juárez, Oaxaca',
		phone: '9511155807',
		email: 'contacto@utm.mx',
		webPage: 'utm.mx',
		companyContact: 'Emanuel Palestino Hernández',
		recipientName: 'Emanuel Palestino Hernández',
		recipientPosition: 'Desarrollador de Software',
		inAtentionOf: '',
	},
	applicationDate: '2023-01-01'
}

const Internship = () => {

	const { target: intershipTarget, createPDF: createIntership } = usePDF('Solicitud de Prácticas Profesionales')
	const { target: weeklyReportTarget, createPDF: createWeeklyReport } = usePDF('Reporte Semanal')
	const { target: finalEvaluationTarget, createPDF: createFinalEvaluation } = usePDF('Reporte de Evaluación Final')
	const { target: commitmentLetterTarget, createPDF: createCommitmentLetter } = usePDF('Carta Compromiso')

	useEffect(() => {
		useInternshipStore.persist.rehydrate()
	}, [])

	return (
		<div className="container mx-auto">
			<h1 className="text-3xl py-2">Prácticas Profesionales</h1>

			<Form />

			<Button onClick={createIntership}>Generar Solicitud</Button>
			<Button onClick={createWeeklyReport}>Generar Reporte Semanal</Button>
			<Button onClick={createFinalEvaluation}>Generar Reporte de Evaluación Final</Button>
			<Button onClick={createCommitmentLetter}>Generar Carta Compromiso</Button>

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
		</div>
	)

}

export default Internship