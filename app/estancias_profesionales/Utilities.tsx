'use client'
import { useInternshipStore } from "@app/_store/internship"
import { ExportData } from "@app/_components/ExportData"
import { ImportData } from "@app/_components/ImportData"

export const Utilities = () => {
	const data = useInternshipStore()

	return (
		<div className="flex gap-4 items-center">
			<ExportData data={data} filename="herramientasutm-estancias_profesionales_data" />
			<ImportData setData={data.setData} />
		</div>
	)
}