import { PartialReport, Period, Person, Student } from "@app/_lib/types/Common"

export const StudentState = {
	ACTIVE: 'Activo',
	TEMPORARY_LEAVE: 'Baja temporal',
	GRADUATED: 'Egresado'
} as const
export type StudentState = typeof StudentState[keyof typeof StudentState]

export type InternshipStudent = Student & {
	haveToRetakeSubjects: boolean	// ¿Tiene que recursar materias?
	haveMakeUpExam: boolean			// Examen extraordinario?
	haveFirstMakeUpExam: boolean	// Primer extraordinario?
	haveSecondMakeUpExam: boolean	// Segundo extraordinario?
	haveSummerClass: boolean		// Curso de verano?
	summerCourses: string			// Materias de verano
	state: StudentState
}

export type InternshipPeriod = Period & {
	workArea: string				// Área de trabajo
	projectName: string				// Nombre del proyecto
	periodNumber: number			// Número de periodo
	customPeriod: boolean			// Periodo personalizado
	reportFrecuency: number			// Frecuencia de reporte
}

export const CompanySector = {
	PUBLIC: 'Público',
	PRIVATE: 'Privado',
	SOCIAL: 'Social'
} as const
export type CompanySector = typeof CompanySector[keyof typeof CompanySector]

export type Company = {
	isInternacional: boolean		// ¿Es internacional?
	sector: CompanySector			// Sector
	industry: string				// Industria (Giro de la empresa)
	companyName: string				// Nombre de la empresa
	address: string					// Dirección
	state?: string					// Estado	
	phone: string					// Teléfono
	//phoneExtension: string			// Extensión
	email: string					// Correo electrónico
	webPage: string					// Página web
	companyContact: string			// Contacto en la empresa
	recipientName: string			// Nombre del destinatario
	recipientPosition: string		// Cargo del destinatario
	inAtentionOf: string			// A la atención de
}

export type Internship = {
	applicationDate: number			// Fecha de solicitud. Timestamp in milliseconds
	person: Person
	student: InternshipStudent
	period: InternshipPeriod
	company: Company
	reports?: ({ [key: string]: PartialReport })
}

