import { Student } from "./Student"
import { StudentState } from "./StudentState"


export type InternshipStudent = Student & {
	haveToRetakeSubjects: boolean	// ¿Tiene que recursar materias?
	haveMakeUpExam: boolean			// Examen extraordinario?
	haveFirstMakeUpExam: boolean	// Primer extraordinario?
	haveSecondMakeUpExam: boolean	// Segundo extraordinario?
	haveSummerClass: boolean		// Curso de verano?
	summerCourses: string			// Materias de verano
	state: StudentState
}