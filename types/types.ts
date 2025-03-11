type Card = {
	id: number
	name: string
	html_url: string
	description: string | null
	language: string | null
	stars: number
	categories: string[] | null
	slug?: string
}

export type { Card }
