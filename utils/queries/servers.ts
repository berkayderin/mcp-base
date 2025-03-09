import { createClient } from '../supabase/client'

export interface ResponseServer {
	id: number
	name: string
	html_url: string
	description: string | null
	language: string | null
	stars: number
	categories: string[] | null
}

export async function getTopServers(limit: number = 10) {
	const supabase = createClient()

	const { data, error } = await supabase
		.from('servers')
		.select(
			'id, name, html_url, description, language, stars, categories'
		)
		.order('stars', { ascending: false })
		.limit(limit)

	if (error) {
		console.error('Error fetching top servers:', error)
		return []
	}

	return data as ResponseServer[]
}

export async function getServersWithPagination(
	page: number = 1,
	pageSize: number = 15
) {
	const supabase = createClient()

	const from = (page - 1) * pageSize
	const to = from + pageSize - 1

	const { count, error: countError } = await supabase
		.from('servers')
		.select('id', { count: 'exact', head: true })

	if (countError) {
		console.error('Error fetching servers count:', countError)
		return { data: [], count: 0, totalPages: 0 }
	}

	const { data, error } = await supabase
		.from('servers')
		.select(
			'id, name, html_url, description, language, stars, categories'
		)
		.order('stars', { ascending: false })
		.range(from, to)

	if (error) {
		console.error('Error fetching servers with pagination:', error)
		return { data: [], count: 0, totalPages: 0 }
	}

	const totalPages = Math.ceil((count || 0) / pageSize)

	return {
		data: data as ResponseServer[],
		count,
		totalPages
	}
}
