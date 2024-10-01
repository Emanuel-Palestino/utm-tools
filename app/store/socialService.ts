import { Person } from "@/src/models/Person"
import { GovernmentAgency } from "@/src/models/social_service/GovernmentAgency"
import { Activity, SocialServicePeriod } from "@/src/models/social_service/SocialServicePeriod"
import { SocialServiceStudent } from "@/src/models/social_service/SocialServiceStudent"
import { create } from "zustand"
import { persist } from "zustand/middleware"
import { createStorage } from "../utils/constants"
import { PartialReport } from "@/src/models/PartialReport"


interface SocialServiceStore {
	isPersonalDataComplete: boolean
	personalData: Person | undefined

	isStudentDataComplete: boolean
	studentData: SocialServiceStudent | undefined

	isPeriodDataComplete: boolean
	periodData: SocialServicePeriod | undefined

	isActivitiesDataComplete: boolean
	activitiesData: Activity[] | undefined

	isGovernmentAgencyDataComplete: boolean
	governmentAgencyData: GovernmentAgency | undefined

	reports: { [key: string]: PartialReport }

	setPersonalData: (personalData: Person) => void
	setStudentData: (studentData: SocialServiceStudent) => void
	setPeriodData: (periodData: SocialServicePeriod) => void
	setActivitiesData: (activitiesData: Activity[]) => void
	setGovernmentAgencyData: (governmentAgencyData: GovernmentAgency) => void

	setReport: (key: string, report: PartialReport) => void

	documentsDownloaded: { [key: string]: boolean }
	setDocumentDownloaded: (key: string, value: boolean) => void
}

export const useSocialServiceStore = create<SocialServiceStore>()(
	persist(
		(set, get) => ({
			isPersonalDataComplete: false,
			personalData: undefined,

			isStudentDataComplete: false,
			studentData: undefined,

			isPeriodDataComplete: false,
			periodData: undefined,

			isActivitiesDataComplete: false,
			activitiesData: undefined,

			isGovernmentAgencyDataComplete: false,
			governmentAgencyData: undefined,

			reports: {},

			setPersonalData: (personalData: Person) => set(() => ({ personalData, isPersonalDataComplete: true })),

			setStudentData: (studentData: SocialServiceStudent) => set(() => ({ studentData, isStudentDataComplete: true })),

			setPeriodData: (periodData: SocialServicePeriod) => set(() => ({ periodData, isPeriodDataComplete: true })),

			setActivitiesData: (activitiesData: Activity[]) => set(() => ({ activitiesData, isActivitiesDataComplete: true })),

			setGovernmentAgencyData: (governmentAgencyData: GovernmentAgency) => set(() => ({ governmentAgencyData, isGovernmentAgencyDataComplete: true })),

			setReport: (key, report) => {
				set(() => ({ reports: { ...get().reports, [key]: report } }))
			},

			documentsDownloaded: {},
			setDocumentDownloaded(key, value) {
				set(() => ({ documentsDownloaded: { ...get().documentsDownloaded, [key]: value } }))
			}
		}),
		{
			name: 'social-service-storage',
			skipHydration: true,
			storage: createStorage<SocialServiceStore>(),
			version: 1,
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