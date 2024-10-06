import { Period } from "../Period"


export type SocialServicePeriod = Period & {
	months: number
	projectName: string
	projectObjective: string
	activities: Activity[]
}

export type Activity = {
	description: string
	startDate: Date
	endDate: Date
	hours: number
}