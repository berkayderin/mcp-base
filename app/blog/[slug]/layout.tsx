import React from 'react'
import { Metadata } from 'next'
import { getBlogPostBySlug } from '@/backend/queries/blog'

export async function generateMetadata({
	params
}: {
	params: { slug: string }
}): Promise<Metadata> {
	const post = await getBlogPostBySlug(params.slug)

	if (!post) {
		return {
			title: 'Blog Yazısı Bulunamadı | MCP',
			description: 'Aradığınız blog yazısı bulunamadı.'
		}
	}

	return {
		title: `${post.title} | Model Context Protocol`,
		description: post.description,
		keywords: post.keywords,
		openGraph: {
			title: post.title,
			description: post.description,
			type: 'article',
			url: `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`,
			publishedTime: post.created_date
		}
	}
}

const BlogDetailLayout = ({
	children
}: {
	children: React.ReactNode
}) => {
	return <div>{children}</div>
}

export default BlogDetailLayout
