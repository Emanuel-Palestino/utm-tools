import { Period } from "../Period"


export type SocialServicePeriod = Period & {
	months: number
	projectName: string
	projectObjective: string
}

export type Activity = {
	description: string
	startDate: number // timestamp in milliseconds
	endDate: number // timestamp in milliseconds
	hours: number
}