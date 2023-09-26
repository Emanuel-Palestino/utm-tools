import { Student } from "./student";
export class StudentService implements Student {
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

	constructor(student: StudentService) {
		if (student) {
			this.name = student.name;
			this.tuition = student.tuition;
			this.semester = student.semester;
			this.disability = student.disability;
			this.disabilityDescription = student.disabilityDescription;
			this.indigenousLanguage = student.indigenousLanguage;
			this.typeOfIndigenousLanguage = student.typeOfIndigenousLanguage;
			this.phone = student.phone;
			this.email = student.email;

			this.matterDebt = student.matterDebt;
			this.extraordinaryExam = student.extraordinaryExam;
			this.amountOfExtraordinaryExam = student.amountOfExtraordinaryExam;
			this.summerCourses = student.summerCourses;
			this.summerCourseMatterNames;
			this.studentState = student.studentState;

		}
	}

}