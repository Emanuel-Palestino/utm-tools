export type PartialReport = {
	formatNumber: number
	startDate: number // timestamp in milliseconds
	endDate: number // timestamp in milliseconds
	hours: number
	description: string
	comments?: string
}