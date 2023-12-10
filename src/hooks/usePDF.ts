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

export const usePDF = (filename: string, landscape: boolean = false) => {

	const target = useRef(null)

	if (landscape)
		options.page = { ...options.page, orientation: 'landscape' }

	const createPDF = () => {
		generatePDF(target, { filename, ...options })
	}

	return { target, createPDF }
}