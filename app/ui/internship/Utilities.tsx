'use client'
import { useInternshipStore } from "@app/store/internship"
import { ExportData } from "@app/ui/ExportData"
import { ImportData } from "@app/ui/ImportData"

export const Utilities = () => {
	const data = useInternshipStore()

	return (
		<div className="flex gap-4 items-center">
			<ExportData data={data} filename="herramientasutm-estancias_profesionales_data" />
			<ImportData setData={data.setData} />
		</div>
	)
}