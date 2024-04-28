import { create } from "zustand"
import { persist } from "zustand/middleware"
import { createStorage } from "../utils/constants"


interface UtilitiesStore {
	disclaimerAccepted: boolean
	acceptDisclaimer: () => void
}

export const useUtilitiesStore = create<UtilitiesStore>()(

	persist(
		(set) =>({
			disclaimerAccepted: false,
			acceptDisclaimer: () => set({ disclaimerAccepted: true })
		}),
		{
			name: 'utilities-storage',
			storage: createStorage<UtilitiesStore>()
		}
	)

)