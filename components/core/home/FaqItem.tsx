import React from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, LucideIcon } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FaqItemProps {
	question: string
	answer: string
	isOpen: boolean
	onToggle: () => void
	icon: LucideIcon
}

const FaqItem = ({
	question,
	answer,
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
						<span className="text-base sm:text-lg font-semibold text-slate-900">
							{question}
						</span>
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

export default FaqItem
