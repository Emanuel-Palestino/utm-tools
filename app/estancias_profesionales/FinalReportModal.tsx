import { useInternshipStore } from "@app/_store/internship"
import { usePDF } from "@app/_lib/hooks/usePDF"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import dynamic from "next/dynamic"
import { FC } from "react"
import { Controller, useForm } from "react-hook-form"
import { Textarea } from "@nextui-org/input"
import { generateFinalReportText } from "@app/_lib/serverActions"
import { useUtilitiesStore } from "@app/_store/utilities"
import { GenerateWithAIIcon } from "@app/_components/icons/GenerateWithAIIcon"

const PDFWrapper = dynamic(() => import('@app/_components/PDFWrapper').then(mod => mod.PDFWrapper))
const FinalReport = dynamic(() => import('@app/_docs/internship/FinalReport'))


interface FinalReportModalProps {
	isOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}

const FinalReportModal: FC<FinalReportModalProps> = ({ isOpen, onOpenChange }) => {

	const {
		periodData,
		companyData,
		personalData,
		studentData,
		reports,
		setDocumentDownloaded
	} = useInternshipStore()

	const internshipData = {
		period: periodData!,
		company: companyData!,
		person: personalData!,
		student: studentData!
	}

	const {
		handleSubmit,
		control,
		setValue,
		watch
	} = useForm<{ description: string }>({
		defaultValues: {
			description: ''
		}
	})

	const { aiUsageIncrement, aiUsageAllowed } = useUtilitiesStore()

	const generateFinalReport = async () => {
		if (!aiUsageAllowed) {
			console.error('Se ha alcanzado el límite de uso de la IA')
			return
		}

		if (!reports['weekly-report-1'] || !reports['weekly-report-2'] || !reports['weekly-report-3']) {
			console.error('No se han registrado todos los reportes parciales')
			return
		}

		const { error, message } = await generateFinalReportText([
			reports['weekly-report-1'].description,
			reports['weekly-report-2'].description,
			reports['weekly-report-3'].description
		])

		if (error) {
			console.error(error)
			return
		}

		aiUsageIncrement()
		setValue('description', message || '')
	}

	const { target: finalReportTarget, createPDF: createFinalReport } = usePDF('Reporte Final')

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="xl">
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Reporte Final de Actividades</ModalHeader>

							<ModalBody>
								<form
									id="final_report_form"
									onSubmit={handleSubmit(async () => {
										await createFinalReport()
										setDocumentDownloaded('final-report', true)
										onClose()
									})}
								>
									<Controller
										name="description"
										control={control}
										render={({ field }) => (
											<Textarea
												minRows={20}
												size="lg"
												label="Descripción de actividades"
												isRequired
												endContent={
													<Button
														onPress={generateFinalReport}
														className="absolute top-2 right-2"
														color="primary"
														isDisabled={!aiUsageAllowed}
														disabled={!aiUsageAllowed}
														isIconOnly
													>
														<GenerateWithAIIcon />
													</Button>
												}
												classNames={{ innerWrapper: 'pr-6' }}
												{...field}
											/>
										)}

									/>
								</form>
							</ModalBody>

							<ModalFooter>
								<Button color="danger" variant="light" onPress={onClose}>
									Cancelar
								</Button>

								<Button
									color="primary"
									form="final_report_form"
									type="submit"
								>
									Descargar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal >

			<PDFWrapper target={finalReportTarget}>
				<FinalReport data={internshipData} informContent={watch('description')} />
			</PDFWrapper>
		</>
	)

}

export default FinalReportModal