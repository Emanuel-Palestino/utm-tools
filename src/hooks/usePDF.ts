import { useRef } from 'react'
import { Options } from 'react-to-pdf'


const options: Options = {
	method: 'save',
	resolution: 2,
	page: {
		margin: 10,
		format: 'letter',
		orientation: 'portrait'
	}
}

export const usePDF = (filename: string, landscape: boolean = false) => {
	const target = useRef(null)

	const createPDF = async () => {
		const generatePDF = (await import('react-to-pdf')).default

		if (landscape) {
			const pageOptions = { ...options.page }
			pageOptions.orientation = 'landscape'
			generatePDF(target, { filename, ...options, page: pageOptions })
		} else
			generatePDF(target, { filename, ...options })
	}

	return { target, createPDF }
}