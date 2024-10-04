'use client'

import { Tabs, Tab } from "@nextui-org/tabs"
import { useEffect, useState } from "react"
import { Key } from "@react-types/shared"
import { useSocialServiceStore } from "@/app/store/socialService"
import { CheckIcon } from "@/app/icons"
import dynamic from "next/dynamic"
import SkeletonForm from "../SkeletonForm"

const PersonForm = dynamic(() => import('./PersonForm'), { loading: () => <SkeletonForm rows={5} /> })
const StudentForm = dynamic(() => import('./StudentForm'), { loading: () => <SkeletonForm rows={4} /> })
const GovernmentAgencyForm = dynamic(() => import('./GovernmentAgencyForm'), { loading: () => <SkeletonForm rows={6} /> })
const PeriodForm = dynamic(() => import('./PeriodForm'), { loading: () => <SkeletonForm rows={5} /> })
const ActivitiesForm = dynamic(() => import('./ActivitiesForm'), { loading: () => <SkeletonForm rows={5} /> })


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
	)
}