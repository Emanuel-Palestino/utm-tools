import { Student } from "../Student"


export type SocialServiceStudent = Student & {
	address: string
	percentageOfApprovedCredits: number
}