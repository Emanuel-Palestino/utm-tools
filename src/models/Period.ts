export type Period = {
	startDate: number // timestamp in milliseconds
	endDate: number // timestamp in milliseconds
	schedules: number[][]
	totalHours: number
}