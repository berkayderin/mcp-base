'use client'

import React, { useState } from 'react'
import { TbLocationQuestion } from 'react-icons/tb'

import FaqItem from './FaqItem'
import { faqs } from '@/data/faqs'

const Faqs = () => {
	const [openIndexColumn1, setOpenIndexColumn1] = useState<
		number | null
	>(null)
	const [openIndexColumn2, setOpenIndexColumn2] = useState<
		number | null
	>(null)

	const column1 = faqs.slice(0, Math.ceil(faqs.length / 2))
	const column2 = faqs.slice(Math.ceil(faqs.length / 2))

	return (
		<section className="py-8 sm:py-16 px-4 sm:px-6 border-t border-slate-200">
			<div className="max-w-6xl mx-auto">
				<div className="text-center mb-8 sm:mb-12">
					<div className="flex flex-col items-center gap-3">
						<div className="w-14 h-14 border border-slate-200 rounded-md bg-slate-50/50 flex items-center justify-center">
							<TbLocationQuestion className="w-6 h-6 text-slate-500" />
						</div>
						<h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
							Frequently Asked Questions
						</h2>
					</div>
					<p className="text-base sm:text-lg text-slate-600 mt-4">
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
