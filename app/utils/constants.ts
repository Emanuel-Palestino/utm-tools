import SuperJSON from "superjson"
import { PersistStorage } from "zustand/middleware"

// Months start at 0
export const INTERNSHIP_PERIODS = [
	{
		startDate: new Date(2023, 6, 3),
		endDate: new Date(2023, 7, 18)
	},
	{
		startDate: new Date(2023, 6, 10),
		endDate: new Date(2023, 7, 25)
	},
	{
		startDate: new Date(2023, 6, 17),
		endDate: new Date(2023, 8, 1)
	},
	{
		startDate: new Date(2023, 6, 24),
		endDate: new Date(2023, 8, 8)
	},
	{
		startDate: new Date(2023, 6, 31),
		endDate: new Date(2023, 8, 15)
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