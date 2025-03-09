'use client'

import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false)

	const toggleVisibility = () => {
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight
		const scrollY = window.scrollY

		const isNearBottom = scrollY + clientHeight >= scrollHeight - 100

		if (isNearBottom) {
			setIsVisible(true)
		} else {
			setIsVisible(false)
		}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility)

		return () =>
			window.removeEventListener('scroll', toggleVisibility)
	}, [])

	return (
		<div className="fixed bottom-8 right-8 z-50">
			<button
				onClick={scrollToTop}
				className={`
					group
					flex items-center justify-center
					w-10 h-10 rounded-full
					bg-gray-50 dark:bg-gray-900
					text-gray-600 dark:text-gray-300
					border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600
					focus:outline-none focus:ring-2 focus:ring-primary-300
					transition-all duration-300 ease-in-out
					hover:bg-primary-50 dark:hover:bg-primary-900/30
					hover:text-primary-600 dark:hover:text-primary-400
					${
						isVisible
							? 'opacity-90 translate-y-0'
							: 'opacity-0 translate-y-10 pointer-events-none'
					}
				`}
				aria-label="Sayfanın üstüne çık"
			>
				<ArrowUp
					size={18}
					strokeWidth={2}
					className="transition-transform group-hover:scale-110"
				/>
			</button>
		</div>
	)
}
