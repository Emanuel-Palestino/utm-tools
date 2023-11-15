import { Tabs, Tab } from "@nextui-org/tabs"
import { PersonForm } from "./PersonForm"
import { StudentForm } from "./StudentForm"
import { PeriodForm } from "./PeriodForm"
import { CompanyForm } from "./CompanyForm"
import { useState } from "react"
import { Key } from "@react-types/shared"


export const Form = () => {

	const [selectedTab, setSelectecTab] = useState<Key>('personal')

	return (
		<div className="p-4">
			<Tabs selectedKey={selectedTab} onSelectionChange={setSelectecTab}>
				<Tab
					key="personal"
					title="Información Personal"
				>
					<PersonForm nextForm={() => setSelectecTab('student')} />
				</Tab>

				<Tab key="student" title="Información Estudiantil">
					<StudentForm nextForm={() => setSelectecTab('period')} />
				</Tab>

				<Tab key="period" title="Periodo y Prácticas">
					<PeriodForm nextForm={() => setSelectecTab('company')} />
				</Tab>

				<Tab key="company" title="Información de la Empresa">
					<CompanyForm />
				</Tab>
			</Tabs>
		</div>
	)

}