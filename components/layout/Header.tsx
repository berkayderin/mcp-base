'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
	Menu,
	Server,
	Users,
	LogIn,
	X,
	SendHorizontal,
	Search as SearchIcon,
	BookOpen
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Search from '@/components/layout/Search'
import AddServerModal from '@/components/core/AddServerModal'

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)
	const [addServerOpen, setAddServerOpen] = useState(false)

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 10)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	useEffect(() => {
		if (isMobileMenuOpen) {
			document.body.style.overflow = 'hidden'
		} else {
			document.body.style.overflow = 'auto'
		}
		return () => {
			document.body.style.overflow = 'auto'
		}
	}, [isMobileMenuOpen])

	return (
		<>
			<AddServerModal
				open={addServerOpen}
				onOpenChange={setAddServerOpen}
			/>
			<Search open={searchOpen} onOpenChange={setSearchOpen} />

			<header
				className={`sticky top-4 z-50 transition-all duration-300 w-full px-4 sm:px-6 md:px-8 ${
					scrolled
						? 'bg-transparent translate-y-0'
						: 'bg-transparent -translate-y-2'
				}`}
			>
				<div
					className={`w-full max-w-7xl mx-auto rounded-md ${
						scrolled
							? 'bg-white/98 backdrop-blur-sm shadow-sm'
							: 'bg-white'
					} border border-gray-200/80`}
				>
					<div className="px-4 sm:px-6 py-3 md:py-4">
						<div className="flex items-center justify-between">
							<div className="flex items-center gap-4 sm:gap-8">
								<Link
									href="/"
									className="flex items-center hover:opacity-90 transition-opacity"
								>
									<div className="flex items-center">
										<div className="flex items-center px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 shadow-sm hover:shadow-md transition-all">
											<span className="text-lg font-light text-white tracking-tight">
												<span className="font-medium">MCP</span>
											</span>
										</div>
									</div>
								</Link>

								<nav className="hidden lg:flex items-center space-x-3">
									<Link
										href="/servers"
										className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50/80"
									>
										<Server className="w-4 h-4" />
										<span>Servers</span>
									</Link>
									<Link
										href="/clients"
										className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50/80"
									>
										<Users className="w-4 h-4" />
										<span>Clients</span>
									</Link>
									<Link
										href="/blog"
										className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50/80"
									>
										<BookOpen className="w-4 h-4" />
										<span>Blog</span>
									</Link>
								</nav>
							</div>

							<div className="hidden lg:flex items-center gap-4">
								<Button
									variant="outline"
									className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-2 border-gray-200 hover:border-gray-300 w-64"
									onClick={() => setSearchOpen(true)}
								>
									<SearchIcon className="w-4 h-4" />
									Search
									<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 bg-gray-100 px-1.5 font-mono text-[10px] font-medium text-gray-600 opacity-100 ml-auto">
										<span className="text-xs">⌘</span>K
									</kbd>
								</Button>
								<Button
									variant="outline"
									className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-md hover:border-gray-200 hover:bg-gray-50/80"
									onClick={() => setAddServerOpen(true)}
								>
									<SendHorizontal className="w-4 h-4" />
									Add Server
								</Button>
								<Button
									variant="ghost"
									className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 px-4 py-2 rounded-md shadow-sm hover:shadow-md hover:text-white"
								>
									<LogIn className="w-4 h-4" />
									Sign In
								</Button>
							</div>

							<div className="lg:hidden">
								<Button
									variant="ghost"
									className="p-2 rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50/80"
									aria-label="Menu"
									onClick={() =>
										setIsMobileMenuOpen(!isMobileMenuOpen)
									}
								>
									{isMobileMenuOpen ? (
										<X className="w-5 h-5 text-gray-700" />
									) : (
										<Menu className="w-5 h-5 text-gray-700" />
									)}
								</Button>
							</div>
						</div>
					</div>
				</div>

				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="lg:hidden bg-white rounded-md border border-gray-200 shadow-sm mt-2 w-full max-w-7xl mx-auto overflow-hidden"
						>
							<motion.div
								initial={{ y: -20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.1, staggerChildren: 0.1 }}
								className="p-4 sm:p-6"
							>
								<nav className="flex flex-col space-y-2">
									<Button
										variant="outline"
										className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-2 border-gray-200 hover:border-gray-300 w-full justify-between"
										onClick={() => {
											setIsMobileMenuOpen(false)
											setSearchOpen(true)
										}}
									>
										<div className="flex items-center gap-2">
											<SearchIcon className="w-4 h-4" />
											Search
										</div>
										<kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-200 bg-gray-100 px-1.5 font-mono text-[10px] font-medium text-gray-600 opacity-100">
											<span className="text-xs">⌘</span>K
										</kbd>
									</Button>

									<Link
										href="/servers"
										className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 p-3 rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50/80"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<Server className="w-4 h-4" />
										<span>Servers</span>
									</Link>

									<Link
										href="/clients"
										className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 p-3 rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50/80"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<Users className="w-4 h-4" />
										<span>Clients</span>
									</Link>

									<Link
										href="/blog"
										className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 p-3 rounded-md border border-transparent hover:border-gray-200 hover:bg-gray-50/80"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<BookOpen className="w-4 h-4" />
										<span>Blog</span>
									</Link>

									<div className="border-t border-gray-100 my-2" />

									<Button
										variant="outline"
										className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 p-3 rounded-md hover:border-gray-200 hover:bg-gray-50/80 w-full"
										onClick={() => {
											setIsMobileMenuOpen(false)
											setAddServerOpen(true)
										}}
									>
										<SendHorizontal className="w-4 h-4" />
										Add Server
									</Button>

									<Button
										variant="ghost"
										className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white text-sm font-medium transition-all duration-300 inline-flex items-center gap-2 p-3 rounded-md shadow-sm hover:shadow-md w-full hover:text-white"
										onClick={() => setIsMobileMenuOpen(false)}
									>
										<LogIn className="w-4 h-4" />
										Sign In
									</Button>
								</nav>
							</motion.div>
						</motion.div>
					)}
				</AnimatePresence>
			</header>
		</>
	)
}

export default Header
