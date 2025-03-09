import { createServerSideClient } from '@/backend/supabase/server'
import { NextResponse } from 'next/server'

export async function GET() {
	try {
		const supabase = createServerSideClient()

		const { data, error } = await supabase
			.from('servers')
			.select('id, name')
			.limit(5)

		if (error) {
			return NextResponse.json(
				{ error: 'Failed to fetch data' },
				{ status: 500 }
			)
		}

		return NextResponse.json({ data })
	} catch (error) {
		console.error('Server-side Supabase error:', error)
		return NextResponse.json(
			{ error: 'Internal server error' },
			{ status: 500 }
		)
	}
}
