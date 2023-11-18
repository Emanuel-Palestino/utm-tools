import { Tabs, Tab } from "@nextui-org/tabs"
import { PersonForm } from "./PersonForm"
import { StudentForm } from "./StudentForm"
import { PeriodForm } from "./PeriodForm"
import { CompanyForm } from "./CompanyForm"
import { useState } from "react"
import { Key } from "@react-types/shared"
import { useInternshipStore } from "@/app/store/internship"


export const Form = () => {

	const [selectedTab, setSelectecTab] = useState<Key>('personal')
	const completed = useInternshipStore(state => ({
		personaData: state.isPersonalDataComplete,
		studentData: state.isStudentDataComplete,
		periodData: state.isPeriodDataComplete,
		companyData: state.isCompanyDataComplete
	}))

	return (
		<div className="p-4">
			<Tabs selectedKey={selectedTab} onSelectionChange={setSelectecTab}>
				<Tab
					key="personal"
					title={
						<div className="flex items-center gap-2">
							<span>Información Personal</span>
							{completed.personaData && <span className="text-green-500 font-bold">✓</span>}
						</div>
					}
				>
					<PersonForm nextForm={() => setSelectecTab('student')} />
				</Tab>

				<Tab
					key="student"
					title={
						<div className="flex items-center gap-2">
							<span>Información Escolar</span>
							{completed.studentData && <span className="text-green-500 font-bold">✓</span>}
						</div>
					}
				>
					<StudentForm nextForm={() => setSelectecTab('period')} />
				</Tab>

				<Tab
					key="period"
					title={
						<div className="flex items-center gap-2">
							<span>Periodo y Prácticas</span>
							{completed.periodData && <span className="text-green-500 font-bold">✓</span>}
						</div>
					}
				>
					<PeriodForm nextForm={() => setSelectecTab('company')} />
				</Tab>

				<Tab
					key="company"
					title={
						<div className="flex items-center gap-2">
							<span>Información de la Empresa</span>
							{completed.companyData && <span className="text-green-500 font-bold">✓</span>}
						</div>
					}
				>
					<CompanyForm />
				</Tab>
			</Tabs>
		</div>
	)

}