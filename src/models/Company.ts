import { CompanySector } from "./CompanySector"


export interface Company {
	isInternacional: boolean		// ¿Es internacional?
	sector: CompanySector			// Sector
	industry: string				// Industria (Giro de la empresa)
	companyName: string				// Nombre de la empresa
	address: string					// Dirección
	state?: string					// Estado	
	phone: string					// Teléfono
	//phoneExtension: string			// Extensión
	email: string					// Correo electrónico
	webPage: string					// Página web
	companyContact: string			// Contacto en la empresa
	recipientName: string			// Nombre del destinatario
	recipientPosition: string		// Cargo del destinatario
	inAtentionOf: string			// A la atención de
}