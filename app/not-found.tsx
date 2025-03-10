import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NotFound() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-indigo-50 px-4 py-12">
			<div className="text-center max-w-md mx-auto">
				<div className="relative mb-8">
					<div className="text-[150px] font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-pink-500 leading-none select-none">
						404
					</div>
					<div className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full scale-110 -z-10"></div>
				</div>

				<h2 className="text-3xl font-bold text-gray-900 mb-4">
					Page Not Found
				</h2>

				<p className="text-gray-600 mb-8">
					The page you&apos;re looking for doesn&apos;t exist or has
					been moved.
				</p>

				<Link
					href="/"
					className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-pink-600 transition-all shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
				>
					<ArrowLeft className="h-5 w-5 mr-2" />
					Back to Home
				</Link>
			</div>
		</div>
	)
}
