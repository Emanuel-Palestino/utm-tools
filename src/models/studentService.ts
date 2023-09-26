import { Student } from "./student";
export class UserService implements Student {
	name: string = '';
	tuition: string = '';
	semester: string = '';
	disability: boolean = false;
	disabilityDescription: string = '';
	indigenousLanguage: boolean = false;
	typeOfIndigenousLanguage: string = '';
	phone: string = '';
	email: string = '';

	matterDebt: boolean = false;
	extraordinaryExam: boolean = false;
	amountOfExtraordinaryExam: number = 0; //Esto ya ue en extraordinarios menciona si es uno o dos
	summerCourses: boolean = false;
	summerCourseMatterNames: string = ""; //puede ser una o dos
	studentState: StudentState | undefined;

	constructor(user: UserService) {
		if (user) {
			this.name = user.name;
			this.tuition = user.tuition;
			this.semester = user.semester;
			this.disability = user.disability;
			this.disabilityDescription = user.disabilityDescription;
			this.indigenousLanguage = user.indigenousLanguage;
			this.typeOfIndigenousLanguage = user.typeOfIndigenousLanguage;
			this.phone = user.phone;
			this.email = user.email;
			this.studentState = user.studentState;

		}
	}

}