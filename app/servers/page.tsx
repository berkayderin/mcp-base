import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { GridPattern } from '@/components/magicui/grid-pattern'
import { Cover } from '@/components/ui/cover'
import React from 'react'
import { Input } from '@/components/ui/input'
import { Search, Star, Code, Github } from 'lucide-react'
import Link from 'next/link'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { categories } from '@/data/categories'
import { getServersWithPagination } from '@/utils/queries/servers'
import {
	Pagination,
	PaginationContent,
	PaginationEllipsis,
	PaginationItem,
	PaginationLink,
	PaginationNext,
	PaginationPrevious
} from '@/components/ui/pagination'

export default async function ServersPage({
	searchParams
}: {
	searchParams: { page?: string }
}) {
	const currentPage = searchParams.page
		? parseInt(searchParams.page)
		: 1

	const {
		data: servers,
		count,
		totalPages
	} = await getServersWithPagination(currentPage, 15)

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
								+{count || 0} MCP Servers in list
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
							All{' '}
							<span className="ml-1 text-orange-500">
								+{count || 0}
							</span>
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
				{servers && servers.length > 0 ? (
					servers.map((server) => (
						<Link
							href={server.html_url}
							key={server.id}
							target="_blank"
						>
							<Card className="relative max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-transparent hover:shadow-md group overflow-hidden h-full">
								<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-pink-500 opacity-0 group-hover:opacity-100"></div>
								<div className="absolute inset-[2px] rounded-xl bg-white"></div>
								<div className="relative flex flex-col h-full">
									<div className="flex flex-col">
										<div className="flex justify-between items-start">
											<h3 className="font-semibold text-lg line-clamp-1">
												{server.name}
											</h3>
											<Link
												href={server.html_url}
												target="_blank"
												className="text-gray-500 hover:text-gray-700"
											>
												<Github className="h-5 w-5" />
											</Link>
										</div>
										<div className="flex items-center gap-2 mt-1">
											<div className="flex items-center text-yellow-500">
												<Star className="h-4 w-4 fill-yellow-500" />
												<span className="ml-1 text-sm">
													{server.stars.toLocaleString()}
												</span>
											</div>
											{server.language && (
												<div className="flex items-center text-gray-500">
													<Code className="h-4 w-4" />
													<span className="ml-1 text-sm">
														{server.language}
													</span>
												</div>
											)}
										</div>
										<p className="text-sm text-gray-600 mt-2 line-clamp-2">
											{server.description ||
												'No description available'}
										</p>
									</div>

									{server.categories &&
										server.categories.length > 0 && (
											<div className="mt-auto pt-4">
												<div className="flex flex-wrap gap-1.5">
													{server.categories.map((category, idx) => (
														<Badge
															key={idx}
															variant="secondary"
															className="text-xs px-2 py-0.5 bg-gray-50 text-gray-700 font-normal rounded-full"
														>
															{category}
														</Badge>
													))}
												</div>
											</div>
										)}
								</div>
							</Card>
						</Link>
					))
				) : (
					<div className="col-span-3 text-center py-10">
						<p className="text-gray-500">No servers found</p>
					</div>
				)}
			</div>

			<div className="mt-10 flex justify-center">
				<Pagination>
					<PaginationContent>
						{currentPage > 1 && (
							<PaginationItem>
								<PaginationPrevious
									href={`/servers?page=${currentPage - 1}`}
								/>
							</PaginationItem>
						)}

						<PaginationItem>
							<PaginationLink
								href="/servers?page=1"
								isActive={currentPage === 1}
							>
								1
							</PaginationLink>
						</PaginationItem>

						{currentPage > 3 && (
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
						)}

						{currentPage > 2 && (
							<PaginationItem>
								<PaginationLink
									href={`/servers?page=${currentPage - 1}`}
								>
									{currentPage - 1}
								</PaginationLink>
							</PaginationItem>
						)}

						{currentPage !== 1 && currentPage !== totalPages && (
							<PaginationItem>
								<PaginationLink
									href={`/servers?page=${currentPage}`}
									isActive
								>
									{currentPage}
								</PaginationLink>
							</PaginationItem>
						)}

						{currentPage < totalPages - 1 && (
							<PaginationItem>
								<PaginationLink
									href={`/servers?page=${currentPage + 1}`}
								>
									{currentPage + 1}
								</PaginationLink>
							</PaginationItem>
						)}

						{currentPage < totalPages - 2 && (
							<PaginationItem>
								<PaginationEllipsis />
							</PaginationItem>
						)}

						{totalPages > 1 && (
							<PaginationItem>
								<PaginationLink
									href={`/servers?page=${totalPages}`}
									isActive={currentPage === totalPages}
								>
									{totalPages}
								</PaginationLink>
							</PaginationItem>
						)}

						{currentPage < totalPages && (
							<PaginationItem>
								<PaginationNext
									href={`/servers?page=${currentPage + 1}`}
								/>
							</PaginationItem>
						)}
					</PaginationContent>
				</Pagination>
			</div>
		</div>
	)
}
