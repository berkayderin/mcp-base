'use client'
import React, { useCallback, useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Star, ExternalLink } from 'lucide-react'
import { getTopServers } from '@/backend/queries/servers'

type Card = {
	id: number
	name: string
	html_url: string
	description: string | null
	language: string | null
	stars: number
	categories: string[] | null
}

const mcpClients: Card[] = [
	{
		id: 1,
		name: 'Cline - #1 on...',
		html_url: '#',
		description:
			'Autonomous coding agent right in your IDE, capable of creating/editing files, executing commands, using...',
		language: null,
		stars: 0,
		categories: []
	},
	{
		id: 2,
		name: 'Zed',
		html_url: '#',
		description:
			'Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of...',
		language: 'Rust',
		stars: 0,
		categories: ['rust-lang', 'text-editor']
	},
	{
		id: 3,
		name: 'Roo Code (prev. Roo Cline)',
		html_url: '#',
		description:
			'Roo Code (prev. Roo Cline) gives you a whole dev team of AI agents in your code editor.',
		language: null,
		stars: 0,
		categories: []
	},
	{
		id: 4,
		name: 'chatmcp',
		html_url: '#',
		description:
			'ChatMCP is an AI chat client implementing the Model Context Protocol (MCP).',
		language: null,
		stars: 0,
		categories: ['chat', 'client']
	}
]

const InfiniteMovingCards = ({
	items,
	direction = 'left',
	speed = 'fast',
	pauseOnHover = true,
	className
}: {
	items: Card[]
	direction?: 'left' | 'right'
	speed?: 'slow' | 'medium' | 'fast'
	pauseOnHover?: boolean
	className?: string
}) => {
	const containerRef = React.useRef<HTMLDivElement>(null)
	const scrollerRef = React.useRef<HTMLUListElement>(null)
	const [start, setStart] = React.useState(false)

	const getDirection = useCallback(() => {
		if (containerRef.current) {
			if (direction === 'left') {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'forwards'
				)
			} else {
				containerRef.current.style.setProperty(
					'--animation-direction',
					'reverse'
				)
			}
		}
	}, [direction])

	const getSpeed = useCallback(() => {
		if (containerRef.current) {
			if (speed === 'fast') {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'1s'
				)
			} else if (speed === 'medium') {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'40s'
				)
			} else {
				containerRef.current.style.setProperty(
					'--animation-duration',
					'80s'
				)
			}
		}
	}, [speed])

	const addAnimation = useCallback(() => {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children)
			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true)
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem)
				}
			})

			getDirection()
			getSpeed()
			setStart(true)
		}
	}, [getDirection, getSpeed])

	React.useEffect(() => {
		addAnimation()
	}, [addAnimation])

	return (
		<div
			ref={containerRef}
			className={cn(
				'scroller relative z-20 max-w-7xl overflow-hidden mx-auto',
				className
			)}
		>
			{/* Gradient Masks */}
			<div className="absolute top-0 bottom-0 left-0 w-[100px] z-10 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
			<div className="absolute top-0 bottom-0 right-0 w-[100px] z-10 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />

			<ul
				ref={scrollerRef}
				className={cn(
					'flex min-w-full shrink-0 gap-4 py-4',
					start && 'animate-scroll',
					pauseOnHover && 'hover:[animation-play-state:paused]'
				)}
			>
				{items.map((item) => (
					<li
						className="relative w-[350px] h-[250px] max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md overflow-hidden"
						key={item.id}
					>
						<div className="flex items-center justify-between">
							<div>
								<h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2 truncate">
									{item.name}
									{item.html_url && (
										<a
											href={item.html_url}
											target="_blank"
											rel="noopener noreferrer"
											className="text-blue-500 hover:text-blue-600 flex-shrink-0"
										>
											<ExternalLink className="h-4 w-4" />
										</a>
									)}
								</h3>
								{item.language && (
									<p className="text-sm text-gray-500">
										{item.language}
									</p>
								)}
							</div>
							<div className="flex items-center gap-1 text-amber-500 flex-shrink-0">
								<Star className="h-5 w-5 fill-current" />
								<span className="text-sm font-medium">
									{item.stars}
								</span>
							</div>
						</div>
						<p className="mt-3 text-sm text-gray-600 line-clamp-3">
							{item.description}
						</p>
						{item.categories && item.categories.length > 0 && (
							<div className="mt-4 flex flex-wrap gap-2 absolute bottom-6 left-6 right-6">
								{item.categories.map((category, index) => (
									<span
										key={index}
										className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
									>
										# {category}
									</span>
								))}
							</div>
						)}
					</li>
				))}
			</ul>
		</div>
	)
}

const FeatureCards = () => {
	const [topServers, setTopServers] = useState<Card[]>([])
	const [loading, setLoading] = useState(true)

	const fetchTopServers = async () => {
		try {
			const servers = await getTopServers(10)
			setTopServers(servers)
		} catch (error) {
			console.error('Error fetching top servers:', error)
			setTopServers([])
		} finally {
			setLoading(false)
		}
	}

	useEffect(() => {
		fetchTopServers()
	}, [])

	return (
		<div className="w-full space-y-16 py-12 flex flex-col items-center bg-gray-50 border-t border-slate-200">
			<div className="space-y-8 w-full max-w-7xl">
				<div className="flex items-center justify-between px-6">
					<h2 className="text-2xl font-bold text-gray-900">
						Featured MCP Servers
					</h2>
					<a href="#" className="text-orange-500 hover:underline">
						View All →
					</a>
				</div>
				{loading ? (
					<div className="flex justify-center items-center h-32">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
					</div>
				) : topServers.length > 0 ? (
					<InfiniteMovingCards
						items={topServers}
						direction="left"
						speed="slow"
					/>
				) : (
					<div className="flex justify-center items-center h-32 text-gray-500">
						Henüz sunucu bulunmamaktadır.
					</div>
				)}
			</div>

			<div className="space-y-8 w-full max-w-7xl">
				<div className="flex items-center justify-between px-6">
					<h2 className="text-2xl font-bold text-gray-900">
						Featured MCP Clients
					</h2>
					<a href="#" className="text-orange-500 hover:underline">
						View All →
					</a>
				</div>
				<InfiniteMovingCards
					items={mcpClients}
					direction="right"
					speed="slow"
				/>
			</div>
		</div>
	)
}

export default FeatureCards
