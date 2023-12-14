import Image from "next/image"
import logo from '@/public/UTMEscudo.png'
import { FC } from "react"


interface HeaderProps {
	title: string
	landscape?: boolean
}

export const Header: FC<HeaderProps> = ({ title, landscape = false }) => {

	return (
		<div className="px-2 w-full flex gap-6 items-center">
			<Image width={100} height={100} src={logo} alt="logo" className="flex-shrink-0 basis-[130px]" />
			<div
				className="text-center"
				style={{ fontSize: landscape ? '19px' : '15px' }}
			>
				<div className="flex">
					<div
						className="w-0 h-0 border-r-[50px] border-r-[#b3b2b2] border-b-transparent"
						style={{ borderBottomWidth: landscape ? '80px' : '60px' }}
					>
					</div>
					<p
						className="text-right font-bold bg-[#b3b2b2] p-2 text-white"
						style={{ paddingLeft: landscape ? '24px' : '16px', paddingRight: landscape ? '24px' : '16px' }}
					>
						COORDINACIÓN DE ESTANCIAS PROFESIONALES, SERVICIO SOCIAL Y VIAJES DE PRÁCTICAS ESCOLARES
					</p>
				</div>
				<p className="text-center font-semibold mt-4">{title}</p>
			</div>
		</div>
	)

}