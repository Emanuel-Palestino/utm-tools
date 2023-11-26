import { Person } from "../Person"
import { GovernmentAgency } from "./GovernmentAgency"
import { SocialServicePeriod } from "./SocialServicePeriod"
import { SocialServiceStudent } from "./SocialServiceStudent"


export interface SocialService {
	person: Person

	student: SocialServiceStudent

	period: SocialServicePeriod

	agency: GovernmentAgency
}