export class PracticesCompany {
	classification: companyClassification;
	sector: CompanySector;
	businessLine: string;
	name: string;
	workArea: string;
	proyectName: string;
	adress: string;
	locality: string;
	postalCode: string;
	phone: string;
	email: string;
	webPage: string;
	contact: string;
	contactName: string;
	contactPosition: string;
	inAtentionOf: string;


	constructor(company: PracticesCompany){
		this.classification = company.classification;
		this.sector = company.sector;
		this.businessLine = company.businessLine;
		this.name = company.name;
		this.workArea = company.workArea;
		this.proyectName = company.proyectName;
		this.adress = company.adress;
		this.locality = company.locality;
		this.postalCode = company.postalCode;
		this.phone = company.phone;
		this.email = company.email;
		this.webPage = company.webPage;
		this.contact = company.contact;
		this.contactName = company.contactName;
		this.contactPosition = company.contactPosition;
		this.inAtentionOf = company.inAtentionOf;
	}

}