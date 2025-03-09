import React from 'react'
import { notFound } from 'next/navigation'
import ReactMarkdown from 'react-markdown'
import { Badge } from '@/components/ui/badge'
import { getServerById } from '@/backend/queries/servers'
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle
} from '@/components/ui/card'
import {
	Star,
	Code,
	ExternalLink,
	ArrowLeft,
	BookOpen
} from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger
} from '@/components/ui/tabs'
import { GridPattern } from '@/components/magicui/grid-pattern'

export default async function ServerDetailPage({
	params
}: {
	params: { slug: string }
}) {
	const serverId = parseInt(params.slug)

	if (isNaN(serverId)) {
		notFound()
	}

	const server = await getServerById(serverId)

	if (!server) {
		notFound()
	}

	let analysisData = null
	try {
		if (server.ai_analysis) {
			const markdownContent = server.ai_analysis
			const jsonMatch = markdownContent.match(
				/```(?:json)?\s*(\{[\s\S]*?\})\s*```/
			)

			if (jsonMatch && jsonMatch[1]) {
				const jsonString = jsonMatch[1]
				analysisData = JSON.parse(jsonString)
			}
		}
	} catch (error) {
		console.error('JSON parsing error:', error)
	}

	return (
		<div className="relative">
			<div className="absolute inset-0 -z-10 overflow-hidden">
				<GridPattern
					width={32}
					height={32}
					x={-1}
					y={-1}
					className="absolute inset-0 h-full w-full fill-gray-50 stroke-gray-100 [mask-image:linear-gradient(to_bottom,white_40%,transparent_70%)]"
					strokeDasharray="1 3"
					strokeWidth={1}
				/>
			</div>

			<div className="container mx-auto px-4 py-12 relative z-10 max-w-7xl">
				<div className="mb-8">
					<Link href="/servers">
						<Button
							variant="ghost"
							className="group flex items-center gap-1 text-gray-500 hover:text-gray-900"
						>
							<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to servers
						</Button>
					</Link>
				</div>

				<div className="bg-gradient-to-br from-orange-50 to-white border border-orange-100 rounded-2xl p-8 mb-10 shadow-sm">
					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
						<div className="flex items-start gap-5">
							<div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-pink-500 rounded-xl flex items-center justify-center text-2xl font-bold text-white shadow-md">
								{server.language
									? server.language[0].toUpperCase()
									: '🚀'}
							</div>
							<div>
								<h1 className="text-3xl md:text-4xl font-bold">
									{server.name}
								</h1>
								<p className="text-gray-600 mt-2 max-w-3xl">
									{server.description || 'No description available'}
								</p>

								{server.categories &&
									server.categories.length > 0 && (
										<div className="flex flex-wrap gap-2 mt-4">
											{server.categories.map((category, index) => (
												<Badge
													key={index}
													variant="secondary"
													className="px-2.5 py-0.5 bg-orange-50 text-orange-700 border-orange-200 rounded-full"
												>
													{category}
												</Badge>
											))}
										</div>
									)}
							</div>
						</div>
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-1 space-y-6">
						<Card className="overflow-hidden border-0 shadow-md">
							<CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b pb-4">
								<CardTitle className="text-xl">
									Repository Details
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0">
								<div className="divide-y">
									<div className="px-6 py-4 flex justify-between items-center">
										<div className="text-gray-600">Language</div>
										{server.language ? (
											<div className="flex items-center gap-2 font-medium">
												<Code className="w-4 h-4" />
												{server.language}
											</div>
										) : (
											<div className="text-gray-500">
												Not specified
											</div>
										)}
									</div>
									<div className="px-6 py-4 flex justify-between items-center">
										<div className="text-gray-600">Repository</div>
										<a
											href={server.html_url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1 text-orange-600 hover:text-orange-700 font-medium"
										>
											{server.name.length > 20
												? `${server.name.substring(0, 20)}...`
												: server.name}
											<ExternalLink className="w-3 h-3" />
										</a>
									</div>
									<div className="px-6 py-4 flex justify-between items-center">
										<div className="text-gray-600">Stars</div>
										<div className="flex items-center gap-1.5 font-medium">
											<Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
											{server.stars.toLocaleString()}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="lg:col-span-2">
						{server.ai_analysis ? (
							<Card className="border-0 shadow-md">
								<CardHeader className="bg-gradient-to-r from-gray-50 to-white border-b pb-4">
									<CardTitle className="text-xl flex items-center gap-2">
										<BookOpen className="w-5 h-5 text-orange-500" />
										AI Analysis
									</CardTitle>
								</CardHeader>
								<CardContent className="p-0">
									{analysisData && analysisData.analysis ? (
										<Tabs
											defaultValue="architecture"
											className="w-full"
										>
											<div className="px-6 pt-6 overflow-x-auto">
												<TabsList className="w-full justify-start">
													{Object.keys(analysisData.analysis).map(
														(key, idx) => (
															<TabsTrigger
																key={idx}
																value={key
																	.toLowerCase()
																	.replace(/\s+/g, '-')}
																className="whitespace-nowrap"
															>
																{key.split(' ')[0]}
															</TabsTrigger>
														)
													)}
												</TabsList>
											</div>
											<div className="p-6">
												{Object.entries(analysisData.analysis).map(
													([title, content]) => (
														<TabsContent
															key={title}
															value={title
																.toLowerCase()
																.replace(/\s+/g, '-')}
															className="mt-0"
														>
															<div>
																<h3 className="font-medium text-lg text-orange-700 mb-3">
																	{title}
																</h3>
																<p className="text-gray-700 leading-relaxed">
																	{content as string}
																</p>
															</div>
														</TabsContent>
													)
												)}
											</div>
										</Tabs>
									) : (
										<div className="p-6">
											<div className="prose max-w-none">
												<ReactMarkdown>
													{server.ai_analysis}
												</ReactMarkdown>
											</div>
										</div>
									)}
								</CardContent>
							</Card>
						) : (
							<Card className="p-6 bg-gray-50 flex justify-center items-center h-full border-0 shadow-md">
								<p className="text-gray-500">
									No AI analysis available for this repository.
								</p>
							</Card>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
