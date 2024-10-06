import type { Metadata } from 'next'
import '@/app/global.css'
import { Analytics } from '@vercel/analytics/react'
import { Navigation } from './ui/Navigation'


export const metadata: Metadata = {
	title: {
		default: 'Herramientas UTM',
		template: '%s | Herramientas UTM',
	},
	description: 'Documentación de servicio social y estancias profesionales de la UTM. Formatos y plantillas de documentos y otras herramientas Universidad Tecnológica de la Mixteca.',
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
		'utm prácticas profesionales',
		'universidad de la mixteca',
		'universidad de oaxaca'
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
			</body>
		</html>
	)
}
