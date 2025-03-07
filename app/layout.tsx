import type { Metadata } from 'next'
import { IBM_Plex_Sans } from 'next/font/google'
import './globals.css'

const ibmPlexSans = IBM_Plex_Sans({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	variable: '--font-ibm-plex-sans'
})

export const metadata: Metadata = {
	title: 'MCP | model context protocol',
	description:
		'Discover and list high-performance Model Context Protocol servers. The premier platform for AI model deployment, offering a comprehensive directory of MCP servers with real-time availability, performance metrics, and seamless integration capabilities.'
}

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<body
				className={`${ibmPlexSans.variable} font-sans antialiased`}
			>
				{children}
			</body>
		</html>
	)
}
