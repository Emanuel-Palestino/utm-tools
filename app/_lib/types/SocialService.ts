import { Period, Person, Student } from "@app/_lib/types/Common"

export type SocialServiceStudent = Student & {
	address: string
	percentageOfApprovedCredits: number
}

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

export type GovernmentAgency = {
	name: string
	supervisorName: string
	supervisorEmail: string
	supervisorPosition: string
	supervisorWorkArea: string
	supervisorPhone: string
	address: string
	state: string
	city: string
	email: string
}

export type SocialService = {
	person: Person
	student: SocialServiceStudent
	period: SocialServicePeriod
	agency: GovernmentAgency
}