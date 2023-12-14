import { FC } from "react"

interface PDFWrapperProps {
	children: React.ReactNode
	target: React.MutableRefObject<null>
	opacity?: number
	landscape?: boolean
}

export const PDFWrapper: FC<PDFWrapperProps> = ({ children, target, opacity = 0, landscape = false }) => {

	return (
		<div
			className="overflow-hidden fixed inset-0 pointer-events-none origin-top-left"
			style={{
				opacity: opacity,
				width: landscape ? '980px' : '740px',
				height: landscape ? '740px' : '980px'
			}}
		>
			<div className="w-full h-full" ref={target}>
				{children}
			</div>
		</div>

	)

}