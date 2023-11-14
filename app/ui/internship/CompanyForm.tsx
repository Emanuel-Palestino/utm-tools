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
		register,
		control,
		handleSubmit,
	} = useForm<Company>()

	const onSubmit: SubmitHandler<Company> = (data) => console.log(data)

	return (
		<Card>
			<CardBody>
				<form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-4">
					<Input type="text" {...register('companyName')} label="Nombre de la Empresa" isRequired />

					<Input type="text" {...register('industry')} label="Giro de la Empresa" isRequired />

					<Select
						label="Sector"
						isRequired
						{...register('sector')}
					>
						<SelectItem key={CompanySector.PUBLIC} value={CompanySector.PUBLIC}>Público</SelectItem>
						<SelectItem key={CompanySector.PRIVATE} value={CompanySector.PRIVATE}>Privado</SelectItem>
						<SelectItem key={CompanySector.SOCIAL} value={CompanySector.SOCIAL}>Social</SelectItem>
					</Select>

					<Controller
						name="isInternacional"
						control={control}
						render={({ field }) => (<Switch {...field} value={String(field.value)}>¿Es Internacional?</Switch>)}
					/>

					<Input
						type="number"
						inputMode="tel"
						label="Número Telefónico"
						description="Número telefónico o celular."
						isRequired
						{...register('phone')}
					/>

					<Input type="email" inputMode="email" {...register('email')} label="Correo Electrónico" isRequired />

					<Input type="text" {...register('address')} label="Dirección" isRequired />

					<Input type="text" inputMode="url" {...register('webPage')} label="Página Web" />

					<Input type="text" {...register('companyContact')} label="Contacto de la Empresa" isRequired />

					<Input
						type="text"
						label="Nombre a quien se le dirigirá el oficio"
						description="Nombre del titular de la empresa al que se le dirigirá el oficio de presentación. Debe ser sólo una persona."
						isRequired
						{...register('recipientName')}
					/>

					<Input
						type="text"
						label="Cargo de la Persona"
						description="Cargo del titular de la empresa al que se le dirigirá el oficio de presentación."
						isRequired
						{...register('recipientPosition')}
					/>

					<Input type="text" {...register('inAtentionOf')} label="En atención a" />


					<div className="col-span-2 flex justify-center mt-2">
						<Button className="bg-utm-container-3 text-utm-on-container-3" type="submit">Guardar</Button>
					</div>
				</form>
			</CardBody>
		</Card>
	)

}