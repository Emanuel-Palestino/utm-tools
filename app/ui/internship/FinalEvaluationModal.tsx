import { useInternshipStore } from "@/app/store/internship"
import { usePDF } from "@/src/hooks/usePDF"
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal"
import { Button } from "@nextui-org/button"
import dynamic from "next/dynamic"
import { FC } from "react"
import { useForm } from "react-hook-form"
import { Textarea } from "@nextui-org/input"

const PDFWrapper = dynamic(() => import('@/app/ui/PDFWrapper').then(mod => mod.PDFWrapper))
const FinalEvaluation = dynamic(() => import('@/app/printingFormats/internship/FinalEvaluation'))


interface FinalEvaluationProps {
	isOpen: boolean
	onOpenChange: (isOpen: boolean) => void
}

const FinalEvaluationModal: FC<FinalEvaluationProps> = ({ isOpen, onOpenChange }) => {

	const {
		periodData,
		companyData,
		personalData,
		studentData,
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
		register,
		watch
	} = useForm<{ description: string }>({
		defaultValues: {
			description: ''
		}
	})

	const { target, createPDF } = usePDF('Reporte de Evaluación Final')

	return (
		<>
			<Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
				<ModalContent>
					{onClose => (
						<>
							<ModalHeader>Reporte de Evaluación Final</ModalHeader>

							<ModalBody>
								<form
									id="final_evaluation_form"
									onSubmit={handleSubmit(async () => {
										await createPDF()
										setDocumentDownloaded('final-evaluation', true)
										onClose()
									})}
								>
									<Textarea
										minRows={4}
										label="Descripción breve de actividades asignadas"
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
									form="final_evaluation_form"
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
				<FinalEvaluation data={internshipData} description={watch('description')} />
			</PDFWrapper>
		</>
	)

}

export default FinalEvaluationModal