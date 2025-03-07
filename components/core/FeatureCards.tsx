'use client'
import React, { useCallback } from 'react'
import { cn } from '@/lib/utils'
import {
	Star,
	MessageSquare,
	Slack,
	Chrome,
	Cloud,
	Code,
	Zap,
	MessageCircle
} from 'lucide-react'

interface Card {
	id: number
	title: string
	by: string
	description: string
	icon: string
	tags: string[]
	isFeatured?: boolean
}

const mcpServers: Card[] = [
	{
		id: 1,
		title: 'Mcp Server Chatsum',
		by: 'chatmcp',
		description: 'summarize chat message',
		icon: 'MessageSquare',
		tags: ['chatbot', 'mcp-server'],
		isFeatured: true
	},
	{
		id: 2,
		title: 'Slack',
		by: '',
		description: 'Channel management and messaging capabilities',
		icon: 'Slack',
		tags: ['slack', 'messaging'],
		isFeatured: true
	},
	{
		id: 3,
		title: 'Puppeteer',
		by: '',
		description: 'Browser automation and web scraping',
		icon: 'Chrome',
		tags: ['browser-automation', 'web-scraping'],
		isFeatured: true
	},
	{
		id: 4,
		title: 'Cloudflare',
		by: '',
		description:
			'Deploy, configure & interrogate your resources on the Cloudflare developer platform (e.g. Workers/KV/R2/D1)',
		icon: 'Cloud',
		tags: ['cloudflare', 'api-management'],
		isFeatured: true
	}
]

const mcpClients: Card[] = [
	{
		id: 1,
		title: 'Cline - #1 on...',
		by: 'cline',
		description:
			'Autonomous coding agent right in your IDE, capable of creating/editing files, executing commands, using...',
		icon: 'Code',
		tags: [],
		isFeatured: true
	},
	{
		id: 2,
		title: 'Zed',
		by: 'zed-industries',
		description:
			'Code at the speed of thought – Zed is a high-performance, multiplayer code editor from the creators of...',
		icon: 'Zap',
		tags: ['rust-lang', 'text-editor'],
		isFeatured: true
	},
	{
		id: 3,
		title: 'Roo Code (prev. Roo Cline)',
		by: 'RooVetGit',
		description:
			'Roo Code (prev. Roo Cline) gives you a whole dev team of AI agents in your code editor.',
		icon: 'Code',
		tags: [],
		isFeatured: true
	},
	{
		id: 4,
		title: 'chatmcp',
		by: 'daodao97',
		description:
			'ChatMCP is an AI chat client implementing the Model Context Protocol (MCP).',
		icon: 'MessageCircle',
		tags: ['chat', 'client'],
		isFeatured: true
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
					'20s'
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
						className="relative w-[350px] max-w-full flex-shrink-0 cursor-pointer rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm transition-all hover:border-gray-300 hover:shadow-md"
						key={item.id}
					>
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-3">
								<div className="relative h-10 w-10 flex items-center justify-center overflow-hidden rounded-md bg-blue-50">
									{item.icon === 'MessageSquare' && (
										<MessageSquare className="h-6 w-6 text-blue-600" />
									)}
									{item.icon === 'Slack' && (
										<Slack className="h-6 w-6 text-blue-600" />
									)}
									{item.icon === 'Chrome' && (
										<Chrome className="h-6 w-6 text-blue-600" />
									)}
									{item.icon === 'Cloud' && (
										<Cloud className="h-6 w-6 text-blue-600" />
									)}
									{item.icon === 'Code' && (
										<Code className="h-6 w-6 text-blue-600" />
									)}
									{item.icon === 'Zap' && (
										<Zap className="h-6 w-6 text-blue-600" />
									)}
									{item.icon === 'MessageCircle' && (
										<MessageCircle className="h-6 w-6 text-blue-600" />
									)}
								</div>
								<div>
									<h3 className="text-lg font-semibold text-gray-900">
										{item.title}
									</h3>
									{item.by && (
										<p className="text-sm text-gray-500">
											by {item.by}
										</p>
									)}
								</div>
							</div>
							<button className="text-amber-500 hover:text-amber-600">
								<Star className="h-5 w-5" />
							</button>
						</div>
						<p className="mt-3 text-sm text-gray-600">
							{item.description}
						</p>
						{item.tags.length > 0 && (
							<div className="mt-4 flex flex-wrap gap-2">
								{item.tags.map((tag, index) => (
									<span
										key={index}
										className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-600"
									>
										# {tag}
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
				<InfiniteMovingCards
					items={mcpServers}
					direction="left"
					speed="slow"
				/>
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
