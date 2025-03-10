import React from 'react'
import Link from 'next/link'
import { FaCalendarAlt, FaBookReader } from 'react-icons/fa'
import { getAllBlogPosts } from '@/backend/queries/blog'
import { GridPattern } from '@/components/magicui/grid-pattern'
import { estimateReadingTime } from '@/helpers/estimateReadingTime'

export default async function BlogPage() {
	const posts = await getAllBlogPosts()

	return (
		<main className="relative w-full bg-white min-h-screen pb-20">
			<GridPattern
				className="absolute inset-0 opacity-70"
				width={30}
				height={30}
				strokeDasharray="1 3"
			/>

			<div className="relative pt-16 pb-12 px-6 text-center">
				<div className="max-w-2xl mx-auto">
					<h1 className="text-4xl md:text-5xl font-bold mb-6">
						<span className="text-gray-900">MCP </span>
						<span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
							Blog
						</span>
					</h1>
					<p className="text-lg text-gray-600 mb-0 max-w-xl mx-auto">
						Latest insights, tutorials, and updates from the Model
						Context Protocol team.
					</p>
				</div>
			</div>

			<div className="container mx-auto px-6 max-w-4xl relative z-10">
				<div className="space-y-12">
					{posts.map((post) => {
						const readingTime = estimateReadingTime(post.content)

						return (
							<article
								key={post.id}
								className="bg-white rounded-xl border border-gray-100 shadow-none hover:shadow-sm transition-all duration-300 overflow-hidden"
							>
								<Link href={`/blog/${post.slug}`}>
									<div className="p-6 sm:p-8 cursor-pointer">
										<div className="mb-4 flex flex-wrap gap-2">
											{post.keywords.map((keyword, index) => (
												<span
													key={index}
													className="text-xs uppercase tracking-wider font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600"
												>
													{keyword}
												</span>
											))}
										</div>

										<h2 className="text-xl sm:text-2xl font-bold mb-3 text-gray-900 leading-tight">
											{post.title}
										</h2>

										<p className="text-gray-600 mb-6 leading-relaxed line-clamp-2">
											{post.description}
										</p>

										<div className="flex items-center gap-4 text-sm text-gray-500">
											<div className="flex items-center gap-1">
												<FaCalendarAlt
													size={14}
													className="text-orange-500"
												/>
												<span>
													{new Date(
														post.created_date
													).toLocaleDateString('en-US', {
														year: 'numeric',
														month: 'long',
														day: 'numeric'
													})}
												</span>
											</div>
											<div className="flex items-center gap-1">
												<FaBookReader
													size={14}
													className="text-orange-500"
												/>
												<span>{readingTime} min read</span>
											</div>
										</div>
									</div>
								</Link>
							</article>
						)
					})}
				</div>
			</div>
		</main>
	)
}
