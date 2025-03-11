import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Servers | Model Context Protocol | MCP',
	description:
		'Discover the latest handpicked servers to get started.'
}

const ServersLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <div>{children}</div>
}

export default ServersLayout
