import { FC } from "react"

interface PDFWrapperProps {
	children: React.ReactNode
	target: React.MutableRefObject<null>
	opacity?: number
}

export const PDFWrapper: FC<PDFWrapperProps> = ({ children, target, opacity = 0 }) => {

	return (
		<div
			className="w-[740px] h-[957.56px] overflow-hidden fixed inset-0 pointer-events-none origin-top-left"
			style={{ opacity: opacity }}
		>
			<div className="pb-1 w-full" ref={target}>
				{children}
			</div>
		</div>

	)

}