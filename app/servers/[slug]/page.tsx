import React from 'react'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Badge } from '@/components/ui/badge'
import { servers } from '@/data/servers'

const ServerDetailPage = ({
	params
}: {
	params: { slug: string }
}) => {
	const server = servers.find((server) => server.slug === params.slug)

	if (!server) {
		notFound()
	}

	return (
		<div className="container mx-auto px-6 py-8 max-w-6xl border border-gray-200 rounded-lg my-10">
			<div className="flex items-center gap-4 mb-8">
				<div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center text-2xl">
					{server.icon}
				</div>
				<div>
					<h1 className="text-3xl font-bold">{server.title}</h1>
					<p className="text-gray-600">{server.description}</p>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
				<div className="bg-gray-50 p-4 rounded-lg">
					<div className="text-gray-600 text-sm">Category</div>
					<div className="text-xl font-semibold">
						{server.category}
					</div>
				</div>
				<div className="bg-gray-50 p-4 rounded-lg">
					<div className="text-gray-600 text-sm">Author</div>
					<div className="text-xl font-semibold">{server.author}</div>
				</div>
				<div className="bg-gray-50 p-4 rounded-lg">
					<div className="text-gray-600 text-sm">Published Date</div>
					<div className="text-xl font-semibold">{server.date}</div>
				</div>
			</div>

			<div className="mb-8">
				<div className="flex items-center gap-2 mb-4">
					<h2 className="text-xl font-semibold">Information</h2>
				</div>

				<div className="prose prose-lg max-w-none">
					<ReactMarkdown>{server.content}</ReactMarkdown>
				</div>
			</div>

			<div className="flex flex-wrap gap-2 mb-8">
				{server.tags.map((tag) => (
					<Badge key={tag} variant="secondary">
						#{tag}
					</Badge>
				))}
			</div>
		</div>
	)
}

export default ServerDetailPage
