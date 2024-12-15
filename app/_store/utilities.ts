import { create } from "zustand"
import { persist } from "zustand/middleware"

const AI_LIMIT = 5

type UtilitiesStore = {
  disclaimerAccepted: boolean
  aiUsageCount: number
  aiUsageAllowed: boolean
}

type UtilitiesActions = {
  acceptDisclaimer: () => void
  aiUsageIncrement: () => void
}

type UtilitiesStoreState = UtilitiesStore & UtilitiesActions

export const useUtilitiesStore = create<UtilitiesStoreState>()(
  persist(
    (set, get) => ({
      disclaimerAccepted: false,
      aiUsageCount: 0,
      aiUsageAllowed: true,

      acceptDisclaimer: () => set({ disclaimerAccepted: true }),
      aiUsageIncrement: () => {
        set({ aiUsageCount: get().aiUsageCount + 1 })

        if (get().aiUsageCount >= AI_LIMIT) {
          set({ aiUsageAllowed: false })
        }
      },
    }),
    {
      name: "utilities-storage",
    },
  ),
)
