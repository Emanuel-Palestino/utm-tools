import { useRef } from 'react'
import generatePDF, { Margin, Options, Resolution } from 'react-to-pdf'


const options: Options = {
	method: 'save',
	resolution: Resolution.MEDIUM,
	page: {
		margin: Margin.MEDIUM,
		format: 'letter',
		orientation: 'portrait'
	}
}

export const usePDF = (filename: string) => {

	const target = useRef(null)

	const createPDF = () => {
		generatePDF(target, { filename, ...options })
	}

	return { target, createPDF }
}