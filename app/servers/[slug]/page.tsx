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
	BookOpen,
	Zap,
	BarChart3
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

type AnalysisData = {
	is_mcp: string
	justification: string
	categories: string[]
	analysis: {
		[key: string]: string
	}
}

export default async function ServerDetailPage({
	params
}: {
	params: { slug: string }
}) {
	const slug = params.slug

	const server = await getServerById(slug)

	if (!server) {
		notFound()
	}

	let analysisData: AnalysisData | null = null
	try {
		if (server.ai_analysis) {
			// Doğrudan JSON olarak parse etmeyi dene
			try {
				analysisData = JSON.parse(server.ai_analysis)
			} catch {
				// Eğer doğrudan parse edemezse, markdown içinden JSON'u çıkar
				const markdownContent = server.ai_analysis
				const jsonMatch = markdownContent.match(
					/```(?:json)?\s*(\{[\s\S]*?\})\s*```/
				)

				if (jsonMatch && jsonMatch[1]) {
					const jsonString = jsonMatch[1]
					analysisData = JSON.parse(jsonString)
				}
			}
		}
	} catch (error) {
		console.error('JSON parsing error:', error)
	}

	const getFirstTabKey = () => {
		if (analysisData?.analysis) {
			const firstKey = Object.keys(analysisData.analysis)[0]
			return firstKey.toLowerCase().replace(/\s+/g, '-')
		}
		return 'default-tab'
	}

	const createTabValue = (key: string) => {
		return key.toLowerCase().replace(/\s+/g, '-')
	}

	return (
		<div className="relative min-h-screen">
			<div className="absolute inset-0 -z-10 overflow-hidden opacity-70">
				<GridPattern
					width={36}
					height={36}
					x={-1}
					y={-1}
					className="absolute inset-0 h-full w-full fill-orange-50 stroke-orange-100 [mask-image:radial-gradient(ellipse_at_center,white_40%,transparent_80%)]"
					strokeDasharray="2 4"
					strokeWidth={1.5}
				/>
			</div>

			<div className="container mx-auto px-4 py-12 relative z-10 max-w-7xl">
				<div className="mb-8">
					<Link href="/servers" className="inline-block">
						<Button
							variant="ghost"
							className="group flex items-center gap-1.5 text-gray-600 hover:text-gray-900"
						>
							<ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
							Back to servers
						</Button>
					</Link>
				</div>

				<div className="bg-white backdrop-blur-sm rounded-3xl p-8 mb-10 overflow-hidden relative border border-gray-200">
					<div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-orange-100 via-rose-50 to-transparent rounded-bl-full opacity-70 -z-10"></div>

					<div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
						<div className="flex items-start gap-6">
							<div className="w-20 h-20 bg-gradient-to-tr from-orange-500 via-rose-500 to-pink-500 rounded-2xl flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-orange-200 ring-4 ring-orange-50">
								{server.language
									? server.language[0].toUpperCase()
									: '🚀'}
							</div>
							<div>
								<h1 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-pink-600">
									{server.name}
								</h1>
								<p className="text-slate-600 mt-3 max-w-3xl text-lg">
									{server.description || 'No description available'}
								</p>

								{server.categories &&
									server.categories.length > 0 && (
										<div className="flex flex-wrap gap-2 mt-5">
											{server.categories.map((category, index) => (
												<Badge
													key={index}
													variant="secondary"
													className="px-3 py-1 bg-gradient-to-r from-orange-50 to-rose-50 text-orange-700 border-0 shadow-sm rounded-full text-xs font-medium"
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
						<Card className="overflow-hidden border border-gray-200 rounded-3xl shadow-none">
							<CardHeader className="bg-gradient-to-r from-white to-orange-50/50 border-b pb-6">
								<CardTitle className="text-xl flex items-center gap-2 text-orange-800">
									<BarChart3 className="w-5 h-5 text-orange-500" />
									Repository Details
								</CardTitle>
							</CardHeader>
							<CardContent className="p-0">
								<div className="divide-y divide-orange-50">
									<div className="px-6 py-5 flex justify-between items-center hover:bg-orange-50/30 transition-colors">
										<div className="text-slate-600 font-medium">
											Language
										</div>
										{server.language ? (
											<div className="flex items-center gap-2 font-medium text-orange-700">
												<Code className="w-4 h-4" />
												{server.language}
											</div>
										) : (
											<div className="text-gray-500">
												Not specified
											</div>
										)}
									</div>
									<div className="px-6 py-5 flex justify-between items-center hover:bg-orange-50/30 transition-colors">
										<div className="text-slate-600 font-medium">
											Repository
										</div>
										<a
											href={server.html_url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-center gap-1.5 text-orange-600 hover:text-orange-800 font-medium transition-colors"
										>
											{server.name.length > 20
												? `${server.name.substring(0, 20)}...`
												: server.name}
											<ExternalLink className="w-3.5 h-3.5" />
										</a>
									</div>
									<div className="px-6 py-5 flex justify-between items-center hover:bg-orange-50/30 transition-colors">
										<div className="text-slate-600 font-medium">
											Stars
										</div>
										<div className="flex items-center gap-2 font-medium bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
											<Star className="w-5 h-5 fill-amber-400 text-amber-500" />
											{server.stars.toLocaleString()}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					<div className="lg:col-span-2">
						{server.ai_analysis ? (
							<Card className="border border-gray-200 rounded-3xl shadow-none">
								<CardHeader className="bg-gradient-to-r from-white to-orange-50/50 border-b pb-6 rounded-t-3xl">
									<CardTitle className="text-xl flex items-center gap-2 text-orange-800">
										<Zap className="w-5 h-5 text-orange-500" />
										AI Analysis
									</CardTitle>
								</CardHeader>
								<CardContent className="p-0">
									{analysisData?.analysis ? (
										<Tabs
											defaultValue={getFirstTabKey()}
											className="w-full"
											orientation="vertical"
										>
											<div className="flex flex-col md:flex-row">
												<div className="w-full md:w-[280px] md:min-w-[280px] border-r border-orange-100">
													<TabsList className="h-auto flex flex-col items-stretch p-2 bg-orange-50/70 rounded-l-3xl rounded-t-none">
														{Object.entries(
															analysisData.analysis
														).map(([key], idx) => {
															const tabValue = createTabValue(key)
															const keyParts = key.split(' ')
															const mainTitle = keyParts[0]
															const subtitle = keyParts
																.slice(1)
																.join(' ')

															return (
																<TabsTrigger
																	key={idx}
																	value={tabValue}
																	className="justify-start rounded-lg mb-1 py-3 px-4 data-[state=active]:bg-white data-[state=active]:text-orange-700 data-[state=active]:shadow-none data-[state=active]:border data-[state=active]:border-gray-200 text-left transition-all"
																>
																	<div className="flex flex-col items-start">
																		<span className="font-medium text-md">
																			{mainTitle}
																		</span>
																		{subtitle && (
																			<span className="text-xs text-slate-500 mt-0.5 truncate max-w-[200px]">
																				{subtitle}
																			</span>
																		)}
																	</div>
																</TabsTrigger>
															)
														})}
													</TabsList>
												</div>

												<div className="flex-1 p-8 bg-white rounded-r-3xl">
													{Object.entries(analysisData.analysis).map(
														([key, content]) => {
															const tabValue = createTabValue(key)
															return (
																<TabsContent
																	key={key}
																	value={tabValue}
																	className="mt-0 data-[state=active]:animate-in data-[state=active]:fade-in-50 h-full"
																>
																	<div className="h-full">
																		<h3 className="font-semibold text-xl text-orange-700 mb-4">
																			{key}
																		</h3>
																		<div className="text-slate-700 leading-relaxed text-lg whitespace-pre-wrap">
																			{content}
																		</div>
																	</div>
																</TabsContent>
															)
														}
													)}
												</div>
											</div>
										</Tabs>
									) : (
										<div className="p-8">
											<div className="prose max-w-none text-slate-700">
												<ReactMarkdown>
													{server.ai_analysis}
												</ReactMarkdown>
											</div>
										</div>
									)}
								</CardContent>
							</Card>
						) : (
							<Card className="p-8 bg-white flex justify-center items-center h-full border-0 rounded-3xl shadow-[0_15px_50px_-15px_rgba(249,115,22,0.2)] backdrop-blur-sm overflow-hidden">
								<div className="text-center">
									<div className="w-16 h-16 mx-auto mb-4 rounded-full bg-orange-50 flex items-center justify-center">
										<BookOpen className="w-8 h-8 text-orange-300" />
									</div>
									<p className="text-slate-500 text-lg">
										No technical analysis available for this
										repository.
									</p>
								</div>
							</Card>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}
