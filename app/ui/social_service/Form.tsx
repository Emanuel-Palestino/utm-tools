'use client'

import { Tabs, Tab } from "@nextui-org/tabs"
import { useEffect, useState } from "react"
import { Key } from "@react-types/shared"
import { useSocialServiceStore } from "@app/_store/socialService"
import dynamic from "next/dynamic"
import SkeletonForm from "@app/ui/SkeletonForm"
import { CheckIcon } from "@app/icons/CheckIcon"

const PersonForm = dynamic(() => import('@app/ui/social_service/PersonForm'), { loading: () => <SkeletonForm rows={5} /> })
const StudentForm = dynamic(() => import('@app/ui/social_service/StudentForm'), { loading: () => <SkeletonForm rows={4} /> })
const GovernmentAgencyForm = dynamic(() => import('@app/ui/social_service/GovernmentAgencyForm'), { loading: () => <SkeletonForm rows={6} /> })
const PeriodForm = dynamic(() => import('@app/ui/social_service/PeriodForm'), { loading: () => <SkeletonForm rows={5} /> })
const ActivitiesForm = dynamic(() => import('@app/ui/social_service/ActivitiesForm'), { loading: () => <SkeletonForm rows={5} /> })


export const Form = () => {

	const [selectedTab, setSelectecTab] = useState<Key>('personal')
	const {
		isPersonalDataComplete,
		isStudentDataComplete,
		isPeriodDataComplete,
		isActivitiesDataComplete,
		isGovernmentAgencyDataComplete,
	} = useSocialServiceStore()

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
						{isPersonalDataComplete && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
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
						{isStudentDataComplete && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
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
						{isGovernmentAgencyDataComplete && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
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
						{isPeriodDataComplete && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
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
						{isActivitiesDataComplete && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
					</div>
				}
			>
				<ActivitiesForm />
			</Tab>
		</Tabs>
	)
}