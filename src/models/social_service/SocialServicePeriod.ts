import { Period } from "../Period"


export interface SocialServicePeriod extends Period {
	months: number
	projectName: string
	projectObjective: string
	activities: Activity[]
}

interface Activity {
	description: string
	startDate: Date
	endDate: Date
	hours: number
}