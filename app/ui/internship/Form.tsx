'use client'

import { Tabs, Tab } from "@nextui-org/tabs"
import { useEffect, useState } from "react"
import { Key } from "@react-types/shared"
import { useInternshipStore } from "@app/store/internship"
import dynamic from "next/dynamic"
import SkeletonForm from "@app/ui/SkeletonForm"
import { CheckIcon } from "@app/icons/CheckIcon"

const PersonForm = dynamic(() => import('@app/ui/internship/PersonForm'), { loading: () => <SkeletonForm rows={3} /> })
const StudentForm = dynamic(() => import('@app/ui/internship/StudentForm'), { loading: () => <SkeletonForm rows={4} /> })
const CompanyForm = dynamic(() => import('@app/ui/internship/CompanyForm'), { loading: () => <SkeletonForm rows={7} /> })
const PeriodForm = dynamic(() => import('@app/ui/internship/PeriodForm'), { loading: () => <SkeletonForm rows={3} /> })


export const Form = () => {

	const [selectedTab, setSelectecTab] = useState<Key>('personal')
	const {
		isPersonalDataComplete,
		isStudentDataComplete,
		isPeriodDataComplete,
		isCompanyDataComplete,
	} = useInternshipStore()

	useEffect(() => {
		useInternshipStore.persist.rehydrate()
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
						<span>Información de la Empresa</span>
						{isCompanyDataComplete && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
					</div>
				}
			>
				<CompanyForm nextForm={() => setSelectecTab('period')} />
			</Tab>

			<Tab
				key="period"
				title={
					<div className="flex items-center gap-2">
						<span>Periodo y Estancias</span>
						{isPeriodDataComplete && <span className="fill-green-600 font-bold"><CheckIcon /></span>}
					</div>
				}
			>
				<PeriodForm />
			</Tab>
		</Tabs>
	)

}