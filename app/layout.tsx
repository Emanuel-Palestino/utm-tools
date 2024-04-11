import type { Metadata } from 'next'
import '@/app/global.css'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Navigation } from './ui/Navigation'


export const metadata: Metadata = {
	title: {
		default: 'Herramientas UTM',
		template: '%s | Herramientas UTM',
	},
	description: 'Generación de documentación de servicio social, estancias profesionales de la UTM y otras herramientas. Universidad Tecnológica de la Mixteca.',
	keywords: [
		'utm',
		'servicio social',
		'estancias profesionales',
		'prácticas profesionales',
		'herramientas utm',
		'universidad tecnológica de la mixteca',
		'utm oaxaca',
		'utm huajuapan',
		'utm oaxaca huajuapan',
		'utm servicio social',
		'utm estancias profesionales',
		'utm prácticas profesionales'
	]
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="es" className="light">
			<body>
				<Navigation />
				{children}
				<Analytics />
				<SpeedInsights />
			</body>
		</html>
	)
}
