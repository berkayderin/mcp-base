'use client'
import React, { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'
import { getTopServers } from '@/backend/queries/servers'
import { getTopClients } from '@/backend/queries/clients'
import Link from 'next/link'
import { Card } from '@/types/types'
import InfiniteMovingCards from './InfiniteMovingCards'

const FeatureCards = () => {
	const [topServers, setTopServers] = useState<Card[]>([])
	const [topClients, setTopClients] = useState<Card[]>([])
	const [loading, setLoading] = useState(true)
	const [clientsLoading, setClientsLoading] = useState(true)

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

	const fetchTopClients = async () => {
		try {
			const clients = await getTopClients(10)
			setTopClients(clients)
		} catch (error) {
			console.error('Error fetching top clients:', error)
			setTopClients([])
		} finally {
			setClientsLoading(false)
		}
	}

	useEffect(() => {
		fetchTopServers()
		fetchTopClients()
	}, [])

	return (
		<div className="w-full space-y-16 py-12 flex flex-col items-center bg-gray-50 border-t border-slate-200">
			<div className="space-y-8 w-full max-w-7xl">
				<div className="flex items-center justify-between px-6">
					<h2 className="text-2xl font-bold text-gray-900">
						Featured MCP Servers
					</h2>
					<Link
						href="/servers"
						className="group flex items-center gap-2 px-4 py-1.5 rounded-md bg-white text-orange-500 border border-orange-200 hover:border-orange-400 transition-all duration-200 text-sm font-medium"
					>
						View All
						<ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
					</Link>
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
						No servers found
					</div>
				)}
			</div>

			<div className="space-y-8 w-full max-w-7xl">
				<div className="flex items-center justify-between px-6">
					<h2 className="text-2xl font-bold text-gray-900">
						Featured MCP Clients
					</h2>
					<Link
						href="/clients"
						className="group flex items-center gap-2 px-4 py-1.5 rounded-md bg-white text-orange-500 border border-orange-200 hover:border-orange-400 transition-all duration-200 text-sm font-medium"
					>
						View All
						<ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform duration-200" />
					</Link>
				</div>
				{clientsLoading ? (
					<div className="flex justify-center items-center h-32">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-500"></div>
					</div>
				) : topClients.length > 0 ? (
					<InfiniteMovingCards
						items={topClients}
						direction="right"
						speed="slow"
					/>
				) : (
					<div className="flex justify-center items-center h-32 text-gray-500">
						No clients found
					</div>
				)}
			</div>
		</div>
	)
}

export default FeatureCards
