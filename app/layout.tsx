import type { Metadata } from 'next'
import '@/app/global.css'
import { Analytics } from '@vercel/analytics/react'


export const metadata: Metadata = {
	title: 'UTM Tools',
	description: 'UTM tools',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="es" className="light">
			<body>
				{children}
				<Analytics />
			</body>
		</html>
	)
}
