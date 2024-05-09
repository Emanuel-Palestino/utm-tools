import { Company } from '@/src/models/Company'
import { InternshipPeriod } from '@/src/models/InternshipPeriod'
import { InternshipStudent } from '@/src/models/InternshipStudent'
import { Person } from '@/src/models/Person'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createStorage } from '@/app/utils/constants'
import { PartialReport } from '@/src/models/PartialReport'


interface InternshipStore {
	isPersonalDataComplete: boolean
	personalData: Person | undefined

	isStudentDataComplete: boolean
	studentData: InternshipStudent | undefined

	isPeriodDataComplete: boolean
	periodData: InternshipPeriod | undefined

	isCompanyDataComplete: boolean
	companyData: Company | undefined

	reports: ({ [key: string]: PartialReport })

	setPersonalData: (personalData: Person) => void
	setStudentData: (studentData: InternshipStudent) => void
	setPeriodData: (periodData: InternshipPeriod) => void
	setCompanyData: (companyData: Company) => void

	addReport: (key: string, report: PartialReport) => void

	documentsDownloaded: { [key: string]: boolean }
	setDocumentDownloaded: (key: string, value: boolean) => void
}

export const useInternshipStore = create<InternshipStore>()(
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
		}),
		{
			name: 'internship-storage',
			skipHydration: true,
			storage: createStorage<InternshipStore>()
		}
	)
)