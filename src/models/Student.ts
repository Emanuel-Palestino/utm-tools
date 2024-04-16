import { Careers } from "./Careers"


export interface Student {
	enrollment: string						// Matrícula
	career: Careers							// Carrera
	semester: number						// Semestre
	group?: string							// Grupo
	ss: string								// Seguro Social
}