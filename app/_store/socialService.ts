import { PartialReport, Person } from "@app/_lib/types/Common"
import {
  Activity,
  GovernmentAgency,
  SocialServicePeriod,
  SocialServiceStudent,
} from "@app/_lib/types/SocialService"
import { create } from "zustand"
import { persist } from "zustand/middleware"

type SocialServiceStore = {
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

  finalEvaluationDescription: string | undefined
  documentsDownloaded: { [key: string]: boolean }
}

type SocialServiceActions = {
  setPersonalData: (personalData: Person) => void
  setStudentData: (studentData: SocialServiceStudent) => void
  setPeriodData: (periodData: SocialServicePeriod) => void
  setActivitiesData: (activitiesData: Activity[]) => void
  setGovernmentAgencyData: (governmentAgencyData: GovernmentAgency) => void

  setReport: (key: string, report: PartialReport) => void

  setFinalEvaluationDescription: (description: string) => void
  setDocumentDownloaded: (key: string, value: boolean) => void
  setData: (data: SocialServiceStore) => void
}

type SocialServiceState = SocialServiceStore & SocialServiceActions

export const useSocialServiceStore = create<SocialServiceState>()(
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

      finalEvaluationDescription: undefined,

      documentsDownloaded: {},

      setPersonalData: (personalData: Person) =>
        set(() => ({ personalData, isPersonalDataComplete: true })),

      setStudentData: (studentData: SocialServiceStudent) =>
        set(() => ({ studentData, isStudentDataComplete: true })),

      setPeriodData: (periodData: SocialServicePeriod) =>
        set(() => ({ periodData, isPeriodDataComplete: true })),

      setActivitiesData: (activitiesData: Activity[]) =>
        set(() => ({ activitiesData, isActivitiesDataComplete: true })),

      setGovernmentAgencyData: (governmentAgencyData: GovernmentAgency) =>
        set(() => ({
          governmentAgencyData,
          isGovernmentAgencyDataComplete: true,
        })),

      setReport: (key, report) => {
        set(() => ({ reports: { ...get().reports, [key]: report } }))
      },

      setDocumentDownloaded(key, value) {
        set(() => ({
          documentsDownloaded: { ...get().documentsDownloaded, [key]: value },
        }))
      },

      setFinalEvaluationDescription: (description: string) =>
        set(() => ({ finalEvaluationDescription: description })),

      setData: (data: SocialServiceStore) => set(data),
    }),
    {
      name: "social-service-storage",
      skipHydration: true,
      version: 2,
      migrate: (persistedState: any, version) => {
        if (version === 0) {
          if (persistedState.periodData) {
            persistedState.periodData.schedules = [
              persistedState.periodData.schedule,
            ]
            delete persistedState.periodData.schedule
          }
        }

        return persistedState
      },
    },
  ),
)
