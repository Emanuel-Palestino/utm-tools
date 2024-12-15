'use client'
import { ExportData } from "@app/_components/ExportData"
import { ImportData } from "@app/_components/ImportData"
import { useSocialServiceStore } from "@app/_store/socialService"

export const Utilities = () => {
	const data = useSocialServiceStore()

	return (
		<div className="flex gap-4 items-center">
			<ExportData data={data} filename="herramientasutm-servicio_social_data" />
			<ImportData setData={data.setData} />
		</div>
	)
}