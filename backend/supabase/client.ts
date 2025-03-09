import {
	createBrowserClient,
	createServerClient
} from '@supabase/ssr'
import { cookies } from 'next/headers'
import { CookieOptions } from '@supabase/ssr'

export function createClient() {
	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

	if (!supabaseUrl || !supabaseKey) {
		throw new Error(
			'Supabase URL and API key are required! Please check the .env file.'
		)
	}

	return createBrowserClient(supabaseUrl, supabaseKey)
}

export function createServerSideClient() {
	const cookieStore = cookies()

	const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
	const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

	if (!supabaseUrl || !supabaseKey) {
		throw new Error(
			'Supabase URL and API key are required! Please check the .env file.'
		)
	}

	return createServerClient(supabaseUrl, supabaseKey, {
		cookies: {
			get(name: string) {
				return cookieStore.get(name)?.value
			},
			set(name: string, value: string, options: CookieOptions) {
				cookieStore.set({ name, value, ...options })
			},
			remove(name: string, options: CookieOptions) {
				cookieStore.set({ name, value: '', ...options })
			}
		}
	})
}
