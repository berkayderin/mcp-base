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
