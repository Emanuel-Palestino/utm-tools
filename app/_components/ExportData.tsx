"use client"
import { Button } from "@nextui-org/button"

export const ExportData = <T,>({
  data,
  filename,
}: {
  data: T
  filename: string
}) => {
  const exportData = () => {
    const dataStr = JSON.stringify(data, null, 2)
    const dataUri =
      "data:application/json;charset=utf-8," + encodeURIComponent(dataStr)
    const exportFileDefaultName = filename

    const linkElement = document.createElement("a")
    linkElement.setAttribute("href", dataUri)
    linkElement.setAttribute("download", exportFileDefaultName)
    linkElement.click()
  }

  return (
    <>
      <Button color="default" onClick={exportData}>
        Exportar Información
      </Button>
    </>
  )
}
