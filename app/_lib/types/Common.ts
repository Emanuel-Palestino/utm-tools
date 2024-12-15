export type Person = {
	name: string							// Nombre
	paternalSurname: string					// Apellido paterno
	maternalSurname: string					// Apellido materno
	phone: string							// Teléfono
	email: string							// Correo electrónico
	hasDisability: boolean					// ¿Tiene alguna discapacidad?
	disability: string						// Discapacidad
	isSpeakerOfIndigenousLanguage: boolean	// ¿Habla alguna lengua indígena?
	indigenousLanguage: string				// Lengua indígena
}

export const Careers = {
	INGENIERIA_EN_COMPUTACION: 'Ingeniería en Computación',
	INGENIERIA_EN_ELECTRONICA: 'Ingeniería en Electrónica',
	INGENIERIA_EN_DISENO: 'Ingeniería en Diseño',
	LICENCIATURA_EN_CIENCIAS_EMPRESARIALES: 'Licenciatura en Ciencias Empresariales',
	LICENCIATURA_EN_MATEMATICAS_APLICADAS: 'Licenciatura en Matemáticas Aplicadas',
	INGENIERIA_EN_ALIMENTOS: 'Ingeniería en Alimentos',
	INGENIERIA_INDUSTRIAL: 'Ingeniería Industrial',
	LICENCIATURA_EN_ESTUDIOS_MEXICANOS: 'Licenciatura en Estudios Mexicanos',
	INGENIERIA_EN_MECATRONICA: 'Ingeniería en Mecatrónica',
	INGENIERIA_EN_FISICA_APLICADA: 'Ingeniería en Física Aplicada',
	INGENIERIA_EN_MECANICA_AUTOMOTRIZ: 'Ingeniería en Mecánica Automotriz',
	INGENIERIA_CIVIL: 'Ingeniería Civil'
} as const
export type Careers = typeof Careers[keyof typeof Careers]

export type Student = {
	enrollment: string						// Matrícula
	career: Careers							// Carrera
	semester: number						// Semestre
	group?: string							// Grupo
	ss: string								// Seguro Social
}

export type Period = {
	startDate: number // timestamp in milliseconds
	endDate: number // timestamp in milliseconds
	schedules: number[][]
	totalHours: number
}

export type PartialReport = {
	formatNumber: number
	startDate: number // timestamp in milliseconds
	endDate: number // timestamp in milliseconds
	hours: number
	description: string
	comments?: string
}