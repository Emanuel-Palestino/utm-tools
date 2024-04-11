import SuperJSON from "superjson"
import { PersistStorage } from "zustand/middleware"

// Months start at 0
export const INTERNSHIP_PERIODS = [
	{
		startDate: new Date(2024, 6, 1),
		endDate: new Date(2024, 7, 16)
	},
	{
		startDate: new Date(2024, 6, 8),
		endDate: new Date(2024, 7, 23)
	},
	{
		startDate: new Date(2024, 6, 15),
		endDate: new Date(2024, 7, 30)
	},
	{
		startDate: new Date(2024, 6, 22),
		endDate: new Date(2024, 8, 6)
	},
	{
		startDate: new Date(2024, 6, 29),
		endDate: new Date(2024, 8, 13)
	}
]


export const createStorage = <T>() => {
	const storage: PersistStorage<T> = {
		getItem: (name) => {
			const str = localStorage.getItem(name)
			if (!str) return null
			return SuperJSON.parse(str)
		},
		setItem: (name, value) => {
			localStorage.setItem(name, SuperJSON.stringify(value))
		},
		removeItem: (name) => localStorage.removeItem(name)
	}

	return storage
}