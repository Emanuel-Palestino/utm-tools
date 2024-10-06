import { Period } from "./Period"


export type InternshipPeriod = Period & {
	workArea: string				// Área de trabajo
	projectName: string				// Nombre del proyecto
	periodNumber: number			// Número de periodo
	customPeriod: boolean			// Periodo personalizado
	reportFrecuency: number			// Frecuencia de reporte
}