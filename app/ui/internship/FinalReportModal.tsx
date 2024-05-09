import { useInternshipStore } from "@/app/store/internship"
import { usePDF } from "@/src/hooks/usePDF"
import { PartialReport } from "@/src/models/PartialReport"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import dynamic from "next/dynamic"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { Textarea } from "@nextui-org/input"

const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))
const FinalReport = dynamic(() => import('@/app/printingFormats/internship/FinalReport').then(mod => mod.FinalReport))


interface FinalReportModalProps {
	isOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}

export const FinalReportModal: FC<FinalReportModalProps> = ({ isOpen, onOpenChange }) => {

	const { internshipData, setDocumentDownloaded } = useInternshipStore(state => ({
		internshipData: {
			period: state.periodData!,
			company: state.companyData!,
			person: state.personalData!,
			student: state.studentData!
		},
		setDocumentDownloaded: () => state.setDocumentDownloaded('final-report', true)
	}))
	const {
		handleSubmit,
		register,
		watch
	} = useForm<PartialReport>({
		defaultValues: {
			formatNumber: 1,
			startDate: new Date(),
			endDate: new Date(),
			hours: 0,
			description: '',
			comments: ''
		}
	})

	const { target: finalReportTarget, createPDF: createFinalReport } = usePDF('Reporte Final')

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Reporte Final de Actividades</ModalHeader>

							<ModalBody>
								<form
									id="final_report_form"
									onSubmit={handleSubmit(async () => {
										await createFinalReport()
										setDocumentDownloaded()
										onClose()
									})}
								>
									<Textarea
										minRows={16}
										label="Descripción de actividades"
										isRequired
										{...register('description')}
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