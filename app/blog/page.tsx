import React from 'react'
import { blogPosts } from '@/data/posts'
import BlogCard from '@/components/core/blog/blogCard'

const BlogPage = () => {
	return (
		<div className="container mx-auto px-6 py-20 max-w-5xl">
			<h1 className="text-4xl font-semibold text-center mb-3">
				Blog
			</h1>

			<p className="text-base text-gray-500 text-center mb-20 max-w-lg mx-auto">
				Discover the latest handpicked blog entries to get started.
			</p>

			<div className="grid grid-cols-1 gap-8">
				{blogPosts.map((post) => (
					<BlogCard
						key={post.id}
						title={post.title}
						description={post.description}
						keyword={post.keyword}
						date={post.date}
						slug={post.slug}
					/>
				))}
			</div>
		</div>
	)
}

export default BlogPage
