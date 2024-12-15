import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Switch } from "@nextui-org/switch"
import { Select, SelectItem } from "@nextui-org/select"
import { Button } from "@nextui-org/button"
import { Controller, SubmitHandler, useForm } from "react-hook-form"
import { useInternshipStore } from "@app/_store/internship"
import { FC } from "react"
import { Company, CompanySector } from "@app/_lib/types/Iternship"

interface CompanyFormProps {
  nextForm: () => void
}

const CompanyForm: FC<CompanyFormProps> = ({ nextForm }) => {
  const { setCompanyData, companyData } = useInternshipStore()

  const { control, handleSubmit } = useForm<Company>({
    defaultValues: {
      companyName: "",
      industry: "",
      sector: CompanySector.PRIVATE,
      isInternacional: false,
      phone: "",
      email: "",
      address: "",
      state: "",
      webPage: "",
      companyContact: "",
      recipientName: "",
      recipientPosition: "",
      inAtentionOf: "",
    },
    values: companyData,
  })

  const onSubmit: SubmitHandler<Company> = (data) => {
    setCompanyData(data)
    nextForm()
  }

  return (
    <Card>
      <CardBody className="p-4">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-4"
        >
          <Controller
            name="companyName"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="Nombre de la Empresa"
                isRequired
                autoFocus
                {...field}
              />
            )}
          />

          <Controller
            name="industry"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="Giro de la Empresa"
                isRequired
                {...field}
              />
            )}
          />

          <Controller
            name="sector"
            control={control}
            render={({ field }) => (
              <Select
                label="Sector"
                isRequired
                {...field}
                selectedKeys={field.value ? [field.value] : []}
              >
                <SelectItem
                  key={CompanySector.PUBLIC}
                  value={CompanySector.PUBLIC}
                >
                  Público
                </SelectItem>
                <SelectItem
                  key={CompanySector.PRIVATE}
                  value={CompanySector.PRIVATE}
                >
                  Privado
                </SelectItem>
                <SelectItem
                  key={CompanySector.SOCIAL}
                  value={CompanySector.SOCIAL}
                >
                  Social
                </SelectItem>
              </Select>
            )}
          />

          <Controller
            name="isInternacional"
            control={control}
            render={({ field }) => (
              <Switch {...field} value="" isSelected={field.value}>
                ¿Es Internacional?
              </Switch>
            )}
          />

          <Controller
            name="phone"
            control={control}
            render={({ field }) => (
              <Input
                type="number"
                inputMode="tel"
                label="Número Telefónico"
                description="Número telefónico o celular."
                isRequired
                {...field}
              />
            )}
          />

          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <Input
                type="email"
                label="Correo Electrónico"
                isRequired
                {...field}
              />
            )}
          />

          <Controller
            name="address"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="Dirección"
                isRequired
                description="Dirección completa, calle, número, colonia, municipio, estado y código postal."
                {...field}
              />
            )}
          />

          <Controller
            name="state"
            control={control}
            render={({ field }) => (
              <Input type="text" label="Estado de la República" {...field} />
            )}
          />

          <Controller
            name="webPage"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                inputMode="url"
                label="Página Web"
                {...field}
              />
            )}
          />

          <Controller
            name="companyContact"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="Contacto de la Empresa"
                isRequired
                {...field}
              />
            )}
          />

          <Controller
            name="recipientName"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="Nombre a quien se le dirigirá el oficio"
                description="Nombre del titular de la empresa al que se le dirigirá el oficio de presentación. Debe ser sólo una persona."
                isRequired
                {...field}
              />
            )}
          />

          <Controller
            name="recipientPosition"
            control={control}
            render={({ field }) => (
              <Input
                type="text"
                label="Cargo de la Persona"
                description="Cargo del titular de la empresa al que se le dirigirá el oficio de presentación."
                isRequired
                {...field}
              />
            )}
          />

          <Controller
            name="inAtentionOf"
            control={control}
            render={({ field }) => (
              <Input type="text" label="En atención a" {...field} />
            )}
          />

          <div className="flex justify-center mt-2 md:col-span-2">
            <Button className="w-32" color="primary" type="submit">
              {companyData ? "Actualizar" : "Guardar"}
            </Button>
          </div>
        </form>
      </CardBody>
    </Card>
  )
}

export default CompanyForm
