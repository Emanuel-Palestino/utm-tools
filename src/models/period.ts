export class Period {
	initialDate: string;
	finalDate: string;
	year:string;
	schedule: string;
	
	constructor(period: Period) {
		this.initialDate = period.initialDate;
		this.finalDate = period.finalDate;
		this.year = period.year;
		this.schedule = period.schedule;
	}
}