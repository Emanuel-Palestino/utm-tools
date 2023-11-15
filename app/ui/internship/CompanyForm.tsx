import { Card, CardBody } from "@nextui-org/card"
import { Input } from "@nextui-org/input"
import { Switch } from "@nextui-org/switch"
import { Select, SelectItem } from "@nextui-org/select"
import { Button } from "@nextui-org/button"
import { Company } from "@/src/models/Company"
import { CompanySector } from "@/src/models/CompanySector"
import { Controller, SubmitHandler, useForm } from "react-hook-form"


export const CompanyForm = () => {

	const {
		control,
		handleSubmit,
	} = useForm<Company>({
		defaultValues: {
			inAtentionOf: '',
			webPage: ''
		}
	})

	const onSubmit: SubmitHandler<Company> = data => {
		localStorage.setItem('company', JSON.stringify(data))
	}

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
					<Controller
						name="companyName"
						control={control}
						render={({ field }) => (
							<Input
								type="text"
								label="Nombre de la Empresa"
								isRequired
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
							>
								<SelectItem key={CompanySector.PUBLIC} value={CompanySector.PUBLIC}>Público</SelectItem>
								<SelectItem key={CompanySector.PRIVATE} value={CompanySector.PRIVATE}>Privado</SelectItem>
								<SelectItem key={CompanySector.SOCIAL} value={CompanySector.SOCIAL}>Social</SelectItem>
							</Select>
						)}
					/>

					<Controller
						name="isInternacional"
						control={control}
						render={({ field }) => (<Switch {...field} value={String(field.value)}>¿Es Internacional?</Switch>)}
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
								{...field}
							/>
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
							<Input
								type="text"
								label="En atención a"
								{...field}
							/>
						)}
					/>

					<div className="col-span-2 flex justify-center mt-2">
						<Button className="bg-utm-container-3 text-utm-on-container-3 w-32" type="submit">Guardar</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}