import { Company } from '@/src/models/Company'
import { InternshipPeriod } from '@/src/models/InternshipPeriod'
import { InternshipStudent } from '@/src/models/InternshipStudent'
import { Person } from '@/src/models/Person'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'


interface InternshipStore {
	isPersonalDataComplete: boolean
	personalData: Person | undefined

	isStudentDataComplete: boolean
	studentData: InternshipStudent | undefined

	isPeriodDataComplete: boolean
	periodData: InternshipPeriod | undefined

	isCompanyDataComplete: boolean
	companyData: Company | undefined

	setPersonalData: (personalData: Person) => void
	setStudentData: (studentData: InternshipStudent) => void
	setPeriodData: (periodData: InternshipPeriod) => void
	setCompanyData: (companyData: Company) => void
}

export const useInternshipStore = create<InternshipStore>()(
	persist(
		set => {
			return ({
				isPersonalDataComplete: false,
				personalData: undefined,

				isStudentDataComplete: false,
				studentData: undefined,

				isPeriodDataComplete: false,
				periodData: undefined,

				isCompanyDataComplete: false,
				companyData: undefined,

				setPersonalData: (personalData: Person) => set(() => ({ personalData, isPersonalDataComplete: true })),

				setStudentData: (studentData: InternshipStudent) => set(() => ({ studentData, isStudentDataComplete: true })),

				setPeriodData: (periodData: InternshipPeriod) => set(() => ({ periodData, isPeriodDataComplete: true })),

				setCompanyData: (companyData: Company) => set(() => ({ companyData, isCompanyDataComplete: true }))
			})
		},
		{
			name: 'internship-storage',
			skipHydration: true
		}
	)
)