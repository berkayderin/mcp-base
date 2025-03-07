'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
	ChevronDown,
	HelpCircle,
	Server,
	Globe,
	Shield,
	Database,
	LucideIcon
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface FaqItemProps {
	question: string
	answer: string
	number: number
	isOpen: boolean
	onToggle: () => void
	icon: LucideIcon
}

const FaqItem = ({
	question,
	answer,
	number,
	isOpen,
	onToggle,
	icon: Icon
}: FaqItemProps) => {
	return (
		<motion.div
			initial={false}
			className={cn(
				'rounded-lg border border-slate-200 bg-white shadow-sm transition-all',
				isOpen && 'ring-2 ring-slate-200'
			)}
		>
			<button
				onClick={onToggle}
				className="flex w-full items-center justify-between p-4 sm:p-6"
			>
				<div className="flex items-center gap-3 sm:gap-4">
					<div className="flex h-8 w-8 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-lg bg-slate-100">
						<Icon className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
					</div>
					<div className="flex flex-col items-start gap-1">
						<div className="flex items-center gap-2">
							<span className="text-xs sm:text-sm font-medium text-orange-600">
								#{number}
							</span>
							<span className="text-base sm:text-lg font-semibold text-slate-900">
								{question}
							</span>
						</div>
					</div>
				</div>
				<ChevronDown
					className={cn(
						'h-4 w-4 sm:h-5 sm:w-5 text-slate-500 transition-transform duration-200',
						isOpen && 'rotate-180'
					)}
				/>
			</button>
			<motion.div
				initial={{ height: 0, opacity: 0 }}
				animate={{
					height: isOpen ? 'auto' : 0,
					opacity: isOpen ? 1 : 0
				}}
				transition={{ duration: 0.2, ease: 'easeInOut' }}
				className="overflow-hidden"
			>
				<div className="border-t border-slate-200 px-6 py-4">
					<p className="text-slate-600 leading-relaxed">{answer}</p>
				</div>
			</motion.div>
		</motion.div>
	)
}

const Faqs = () => {
	const [openIndexColumn1, setOpenIndexColumn1] = useState<
		number | null
	>(null)
	const [openIndexColumn2, setOpenIndexColumn2] = useState<
		number | null
	>(null)

	const faqs = [
		{
			question: 'What is MCP (Model Context Protocol)?',
			answer:
				'MCP is an open-source protocol developed by Anthropic that enables AI systems like Claude to securely connect with various data sources. It provides a universal standard for AI assistants to access external data, tools, and prompts through a client-server architecture.',
			icon: Globe
		},
		{
			question: 'What are MCP Servers?',
			answer:
				'MCP Servers are systems that provide context, tools, and prompts to AI clients. They can expose data sources like files, documents, databases, and API integrations, allowing AI assistants to access real-time information in a secure way.',
			icon: Server
		},
		{
			question: 'How do MCP Servers work?',
			answer:
				'MCP Servers work through a simple client-server architecture. They expose data and tools through a standardized protocol, maintaining secure 1:1 connections with clients inside host applications like Claude Desktop.',
			icon: Database
		},
		{
			question: 'What can MCP Servers provide?',
			answer:
				'MCP Servers can share resources (files, docs, data), expose tools (API integrations, actions), and provide prompts (templated interactions). They control their own resources and maintain clear system boundaries for security.',
			icon: HelpCircle
		},
		{
			question: 'How does Claude use MCP?',
			answer:
				'Claude can connect to MCP servers to access external data sources and tools, enhancing its capabilities with real-time information. Currently, this works with local MCP servers, with enterprise remote server support coming soon.',
			icon: Server
		},
		{
			question: 'Are MCP Servers secure?',
			answer:
				"Yes, security is built into the MCP protocol. Servers control their own resources, there's no need to share API keys with LLM providers, and the system maintains clear boundaries. Each server manages its own authentication and access control.",
			icon: Shield
		},
		{
			question: 'What is model-context-protocol.com?',
			answer:
				'model-context-protocol.com is a community-driven platform that collects and organizes third-party MCP Servers. It serves as a central directory where users can discover, share, and learn about various MCP Servers available for AI applications.',
			icon: Globe
		},
		{
			question: 'How can I submit my MCP Server to m-c-p.com?',
			answer:
				"You can submit your MCP Server by creating a new issue in our GitHub repository. Click the 'Submit' button in the navigation bar or visit our GitHub issues page directly. Please provide details about your server including its name, description, features, and connection information.",
			icon: HelpCircle
		}
	]

	const column1 = faqs.slice(0, Math.ceil(faqs.length / 2))
	const column2 = faqs.slice(Math.ceil(faqs.length / 2))

	return (
		<section className="py-8 sm:py-16 px-4 sm:px-6 border-t border-slate-200">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-8 sm:mb-12">
					<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-3 sm:mb-4">
						Frequently Asked Questions
					</h2>
					<p className="text-base sm:text-lg text-slate-600">
						Everything you need to know about MCP Servers and how they
						work
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
					<div className="space-y-4">
						{column1.map((faq, index) => (
							<FaqItem
								key={index}
								question={faq.question}
								answer={faq.answer}
								icon={faq.icon}
								number={index + 1}
								isOpen={index === openIndexColumn1}
								onToggle={() =>
									setOpenIndexColumn1(
										index === openIndexColumn1 ? null : index
									)
								}
							/>
						))}
					</div>
					<div className="space-y-4">
						{column2.map((faq, index) => (
							<FaqItem
								key={index}
								question={faq.question}
								answer={faq.answer}
								icon={faq.icon}
								number={index + column1.length + 1}
								isOpen={index === openIndexColumn2}
								onToggle={() =>
									setOpenIndexColumn2(
										index === openIndexColumn2 ? null : index
									)
								}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	)
}

export default Faqs
