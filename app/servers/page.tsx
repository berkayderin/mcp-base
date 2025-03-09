import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { GridPattern } from '@/components/magicui/grid-pattern'
import { Cover } from '@/components/ui/cover'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Search, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { categories } from '@/data/categories'

const ServersPage = () => {
	return (
		<div className="container mx-auto px-6 py-20 max-w-5xl">
			<main className="flex-1 flex flex-col items-center justify-center text-center relative">
				<GridPattern
					className="opacity-80"
					width={30}
					height={30}
					strokeDasharray="1 3"
				/>
				<div className="max-w-4xl mx-auto">
					<div className="mb-6 flex justify-center">
						<div className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 inline-flex items-center shadow-sm">
							<span className="mr-2">🚀</span>
							<AnimatedShinyText shimmerWidth={150}>
								+1985 MCP Servers in list
							</AnimatedShinyText>
						</div>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6">
						<span className="text-transparent bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-gray-900">
							Discover{' '}
						</span>
						<span>
							<Cover>MCP Servers</Cover>
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-600 mb-10">
						Find the best MCP servers for your needs.
					</p>

					<div className="flex justify-center">
						<div className="relative w-full max-w-md">
							<Input
								type="text"
								placeholder="Search with keywords..."
								className="pr-10"
							/>
							<button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground">
								<Search className="h-4 w-4" />
							</button>
						</div>
					</div>
				</div>
			</main>

			<div className="mt-12 mb-4">
				<ScrollArea className="w-full whitespace-nowrap">
					<div className="flex space-x-2 py-4">
						<Badge
							variant="outline"
							className="px-4 py-2 text-sm font-medium bg-orange-50 border-orange-200"
						>
							All <span className="ml-1 text-orange-500">+500</span>
						</Badge>
						{categories.map((category, index) => (
							<Badge
								key={index}
								variant="outline"
								className="px-4 py-2 text-sm font-medium"
							>
								{category}{' '}
								<span className="ml-1 text-gray-500">
									{Math.floor(Math.random() * 300) + 50}
								</span>
							</Badge>
						))}
					</div>
					<ScrollBar orientation="horizontal" />
				</ScrollArea>
			</div>

			<h2 className="text-2xl font-bold mb-6">All MCP Servers</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				<Link href="/servers/chatsum">
					<Card className="relative max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-transparent hover:shadow-md group overflow-hidden">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100"></div>
						<div className="absolute inset-[2px] rounded-xl bg-white"></div>
						<div className="relative flex items-start gap-4">
							<div className="w-10 h-10 bg-green-100 rounded-md flex items-center justify-center">
								<span className="text-green-500 text-lg">💬</span>
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-lg">ChatSum</h3>
								<p className="text-sm text-gray-500">
									Query and Summarize your chat messages.
								</p>
								<div className="mt-3 flex flex-wrap gap-2">
									<Badge variant="secondary" className="text-xs">
										# chatsum
									</Badge>
									<Badge variant="secondary" className="text-xs">
										# chat-summarizer
									</Badge>
								</div>
							</div>
							<Link
								href="#"
								className="text-gray-400 hover:text-gray-600"
							>
								<ExternalLink className="h-4 w-4" />
							</Link>
						</div>
					</Card>
				</Link>

				<Link href="/servers/google-search">
					<Card className="relative max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-transparent hover:shadow-md group overflow-hidden">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100"></div>
						<div className="absolute inset-[2px] rounded-xl bg-white"></div>
						<div className="relative flex items-start gap-4">
							<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center">
								<span>🔍</span>
							</div>
							<div className="flex-1">
								<div className="flex items-center gap-2">
									<h3 className="font-semibold text-lg">
										Google Search MCP
									</h3>
								</div>
								<p className="text-xs text-gray-500">by mixelpixx</p>
								<p className="text-sm text-gray-600 mt-1">
									An MCP (Model Context Protocol) server that provides
									Google search capabilities and webpage content...
								</p>
							</div>
							<Link
								href="#"
								className="text-gray-400 hover:text-gray-600"
							>
								<ExternalLink className="h-4 w-4" />
							</Link>
						</div>
					</Card>
				</Link>

				<Link href="/servers/dubco">
					<Card className="relative max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-transparent hover:shadow-md group overflow-hidden">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100"></div>
						<div className="absolute inset-[2px] rounded-xl bg-white"></div>
						<div className="relative flex items-start gap-4">
							<div className="w-10 h-10 bg-purple-50 rounded-md flex items-center justify-center">
								<span>🔗</span>
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-lg">
									Dubco Mcp Server
								</h3>
								<p className="text-xs text-gray-500">by Gitmaxd</p>
								<p className="text-sm text-gray-600 mt-1">
									The (Unofficial) dubco-mcp-server enables AI
									assistants to manage Dub.co short links via the
									Model...
								</p>
							</div>
							<Link
								href="#"
								className="text-gray-400 hover:text-gray-600"
							>
								<ExternalLink className="h-4 w-4" />
							</Link>
						</div>
					</Card>
				</Link>

				<Link href="/servers/tempo">
					<Card className="relative max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-transparent hover:shadow-md group overflow-hidden">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100"></div>
						<div className="absolute inset-[2px] rounded-xl bg-white"></div>
						<div className="relative flex items-start gap-4">
							<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center">
								<span>📂</span>
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-lg">
									Mcp server tempo
								</h3>
								<p className="text-xs text-gray-500">by tempo-io</p>
								<p className="text-sm text-gray-600 mt-1">
									mcp server tempo best directory
								</p>
							</div>
							<Link
								href="#"
								className="text-gray-400 hover:text-gray-600"
							>
								<ExternalLink className="h-4 w-4" />
							</Link>
						</div>
					</Card>
				</Link>

				<Link href="/servers/bets">
					<Card className="relative max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-transparent hover:shadow-md group overflow-hidden">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100"></div>
						<div className="absolute inset-[2px] rounded-xl bg-white"></div>
						<div className="relative flex items-start gap-4">
							<div className="w-10 h-10 bg-yellow-50 rounded-md flex items-center justify-center">
								<span>🎲</span>
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-lg">Mcp Bets</h3>
								<p className="text-xs text-gray-500">by chatmcp</p>
								<p className="text-sm text-gray-600 mt-1">bets mcp</p>
							</div>
							<Link
								href="#"
								className="text-gray-400 hover:text-gray-600"
							>
								<ExternalLink className="h-4 w-4" />
							</Link>
						</div>
					</Card>
				</Link>

				<Link href="/servers/gitee">
					<Card className="relative max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-transparent hover:shadow-md group overflow-hidden">
						<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100"></div>
						<div className="absolute inset-[2px] rounded-xl bg-white"></div>
						<div className="relative flex items-start gap-4">
							<div className="w-10 h-10 bg-red-50 rounded-md flex items-center justify-center">
								<span>🧩</span>
							</div>
							<div className="flex-1">
								<h3 className="font-semibold text-lg">
									Gitee MCP Server
								</h3>
								<p className="text-xs text-gray-500">
									by normal-coder
								</p>
								<p className="text-sm text-gray-600 mt-1">
									MCP Tool Server for Gitee, supporting the management
									of repository files/branches, issues...
								</p>
							</div>
							<Link
								href="#"
								className="text-gray-400 hover:text-gray-600"
							>
								<ExternalLink className="h-4 w-4" />
							</Link>
						</div>
					</Card>
				</Link>
			</div>
		</div>
	)
}

export default ServersPage
