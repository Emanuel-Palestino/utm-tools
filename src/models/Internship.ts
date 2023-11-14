import { CompanySector } from "./CompanySector"
import { InternshipStudent } from "./InternshipStudent"
import { Period } from "./Period"
import { Person } from "./Person"


export interface Internship {
	isInternacional: boolean		// ¿Es internacional?
	sector: CompanySector			// Sector
	industry: string				// Industria (Giro de la empresa)
	companyName: string				// Nombre de la empresa
	address: string					// Dirección
	phone: string					// Teléfono
	//phoneExtension: string			// Extensión
	email: string					// Correo electrónico
	webPage: string					// Página web
	companyContact: string			// Contacto en la empresa
	recipientName: string			// Nombre del destinatario
	recipientPosition: string		// Cargo del destinatario
	inAtentionOf: string			// A la atención de
	applicationDate: string			// Fecha de solicitud

	person: Person

	student: InternshipStudent

	period: Period & {
		workArea: string				// Área de trabajo
		projectName: string				// Nombre del proyecto
	}
}
