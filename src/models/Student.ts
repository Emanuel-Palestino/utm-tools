import { Careers } from "./Careers"


export interface Student {
	name: string							// Nombre
	enrollment: string						// Matrícula
	career: Careers							// Carrera
	semester: number						// Semestre
	phone: string							// Teléfono
	ss: string								// Seguro Social
	email: string							// Correo electrónico
	hasDisability: boolean					// ¿Tiene alguna discapacidad?
	disability: string						// Discapacidad
	isSpeakerOfIndigenousLanguage: boolean	// ¿Habla alguna lengua indígena?
	indigenousLanguage: string				// Lengua indígena
}