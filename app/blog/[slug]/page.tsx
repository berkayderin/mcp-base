'use client'

import React from 'react'
import { blogPosts } from '@/data/posts'
import { notFound } from 'next/navigation'
import { FaCalendarAlt } from 'react-icons/fa'
import { FaXTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'

type SharePlatform = 'twitter' | 'linkedin' | 'whatsapp'

const BlogDetailPage = ({ params }: { params: { slug: string } }) => {
	const post = blogPosts.find((post) => post.slug === params.slug)

	if (!post) {
		notFound()
	}

	const shareUrl = `${process.env.NEXT_PUBLIC_SITE_URL}/blog/${params.slug}`

	const handleShare = (platform: SharePlatform) => {
		const text = encodeURIComponent(post.title)
		const url = encodeURIComponent(shareUrl)

		const shareLinks = {
			twitter: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
			linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
			whatsapp: `https://wa.me/?text=${text}%20${url}`
		}

		window.open(shareLinks[platform], '_blank', 'noopener,noreferrer')
	}

	return (
		<div className="container mx-auto px-6 py-12 max-w-4xl">
			<div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
				<span>{post.keyword}</span>
			</div>

			<h1 className="text-4xl font-bold mb-6">{post.title}</h1>

			<div className="flex items-center gap-4 mb-8">
				<div className="flex items-center gap-1">
					<FaCalendarAlt size={14} />
					<span className="text-sm text-gray-600">{post.date}</span>
				</div>

				<div className="flex items-center gap-2">
					<button
						onClick={() => handleShare('twitter')}
						className="p-2 rounded-full bg-black hover:bg-gray-800 text-white transition-colors"
						aria-label="Twitter'da paylaş"
					>
						<FaXTwitter size={18} />
					</button>

					<button
						onClick={() => handleShare('linkedin')}
						className="p-2 rounded-full bg-[#0077b5] hover:bg-[#006396] text-white transition-colors"
						aria-label="LinkedIn'de paylaş"
					>
						<FaLinkedin size={18} />
					</button>

					<button
						onClick={() => handleShare('whatsapp')}
						className="p-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors"
						aria-label="WhatsApp'ta paylaş"
					>
						<FaWhatsapp size={18} />
					</button>
				</div>
			</div>

			<div className="prose max-w-none">
				<p className="text-gray-700 mb-6">{post.description}</p>

				<h2 className="text-2xl font-semibold mt-10 mb-4">
					What does a career in web design involve?
				</h2>
				<p className="text-gray-700 mb-6">
					A career in web design can involve the design, creation, and
					coding of a range of website types. These pages can
					typically include having both clients and discussing
					specific specifications, producing sample sites, designing
					layouts, writing code, and working with different content
					management systems and apps. Requiring a range of creative
					and technical skills, web designers may be involved in work
					across a range of industries, including software companies,
					IT consultancies, web design agencies, and marketing
					companies. Web designers typically need to have skills in
					programming languages, creative skills, crafting the overall
					vision and design of a site, and determining how to best
					incorporate content and functionality. However, there can be
					significant overlap between the roles.
				</p>
			</div>
		</div>
	)
}

export default BlogDetailPage
