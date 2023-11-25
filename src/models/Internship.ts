import { Company } from "./Company"
import { InternshipPeriod } from "./InternshipPeriod"
import { InternshipStudent } from "./InternshipStudent"
import { Person } from "./Person"


export interface Internship {
	applicationDate: Date			// Fecha de solicitud

	person: Person

	student: InternshipStudent

	period: InternshipPeriod

	company: Company
}
