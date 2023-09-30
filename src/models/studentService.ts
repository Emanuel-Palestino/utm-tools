import { Student } from "./Student"

export interface StudentService extends Student {
	name: string
	tuition: string
	semester: string
	disability: boolean
	disabilityDescription: string
	indigenousLanguage: boolean
	typeOfIndigenousLanguage: string
	phone: string
	email: string

	matterDebt: boolean
	extraordinaryExam: boolean
	amountOfExtraordinaryExam: number
	summerCourses: boolean
	summerCourseMatterNames: string
	studentState: StudentState
}