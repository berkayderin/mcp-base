'use client'

import React from 'react'
import { FaXTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa6'
import type { BlogPost } from '@/backend/queries/blog'

type SharePlatform = 'twitter' | 'linkedin' | 'whatsapp'

export default function ShareButtons({
	post,
	shareUrl
}: {
	post: BlogPost
	shareUrl: string
}) {
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
		<>
			<button
				onClick={() => handleShare('twitter')}
				className="p-2 rounded-full bg-black hover:bg-gray-800 text-white transition-colors"
			>
				<FaXTwitter size={18} />
			</button>

			<button
				onClick={() => handleShare('linkedin')}
				className="p-2 rounded-full bg-[#0077b5] hover:bg-[#006396] text-white transition-colors"
			>
				<FaLinkedin size={18} />
			</button>

			<button
				onClick={() => handleShare('whatsapp')}
				className="p-2 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white transition-colors"
			>
				<FaWhatsapp size={18} />
			</button>
		</>
	)
}
