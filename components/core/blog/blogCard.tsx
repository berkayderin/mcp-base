import React from 'react'
import Link from 'next/link'
import { CalendarIcon, ChevronRightIcon } from '@radix-ui/react-icons'

interface BlogCardProps {
	title: string
	description: string
	keyword: string
	date: string
	slug: string
}

const BlogCard = ({
	title,
	description,
	keyword,
	date,
	slug
}: BlogCardProps) => {
	return (
		<div className="border-b border-gray-200 pb-8 last:border-0 mb-8 transition-all duration-300 hover:bg-gray-50 hover:shadow-sm p-4 rounded-lg">
			<div className="flex flex-col space-y-4">
				<div className="flex items-center justify-between">
					<span className="text-xs uppercase tracking-wider text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded-md">
						{keyword}
					</span>
					<div className="flex items-center">
						<CalendarIcon className="w-3 h-3 mr-2 text-gray-500" />
						<span className="text-xs text-gray-500">{date}</span>
					</div>
				</div>

				<h2 className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors">
					{title}
				</h2>

				<p className="text-sm text-gray-600 leading-relaxed">
					{description}
				</p>

				<div className="flex items-center pt-3">
					<Link
						href={`/blog/${slug}`}
						className="flex items-center text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition-colors group"
					>
						Read article
						<ChevronRightIcon className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform text-pink-500" />
					</Link>
				</div>
			</div>
		</div>
	)
}

export default BlogCard
