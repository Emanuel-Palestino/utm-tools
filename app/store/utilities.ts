import { create } from "zustand"
import { persist } from "zustand/middleware"


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
		}
	)

)