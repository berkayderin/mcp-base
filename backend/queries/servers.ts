import { createClient } from '../supabase/client'

export interface ResponseServer {
	id: number
	name: string
	html_url: string
	description: string | null
	language: string | null
	stars: number
	categories: string[] | null
	ai_analysis?: string | null
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
	pageSize: number = 15,
	category?: string
) {
	const supabase = createClient()

	const from = (page - 1) * pageSize
	const to = from + pageSize - 1

	const { count: totalCount } = await supabase
		.from('servers')
		.select('id', { count: 'exact', head: true })

	let query = supabase
		.from('servers')
		.select('id', { count: 'exact', head: true })

	if (category && category !== 'All') {
		query = query.contains('categories', [category])
	}

	const { count: filteredCount, error: countError } = await query

	if (countError) {
		return { data: [], count: 0, totalCount: 0, totalPages: 0 }
	}

	let dataQuery = supabase
		.from('servers')
		.select(
			'id, name, html_url, description, language, stars, categories'
		)
		.order('stars', { ascending: false })
		.range(from, to)

	if (category && category !== 'All') {
		dataQuery = dataQuery.contains('categories', [category])
	}

	const { data, error } = await dataQuery

	if (error) {
		return { data: [], count: 0, totalCount: 0, totalPages: 0 }
	}

	const totalPages = Math.ceil((filteredCount || 0) / pageSize)

	return {
		data: data as ResponseServer[],
		count: filteredCount,
		totalCount,
		totalPages
	}
}

export async function getCategoryCounts() {
	const supabase = createClient()

	const { data, error } = await supabase
		.from('servers')
		.select('categories')

	if (error) {
		console.error('Error fetching category counts:', error)
		return {}
	}

	const categoryCounts: { [key: string]: number } = {}

	data.forEach((server) => {
		if (server.categories) {
			server.categories.forEach((category: string) => {
				categoryCounts[category] = (categoryCounts[category] || 0) + 1
			})
		}
	})

	return categoryCounts
}

export async function searchServers(
	searchQuery: string,
	page: number = 1,
	pageSize: number = 15
) {
	const supabase = createClient()
	const from = (page - 1) * pageSize
	const to = from + pageSize - 1

	const { count: totalCount } = await supabase
		.from('servers')
		.select('id', { count: 'exact', head: true })
		.or(
			`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,language.ilike.%${searchQuery}%`
		)

	const query = supabase
		.from('servers')
		.select(
			'id, name, html_url, description, language, stars, categories'
		)
		.or(
			`name.ilike.%${searchQuery}%,description.ilike.%${searchQuery}%,language.ilike.%${searchQuery}%`
		)
		.order('stars', { ascending: false })
		.range(from, to)

	const { data, error } = await query

	if (error) {
		console.error('Error searching servers:', error)
		return { data: [], totalCount: 0, totalPages: 0 }
	}

	const totalPages = Math.ceil((totalCount || 0) / pageSize)

	return {
		data: data as ResponseServer[],
		totalCount,
		totalPages
	}
}

export async function getServerById(id: number) {
	const supabase = createClient()

	const { data, error } = await supabase
		.from('servers')
		.select(
			'id, name, html_url, description, language, stars, categories, ai_analysis'
		)
		.eq('id', id)
		.single()

	if (error) {
		console.error('Error fetching server by id:', error)
		return null
	}

	return data as ResponseServer & { ai_analysis?: string }
}
