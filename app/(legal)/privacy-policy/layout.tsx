import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Privacy Policy | Model Context Protocol | MCP',
	description:
		'Discover the latest handpicked blog entries to get started.'
}

const PrivacyPolicyLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <div>{children}</div>
}

export default PrivacyPolicyLayout
