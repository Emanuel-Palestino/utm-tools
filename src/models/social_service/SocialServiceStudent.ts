import { Student } from "../Student"


export interface SocialServiceStudent extends Student {
	address: string
	percentageOfApprovedCredits: number
}