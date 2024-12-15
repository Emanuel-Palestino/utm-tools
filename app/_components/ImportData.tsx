"use client"
import { Button } from "@nextui-org/button"
import { useRef } from "react"

export const ImportData = <T,>({ setData }: { setData: (data: T) => void }) => {
  const fileInput = useRef<HTMLInputElement>(null)

  const importData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      let data
      try {
        data = JSON.parse(e.target?.result as string)
      } catch (error) {
        console.error("Error reading file, invalid data")
        return
      }
      setData(data)
      console.log("Data imported")
    }

    console.log("Reading file...")
    reader.readAsText(file)
  }

  return (
    <div>
      <Button color="default" onClick={() => fileInput.current?.click()}>
        Importar Información
      </Button>
      <input ref={fileInput} type="file" hidden onChange={importData} />
    </div>
  )
}
