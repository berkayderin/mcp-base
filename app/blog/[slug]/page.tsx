import React from 'react'
import { notFound } from 'next/navigation'
import { FaCalendarAlt, FaBookReader } from 'react-icons/fa'
import { ChevronLeftIcon } from '@radix-ui/react-icons'
import { getBlogPostBySlug } from '@/backend/queries/blog'
import Marked from 'marked-react'
import Link from 'next/link'
import { GridPattern } from '@/components/magicui/grid-pattern'
import { estimateReadingTime } from '@/helpers/estimateReadingTime'
import ShareButtons from '@/components/core/blog/shareButtons'
import './blog.css'

async function BlogDetailPage({
	params
}: {
	params: { slug: string }
}) {
	const post = await getBlogPostBySlug(params.slug)

	if (!post) {
		notFound()
	}

	const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`
	const readingTime = estimateReadingTime(post.content)

	return (
		<main className="relative w-full bg-white min-h-screen">
			<GridPattern
				className="absolute inset-0 opacity-70"
				width={30}
				height={30}
				strokeDasharray="1 3"
			/>

			<div className="container mx-auto px-6 pt-8 max-w-3xl relative z-10">
				<Link
					href="/blog"
					className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 group"
				>
					<ChevronLeftIcon className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
					Back to Blog
				</Link>
			</div>

			<article className="container mx-auto px-6 py-8 max-w-3xl relative z-10">
				<div className="mb-6 flex flex-wrap gap-2">
					{post.keywords.map((keyword, index) => (
						<span
							key={index}
							className="text-xs uppercase tracking-wider font-medium px-2.5 py-1 rounded-full bg-gradient-to-r from-orange-500/10 to-pink-500/10 text-orange-600"
						>
							{keyword}
						</span>
					))}
				</div>

				<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
					{post.title}
				</h1>

				<div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-gray-500 pb-6 border-b-2 border-gray-100">
					<div className="flex items-center gap-1">
						<FaCalendarAlt size={14} className="text-orange-500" />
						<span>
							{new Date(post.created_date).toLocaleDateString(
								'en-US',
								{
									year: 'numeric',
									month: 'long',
									day: 'numeric'
								}
							)}
						</span>
					</div>
					<div className="flex items-center gap-1">
						<FaBookReader size={14} className="text-orange-500" />
						<span>{readingTime} min read</span>
					</div>
					<div className="flex items-center gap-2 ml-auto">
						<span className="text-sm text-gray-500">Share:</span>
						<ShareButtons post={post} shareUrl={shareUrl} />
					</div>
				</div>

				<p className="text-xl text-gray-700 mb-8 leading-relaxed">
					{post.description}
				</p>

				<div className="blog-content">
					<Marked>{post.content}</Marked>
				</div>

				<div className="mt-16 pt-6 border-t-2 border-gray-100">
					<div className="flex flex-wrap items-center justify-between gap-4">
						<Link
							href="/blog"
							className="text-sm text-gray-600 hover:text-gray-900 group inline-flex items-center"
						>
							<ChevronLeftIcon className="w-4 h-4 mr-1 group-hover:-translate-x-1 transition-transform" />
							Back to Blog
						</Link>

						<div className="flex items-center gap-3">
							<span className="text-sm text-gray-500">
								Share this article:
							</span>
							<ShareButtons post={post} shareUrl={shareUrl} />
						</div>
					</div>
				</div>
			</article>
		</main>
	)
}

export default BlogDetailPage
