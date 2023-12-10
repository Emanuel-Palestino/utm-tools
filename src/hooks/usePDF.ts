import { useRef } from 'react'
import generatePDF, { Margin, Options, Resolution } from 'react-to-pdf'


const options: Options = {
	method: 'save',
	resolution: Resolution.NORMAL,
	page: {
		margin: Margin.MEDIUM,
		format: 'letter',
		orientation: 'portrait'
	}
}

export const usePDF = (filename: string, landscape: boolean = false) => {
	const target = useRef(null)

	const createPDF = () => {
		if (landscape) {
			const pageOptions = { ...options.page }
			pageOptions.orientation = 'landscape'
			generatePDF(target, { filename, ...options, page: pageOptions })
		} else
			generatePDF(target, { filename, ...options })
	}

	return { target, createPDF }
}