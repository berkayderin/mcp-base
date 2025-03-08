'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { CalendarIcon, ChevronRightIcon } from '@radix-ui/react-icons'

const BlogPage = () => {
	return (
		<div className="container mx-auto px-6 py-20 max-w-5xl">
			<motion.h1
				initial={{ opacity: 0, y: -10 }}
				animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
				className="text-4xl font-semibold text-center mb-3"
			>
				Blog
			</motion.h1>

			<p className="text-base text-gray-500 text-center mb-20 max-w-lg mx-auto">
				Discover the latest handpicked blog entries to get started.
			</p>

			<div className="grid grid-cols-1 gap-8">
				<BlogCard
					title="Introduction to Model-Context-Protocol Architecture"
					description="Learn the fundamentals of MCP architecture and how it can improve your application structure compared to traditional patterns."
					keyword="architecture"
					date="Apr 8, 2025"
					slug="intro-to-mcp-architecture"
				/>

				<BlogCard
					title="Implementing MCP in Modern Frontend Applications"
					description="Discover practical strategies for implementing the Model-Context-Protocol pattern in React, Next.js and other modern frontend frameworks."
					keyword="implementation"
					date="May 12, 2025"
					slug="mcp-in-frontend-apps"
				/>

				<BlogCard
					title="MCP vs MVC: Understanding the Key Differences"
					description="A detailed comparison between Model-Context-Protocol and Model-View-Controller architecture patterns and when to use each one."
					keyword="comparison"
					date="Jun 24, 2025"
					slug="mcp-vs-mvc-comparison"
				/>

				<BlogCard
					title="Testing Strategies for Model-Context-Protocol Systems"
					description="Learn effective testing approaches specifically designed for applications built with the Model-Context-Protocol architecture pattern."
					keyword="testing"
					date="Jul 15, 2025"
					slug="testing-mcp-systems"
				/>
			</div>
		</div>
	)
}

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
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.6 } }}
			whileHover={{ y: -3, transition: { duration: 0.2 } }}
			className="border-b border-gray-100 pb-8 last:border-0"
		>
			<div className="flex flex-col space-y-2">
				<div className="flex items-center justify-between mb-1">
					<span className="text-xs uppercase tracking-wider text-gray-400 font-medium">
						{keyword}
					</span>
					<div className="flex items-center">
						<CalendarIcon className="w-3 h-3 mr-1.5 text-gray-400" />
						<span className="text-xs text-gray-400">{date}</span>
					</div>
				</div>

				<h2 className="text-xl font-medium text-gray-800">{title}</h2>

				<p className="text-sm text-gray-500 leading-relaxed">
					{description}
				</p>

				<div className="flex items-center pt-3">
					<Link
						href={`/blog/${slug}`}
						className="flex items-center text-xs font-medium text-gray-800 hover:text-gray-600 transition-colors"
					>
						Read article
						<ChevronRightIcon className="ml-1 w-3.5 h-3.5" />
					</Link>
				</div>
			</div>
		</motion.div>
	)
}

export default BlogPage
