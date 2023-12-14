import { format } from "date-fns"
import es from "date-fns/locale/es"


export const formatedDate = (date: Date) => {
	const day = format(date, 'dd', { locale: es })
	const month = format(date, 'MMMM', { locale: es })
	const year = format(date, 'yyyy', { locale: es })

	return `${day} de ${month.charAt(0).toUpperCase()}${month.slice(1)} de ${year}`
}

export const formatSchedule = (hours: number[]) => {
	const [start, end] = hours
	const formattedStart = String(start).padStart(2, '0')
	const formattedEnd = String(end).padStart(2, '0')

	return `${formattedStart}:00 hrs - ${formattedEnd}:00 hrs`
}