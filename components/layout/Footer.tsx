import React from 'react'
import Link from 'next/link'
import { FaGithub, FaXTwitter, FaDiscord } from 'react-icons/fa6'
import { IoIosMail } from 'react-icons/io'

const Footer = () => {
	return (
		<footer className="border-t pt-8 md:pt-10 pb-4 md:pb-5">
			<div className="container mx-auto px-4">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
					<div className="col-span-1">
						<Link
							href="/"
							className="flex items-center hover:opacity-90 transition-opacity mb-4 md:mb-6 justify-center md:justify-start"
						>
							<div className="flex items-center">
								<div className="flex items-center px-3 py-2 rounded-md bg-gradient-to-r from-orange-500 to-pink-500 shadow-sm hover:shadow-md transition-all">
									<span className="text-lg font-light text-white tracking-tight">
										<span className="font-medium">MCP</span>
									</span>
								</div>
							</div>
						</Link>
						<p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base text-center md:text-left">
							The largest collection of MCP Servers, featuring Awesome
							MCP Servers and Claude MCP integration.
						</p>
						<div className="flex space-x-4 justify-center md:justify-start">
							<Link
								href="#"
								className="text-gray-600 hover:text-black transition-colors"
							>
								<FaXTwitter size={20} />
							</Link>
							<Link
								href="#"
								className="text-gray-600 hover:text-black transition-colors"
							>
								<FaGithub size={20} />
							</Link>
							<Link
								href="#"
								className="text-gray-600 hover:text-black transition-colors"
							>
								<FaDiscord size={20} />
							</Link>
							<Link
								href="#"
								className="text-gray-600 hover:text-black transition-colors"
							>
								<IoIosMail size={20} />
							</Link>
						</div>
					</div>

					<div className="col-span-2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8">
						<div className="text-center md:text-left">
							<h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">
								Resources
							</h3>
							<ul className="space-y-2 md:space-y-3">
								<li>
									<Link
										href="#"
										className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
									>
										Model Context Protocol
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
									>
										MCP Starter Guide
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
									>
										Claude MCP Servers
									</Link>
								</li>
							</ul>
						</div>
						<div className="text-center md:text-left">
							<h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">
								Community
							</h3>
							<ul className="space-y-2 md:space-y-3">
								<li>
									<Link
										href="#"
										className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
									>
										Telegram
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
									>
										Discord
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
									>
										GitHub
									</Link>
								</li>
							</ul>
						</div>
						<div className="text-center md:text-left">
							<h3 className="font-medium mb-3 md:mb-4 text-sm md:text-base">
								Legal
							</h3>
							<ul className="space-y-2 md:space-y-3">
								<li>
									<Link
										href="#"
										className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										href="#"
										className="text-gray-600 hover:text-black transition-colors text-sm md:text-base"
									>
										Terms of Service
									</Link>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="flex flex-col md:flex-row md:justify-end justify-between items-center">
					<div className="mb-2 md:mb-0">
						<p className="text-sm text-gray-600 text-center md:text-left">
							<span className="font-semibold">
								model-context-protocol
							</span>{' '}
							© {new Date().getFullYear()} All rights reserved
						</p>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
