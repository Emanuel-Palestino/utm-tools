'use client'

import { Tabs, Tab } from "@nextui-org/tabs"
import { PersonForm } from "./PersonForm"
import { StudentForm } from "./StudentForm"
import { PeriodForm } from "./PeriodForm"
import { CompanyForm } from "./CompanyForm"
import { useEffect, useState } from "react"
import { Key } from "@react-types/shared"
import { useInternshipStore } from "@/app/store/internship"
import { CheckIcon } from "@/app/icons"


export const Form = () => {

	const [selectedTab, setSelectecTab] = useState<Key>('personal')
	const completed = useInternshipStore(state => ({
		personaData: state.isPersonalDataComplete,
		studentData: state.isStudentDataComplete,
		periodData: state.isPeriodDataComplete,
		companyData: state.isCompanyDataComplete
	}))

	useEffect(() => {
		useInternshipStore.persist.rehydrate()
	}, [])

	return (
		<div className="flex-grow">
			<h2 className="text-2xl mb-4 text-center md:text-left">Datos</h2>
			<Tabs
				selectedKey={selectedTab}
				onSelectionChange={setSelectecTab}
				classNames={{ base: 'w-full', tabList: 'w-full flex flex-col md:flex-row' }}
			>
				<Tab
					key="personal"
					title={
						<div className="flex items-center gap-2">
							<span>Información Personal</span>
							{completed.personaData && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
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
							{completed.studentData && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
						</div>
					}
				>
					<StudentForm nextForm={() => setSelectecTab('company')} />
				</Tab>

				<Tab
					key="company"
					title={
						<div className="flex items-center gap-2">
							<span>Información de la Empresa</span>
							{completed.companyData && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
						</div>
					}
				>
					<CompanyForm nextForm={() => setSelectecTab('company')} />
				</Tab>

				<Tab
					key="period"
					title={
						<div className="flex items-center gap-2">
							<span>Periodo y Prácticas</span>
							{completed.periodData && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
						</div>
					}
				>
					<PeriodForm />
				</Tab>
			</Tabs>
		</div>
	)

}