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
	Search as SearchIcon
} from 'lucide-react'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Search from '@/components/layout/Search'

const Header = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const [searchOpen, setSearchOpen] = useState(false)

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
			<Search open={searchOpen} onOpenChange={setSearchOpen} />

			<header
				className={`sticky top-0 z-50 transition-all duration-300 ${
					scrolled
						? 'bg-white/95 backdrop-blur-sm shadow-sm'
						: 'bg-white'
				} border-b border-gray-200/80`}
			>
				<div className="container mx-auto px-4 sm:px-6 py-3 md:py-4">
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

							<nav className="hidden md:flex items-center space-x-3">
								<Link
									href="/servers"
									className="group relative overflow-hidden text-gray-800 hover:text-gray-900 text-sm font-medium transition-all duration-500 inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 border border-transparent hover:border-orange-200/60"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-orange-100/20 to-pink-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
									<div className="h-7 w-7 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center group-hover:from-orange-200 group-hover:to-pink-200 transition-colors duration-500 shadow-sm">
										<Server className="w-4 h-4 text-orange-500/80" />
									</div>
									<span className="font-medium">Servers</span>
								</Link>
								<Link
									href="/clients"
									className="group relative overflow-hidden text-gray-800 hover:text-gray-900 text-sm font-medium transition-all duration-500 inline-flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gradient-to-r hover:from-emerald-50 hover:to-teal-50 border border-transparent hover:border-emerald-200/60"
								>
									<div className="absolute inset-0 bg-gradient-to-r from-emerald-100/20 to-teal-100/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-lg"></div>
									<div className="h-7 w-7 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors duration-500 shadow-sm">
										<Users className="w-4 h-4 text-emerald-500/80" />
									</div>
									<span className="font-medium">Clients</span>
								</Link>
							</nav>
						</div>

						<div className="hidden md:flex items-center gap-4">
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
								variant="default"
								className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-6 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-2"
							>
								<SendHorizontal className="w-4 h-4" />
								Add Server
							</Button>
							<Button
								variant="ghost"
								className="text-gray-600 hover:text-gray-900 font-medium inline-flex items-center gap-2"
							>
								<LogIn className="w-4 h-4" />
								Sign In
							</Button>
						</div>

						<div className="md:hidden">
							<Button
								variant="ghost"
								className={`p-2 rounded-full ${
									isMobileMenuOpen ? 'bg-gray-100' : ''
								}`}
								aria-label="Menu"
								onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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

				<AnimatePresence>
					{isMobileMenuOpen && (
						<motion.div
							initial={{ opacity: 0, height: 0 }}
							animate={{ opacity: 1, height: 'auto' }}
							exit={{ opacity: 0, height: 0 }}
							transition={{ duration: 0.3 }}
							className="md:hidden fixed inset-x-0 top-[57px] bg-white border-b border-gray-200 shadow-lg z-40 overflow-hidden"
						>
							<motion.div
								initial={{ y: -20, opacity: 0 }}
								animate={{ y: 0, opacity: 1 }}
								transition={{ delay: 0.1, staggerChildren: 0.1 }}
								className="container mx-auto px-4 py-5"
							>
								<nav className="flex flex-col space-y-3">
									<motion.div
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.1 }}
									>
										<Button
											variant="outline"
											className="w-full text-gray-600 hover:text-gray-900 font-medium flex items-center gap-2 border-gray-200 hover:border-gray-300 py-5 mb-3 justify-between"
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
									</motion.div>

									<motion.div
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.2 }}
									>
										<Link
											href="/servers"
											className="group relative overflow-hidden bg-gradient-to-r from-orange-50 to-pink-50 text-gray-800 hover:text-gray-900 text-sm font-medium transition-all duration-300 flex items-center gap-2.5 px-4 py-3 rounded-xl hover:from-orange-100 hover:to-pink-100 border border-orange-200/30"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											<div className="h-8 w-8 rounded-full bg-gradient-to-br from-orange-100 to-pink-100 flex items-center justify-center group-hover:from-orange-200 group-hover:to-pink-200 transition-colors duration-300 shadow-sm">
												<Server className="w-4 h-4 text-orange-500/80" />
											</div>
											<div className="flex flex-col">
												<span className="font-medium">Servers</span>
												<span className="text-xs text-gray-500">
													Manage your servers
												</span>
											</div>
											<div className="ml-auto bg-white text-orange-500 text-xs px-2.5 py-1 rounded-full font-medium shadow-sm border border-orange-100">
												23
											</div>
										</Link>
									</motion.div>

									<motion.div
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.3 }}
									>
										<Link
											href="/clients"
											className="group relative overflow-hidden bg-gradient-to-r from-emerald-50 to-teal-50 text-gray-800 hover:text-gray-900 text-sm font-medium transition-all duration-300 flex items-center gap-2.5 px-4 py-3 rounded-xl hover:from-emerald-100 hover:to-teal-100 border border-emerald-200/30"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											<div className="h-8 w-8 rounded-full bg-gradient-to-br from-emerald-100 to-teal-100 flex items-center justify-center group-hover:from-emerald-200 group-hover:to-teal-200 transition-colors duration-300 shadow-sm">
												<Users className="w-4 h-4 text-emerald-500/80" />
											</div>
											<div className="flex flex-col">
												<span className="font-medium">Clients</span>
												<span className="text-xs text-gray-500">
													View all clients
												</span>
											</div>
											<div className="ml-auto bg-white text-emerald-500 text-xs px-2.5 py-1 rounded-full font-medium shadow-sm border border-emerald-100">
												7
											</div>
										</Link>
									</motion.div>

									<motion.div
										initial={{ y: -10, opacity: 0 }}
										animate={{ y: 0, opacity: 1 }}
										transition={{ delay: 0.4 }}
										className="flex flex-col space-y-2.5 pt-4 mt-2 border-t border-gray-100"
									>
										<Button
											variant="default"
											className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-medium px-6 py-6 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 text-base"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											<SendHorizontal className="w-5 h-5" />
											Add Server
										</Button>
										<Button
											variant="outline"
											className="text-gray-700 hover:text-gray-900 font-medium flex items-center justify-center gap-2 w-full py-5 rounded-xl border-gray-200 hover:border-gray-300 hover:bg-gray-50"
											onClick={() => setIsMobileMenuOpen(false)}
										>
											<LogIn className="w-5 h-5" />
											Sign In
										</Button>
									</motion.div>
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
