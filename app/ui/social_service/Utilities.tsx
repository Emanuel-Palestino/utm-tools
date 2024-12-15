'use client'
import { ExportData } from "../ExportData"
import { ImportData } from "../ImportData"
import { useSocialServiceStore } from "@app/store/socialService"

export const Utilities = () => {
	const data = useSocialServiceStore()

	return (
		<div className="flex gap-4 items-center">
			<ExportData data={data} filename="herramientasutm-servicio_social_data" />
			<ImportData setData={data.setData} />
		</div>
	)
}