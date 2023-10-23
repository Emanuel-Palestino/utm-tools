import { Transition } from "../../components/Transition"
import { PresentationLetter } from "../../printingFormats/internship/PresentationLetter"
import { usePDF } from "../../hooks/usePDF"
import { PDFWrapper } from "../../components/PDFWrapper"


export const Internship = () => {
	const { target, createPDF } = usePDF('internship')

	return (
		<Transition>
			<div className="bg-utm-container-2 h-screen">
				<h1 className="text-2xl">Prácticas Profesionales</h1>
				<button onClick={createPDF}>Generar PDF</button>
				<PDFWrapper target={target}>
					<PresentationLetter />
				</PDFWrapper>
			</div>
		</Transition>
	)

}