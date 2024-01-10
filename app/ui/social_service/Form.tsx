'use client'

import { Tabs, Tab } from "@nextui-org/tabs"
import { PersonForm } from "./PersonForm"
import { StudentForm } from "./StudentForm"
import { PeriodForm } from "./PeriodForm"
import { GovernmentAgencyForm } from "./GovernmentAgencyForm"
import { useEffect, useState } from "react"
import { Key } from "@react-types/shared"
import { ActivitiesForm } from "./ActivitiesForm"
import { useSocialServiceStore } from "@/app/store/socialService"
import { CheckIcon } from "@/app/icons"


export const Form = () => {

	const [selectedTab, setSelectecTab] = useState<Key>('personal')
	const completed = useSocialServiceStore(state => ({
		personaData: state.isPersonalDataComplete,
		studentData: state.isStudentDataComplete,
		periodData: state.isPeriodDataComplete,
		activitiesData: state.isActivitiesDataComplete,
		governmentAgencyData: state.isGovernmentAgencyDataComplete
	}))

	useEffect(() => {
		useSocialServiceStore.persist.rehydrate()
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
					<StudentForm nextForm={() => setSelectecTab('period')} />
				</Tab>

				<Tab
					key="company"
					title={
						<div className="flex items-center gap-2">
							<span>Institución o Dependencia</span>
							{completed.governmentAgencyData && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
						</div>
					}
				>
					<GovernmentAgencyForm />
				</Tab>

				<Tab
					key="period"
					title={
						<div className="flex items-center gap-2">
							<span>Periodo y Proyecto</span>
							{completed.periodData && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
						</div>
					}
				>
					<PeriodForm nextForm={() => setSelectecTab('activities')} />
				</Tab>

				<Tab
					key="activities"
					title={
						<div className="flex items-center gap-2">
							<span>Actividades</span>
							{completed.activitiesData && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
						</div>
					}
				>
					<ActivitiesForm nextForm={() => setSelectecTab('company')} />
				</Tab>
			</Tabs>
		</div>
	)
}