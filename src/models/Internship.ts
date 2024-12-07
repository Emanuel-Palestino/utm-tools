import { Company } from "./Company"
import { InternshipPeriod } from "./InternshipPeriod"
import { InternshipStudent } from "./InternshipStudent"
import { PartialReport } from "./PartialReport"
import { Person } from "./Person"


export type Internship = {
	applicationDate: number			// Fecha de solicitud. Timestamp in milliseconds
	person: Person
	student: InternshipStudent
	period: InternshipPeriod
	company: Company
	reports?: ({ [key: string]: PartialReport })
}
