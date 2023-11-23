import { Period } from "./Period"


export interface InternshipPeriod extends Period {
	workArea: string				// Área de trabajo
	projectName: string				// Nombre del proyecto
	periodNumber: number			// Número de periodo
	customPeriod: boolean			// Periodo personalizado
	reportFrecuency: number			// Frecuencia de reporte
}