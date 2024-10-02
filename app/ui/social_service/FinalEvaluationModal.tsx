import { useSocialServiceStore } from "@/app/store/socialService"
import { usePDF } from "@/src/hooks/usePDF"
import { Button } from "@nextui-org/button"
import { Textarea } from "@nextui-org/input"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal"
import dynamic from "next/dynamic"
import { FC } from "react"
import { useForm } from "react-hook-form"

const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))
const FinalEvaluation = dynamic(() => import('@/app/printingFormats/social_service/FinalEvaluation').then(mod => mod.FinalEvaluation))


interface FinalEvaluationModalProps {
	isOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}

const FinalEvaluationModal: FC<FinalEvaluationModalProps> = ({ isOpen, onOpenChange }) => {

	/* Social Service data in local storage */
	const { socialServiceData, setEvaluationDownloaded, description, setDescription } = useSocialServiceStore(state => ({
		socialServiceData: {
			person: state.personalData!,
			student: state.studentData!,
			period: state.periodData!,
			governmentAgency: state.governmentAgencyData!,
		},
		setEvaluationDownloaded: () => state.setDocumentDownloaded('final-evaluation', true),
		description: state.finalEvaluationDescription,
		setDescription: state.setFinalEvaluationDescription
	}))

	const {
		handleSubmit,
		register,
		watch
	} = useForm<{ description: string }>({
		defaultValues: { description: '' },
		values: { description: description || '' }
	})

	const { target, createPDF } = usePDF('Reporte Final')

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="md">
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Reporte de Evaluación Final</ModalHeader>

							<ModalBody>
								<form
									id="report_form"
									className="flex flex-col gap-4"
									onSubmit={handleSubmit(async data => {
										setDescription(data.description)
										setEvaluationDownloaded()
										await createPDF()
										onClose()
									})}
								>
									<Textarea
										minRows={4}
										label="Breve descripción de las actividades realizadas"
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
									form="report_form"
									type="submit"
								>
									Descargar
								</Button>
							</ModalFooter>
						</>
					)}
				</ModalContent>
			</Modal >

			<PDFWrapper target={target}>
				<FinalEvaluation
					person={socialServiceData.person}
					student={socialServiceData.student}
					period={socialServiceData.period}
					governmentAgency={socialServiceData.governmentAgency}
					formatNumber={socialServiceData.period.months + 1}
					description={watch('description')}
				/>
			</PDFWrapper>
		</>
	)

}

export default FinalEvaluationModal