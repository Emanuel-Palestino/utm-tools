import { Tabs, Tab } from "@nextui-org/tabs"
import { PersonForm } from "./PersonForm"
import { StudentForm } from "./StudentForm"
import { PeriodForm } from "./PeriodForm"
import { CompanyForm } from "./CompanyForm"


export const Form = () => {

	return (
		<div className="p-4">
			<Tabs aria-label="Options">
				<Tab key="personal" title="Información Personal">
					<PersonForm />
				</Tab>

				<Tab key="student" title="Información Estudiantil">
					<StudentForm />
				</Tab>

				<Tab key="period" title="Periodo y Prácticas">
					<PeriodForm />
				</Tab>

				<Tab key="company" title="Información de la Empresa">
					<CompanyForm />
				</Tab>
			</Tabs>
		</div>
	)

}