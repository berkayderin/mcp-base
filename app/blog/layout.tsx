import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
	title: 'Blog | Model Context Protocol | MCP',
	description:
		'Discover the latest handpicked blog entries to get started.'
}

const BlogLayout = ({
	children
}: Readonly<{
	children: React.ReactNode
}>) => {
	return <div>{children}</div>
}

export default BlogLayout
