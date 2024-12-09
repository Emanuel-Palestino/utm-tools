import { Company } from '@/src/models/Company'
import { InternshipPeriod } from '@/src/models/InternshipPeriod'
import { InternshipStudent } from '@/src/models/InternshipStudent'
import { Person } from '@/src/models/Person'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { PartialReport } from '@/src/models/PartialReport'

export type InternshipStore = {
	isPersonalDataComplete: boolean
	personalData: Person | undefined

	isStudentDataComplete: boolean
	studentData: InternshipStudent | undefined

	isPeriodDataComplete: boolean
	periodData: InternshipPeriod | undefined

	isCompanyDataComplete: boolean
	companyData: Company | undefined

	reports: { [key: string]: PartialReport }
	documentsDownloaded: { [key: string]: boolean }
}

type InternshipActions = {
	setPersonalData: (personalData: Person) => void
	setStudentData: (studentData: InternshipStudent) => void
	setPeriodData: (periodData: InternshipPeriod) => void
	setCompanyData: (companyData: Company) => void
	addReport: (key: string, report: PartialReport) => void
	setDocumentDownloaded: (key: string, value: boolean) => void
	setData: (data: InternshipStore) => void
}

type InternshipStoreState = InternshipStore & InternshipActions

export const useInternshipStore = create<InternshipStoreState>()(
	persist(
		(set, get) => ({
			isPersonalDataComplete: false,
			personalData: undefined,

			isStudentDataComplete: false,
			studentData: undefined,

			isPeriodDataComplete: false,
			periodData: undefined,

			isCompanyDataComplete: false,
			companyData: undefined,

			reports: {},

			setPersonalData: (personalData: Person) => set(() => ({ personalData, isPersonalDataComplete: true })),

			setStudentData: (studentData: InternshipStudent) => set(() => ({ studentData, isStudentDataComplete: true })),

			setPeriodData: (periodData: InternshipPeriod) => set(() => ({ periodData, isPeriodDataComplete: true })),

			setCompanyData: (companyData: Company) => set(() => ({ companyData, isCompanyDataComplete: true })),

			addReport: (key, report) => {
				set(() => ({ reports: { ...get().reports, [key]: report } }))
			},

			documentsDownloaded: {},
			setDocumentDownloaded(key, value) {
				set(() => ({ documentsDownloaded: { ...get().documentsDownloaded, [key]: value } }))
			},

			setData: (data) => set(() => data)
		}),
		{
			name: 'internship-storage',
			skipHydration: true,
			version: 2,
			migrate: (persistedState: any, version) => {
				if (version === 0) {
					if (persistedState.periodData) {
						persistedState.periodData.schedules = [persistedState.periodData.schedule]
						delete persistedState.periodData.schedule
					}
				}

				return persistedState
			}
		}
	)
)