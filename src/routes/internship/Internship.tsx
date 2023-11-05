import { Transition } from "../../components/Transition"
import { PresentationLetter } from "../../printingFormats/internship/PresentationLetter"
import { usePDF } from "../../hooks/usePDF"
import { PDFWrapper } from "../../components/PDFWrapper"
import { Internship as InternshipModel } from "../../models/Internship"
import { StudentState } from "../../models/StudentState"
import { CompanySector } from "../../models/CompanySector"
import { WeeklyReport } from "../../printingFormats/internship/WeeklyReport"


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

export const Internship = () => {
	const { target: intershipTarget, createPDF: createIntership } = usePDF('Solicitud de Prácticas Profesionales')
	const { target: weeklyReportTarget, createPDF: createWeeklyReport } = usePDF('Reporte Semanal')

	return (
		<Transition>
			<div className="bg-utm-container-2 h-screen">
				<h1 className="text-2xl">Prácticas Profesionales</h1>
				<button onClick={createIntership}>Generar Solicitud</button>
				<button onClick={createWeeklyReport}>Generar Reporte Semanal</button>
				<PDFWrapper target={intershipTarget}>
					<PresentationLetter data={data} />
				</PDFWrapper>

				<PDFWrapper target={weeklyReportTarget} opacity={1}>
					<WeeklyReport
						data={data}
						comments="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
						description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
						formatNumber={1}
						period="01/01/2023 - 01/01/2023"
						totalHours={40}
					/>
				</PDFWrapper>
			</div>
		</Transition>
	)

}