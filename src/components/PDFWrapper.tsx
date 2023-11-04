import { FC } from "react"

interface PDFWrapperProps {
	children: React.ReactNode
	target: React.MutableRefObject<null>
	opacity?: number
}

export const PDFWrapper: FC<PDFWrapperProps> = ({ children, target, opacity = 0 }) => {

	return (
		<div
			className="w-[1920px] h-[2484.48px] fixed inset-0 pointer-events-none origin-top-left"
			style={{ opacity: opacity }}
		>
			<div className="p-1 w-full h-full" ref={target}>
				{children}
			</div>
		</div>

	)

}