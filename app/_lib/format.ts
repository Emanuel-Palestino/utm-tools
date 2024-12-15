import { format } from "date-fns"
import { es } from "date-fns/locale/es"

export const formatedDate = (dateTs: number) => {
  // ñ is added to capitalize the month later
  const formattedDate = format(dateTs, "dd 'de' 'ñ'MMMM 'de' yyyy", {
    locale: es,
  })
  // Capitalize the month
  return formattedDate.replace(/ñ(.)/, (letter) => letter[1].toUpperCase())
}

export const formatSchedule = (hours: number[]) => {
  const [start, end] = hours
  const formattedStart = String(start).padStart(2, "0")
  const formattedEnd = String(end).padStart(2, "0")

  return `${formattedStart}:00hrs - ${formattedEnd}:00hrs`
}
