'use client'

import { Tabs, Tab } from "@nextui-org/tabs"
import { useEffect, useState } from "react"
import { Key } from "@react-types/shared"
import { useSocialServiceStore } from "@/app/store/socialService"
import { CheckIcon } from "@/app/icons"
import dynamic from "next/dynamic"

const PersonForm = dynamic(() => import('./PersonForm').then(mod => mod.PersonForm))
const PeriodForm = dynamic(() => import('./PeriodForm').then(mod => mod.PeriodForm))
const GovernmentAgencyForm = dynamic(() => import('./GovernmentAgencyForm').then(mod => mod.GovernmentAgencyForm))
const ActivitiesForm = dynamic(() => import('./ActivitiesForm').then(mod => mod.ActivitiesForm))
const StudentForm = dynamic(() => import('./StudentForm').then(mod => mod.StudentForm))


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
		<section>
			<h2 className="text-lg sm:text-2xl mb-2 md:mb-4 text-center md:text-left">1 - Ingresa los datos necesarios</h2>
			<Tabs
				selectedKey={selectedTab}
				onSelectionChange={setSelectecTab}
				classNames={{ base: 'w-full', tabList: 'w-full flex flex-col lg:flex-row' }}
				size="lg"
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
							<span>Institución o Dependencia</span>
							{completed.governmentAgencyData && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
						</div>
					}
				>
					<GovernmentAgencyForm nextForm={() => setSelectecTab('period')} />
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
					<ActivitiesForm />
				</Tab>
			</Tabs>
		</section>
	)
}