import { Person } from "../Person"
import { GovernmentAgency } from "./GovernmentAgency"
import { SocialServicePeriod } from "./SocialServicePeriod"
import { SocialServiceStudent } from "./SocialServiceStudent"


export type SocialService = {
	person: Person
	student: SocialServiceStudent
	period: SocialServicePeriod
	agency: GovernmentAgency
}