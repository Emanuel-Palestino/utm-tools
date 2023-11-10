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


const data: InternshipModel = {
	student: {
		name: 'Emanuel Palestino Hernández',
		career: 'Ingeniería en Computación',
		semester: 9,
		enrollment: '2019020337',
		isSpeakerOfIndigenousLanguage: false,
		indigenousLanguage: '',
		hasDisability: false,
		disability: '',
		phone: '9511155807',
		ss: '12345678901234',
		email: 'chemascamp@gmail.com',
		haveToRetakeSubjects: false,
		haveMakeUpExam: false,
		haveFirstMakeUpExam: false,
		haveSecondMakeUpExam: false,
		haveSummerClass: false,
		summerCourses: '',
		state: StudentState.ACTIVE
	},
	period: {
		startDate: '2023-01-01',
		endDate: '2023-01-01',
		schedule: 'Lunes a Viernes de 8:00 a 14:00 hrs.',
		totalHours: 480
	},
	isInternacional: false,
	sector: CompanySector.PRIVATE,
	industry: 'Tecnologías de la Información',
	companyName: 'UTM',
	workArea: 'Desarrollo de Software',
	projectName: 'Sistema de Gestión de Prácticas Profesionales',
	address: 'Av. Universidad 1001, Col. Lomas de San Jacinto, Oaxaca de Juárez, Oaxaca',
	phone: '9511155807',
	phoneExtension: '52',
	email: 'contacto@utm.mx',
	webPage: 'utm.mx',
	companyContact: 'Emanuel Palestino Hernández',
	recipientName: 'Emanuel Palestino Hernández',
	recipientPosition: 'Desarrollador de Software',
	inAtentionOf: '',
	applicationDate: '2023-01-01'
}

const Internship = () => {

	const { target: intershipTarget, createPDF: createIntership } = usePDF('Solicitud de Prácticas Profesionales')
	const { target: weeklyReportTarget, createPDF: createWeeklyReport } = usePDF('Reporte Semanal')
	const { target: finalEvaluationTarget, createPDF: createFinalEvaluation } = usePDF('Reporte de Evaluación Final')
	const { target: commitmentLetterTarget, createPDF: createCommitmentLetter } = usePDF('Carta Compromiso')

	return (
		<div className="bg-utm-container-2 h-screen">
			<h1 className="text-2xl">Prácticas Profesionales</h1>
			<button onClick={createIntership}>Generar Solicitud</button>
			<button onClick={createWeeklyReport}>Generar Reporte Semanal</button>
			<button onClick={createFinalEvaluation}>Generar Reporte de Evaluación Final</button>
			<button onClick={createCommitmentLetter}>Generar Carta Compromiso</button>

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

			<PDFWrapper target={commitmentLetterTarget} opacity={1}>
				<CommitmentLetter />
			</PDFWrapper>
		</div>
	)

}

export default Internship