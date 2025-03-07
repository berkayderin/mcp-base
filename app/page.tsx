import Header from '@/components/layout/Header'

const Home = () => {
	return (
		<div className="min-h-screen flex flex-col bg-white text-gray-900">
			<Header />
			<main className="flex-1 container mx-auto px-6 py-8">
				<h1 className="text-3xl font-bold text-gray-900">
					Ana Sayfa İçeriği
				</h1>
				<p className="mt-4 text-gray-600">
					Buraya ana sayfa içeriği gelecek.
				</p>
			</main>
		</div>
	)
}

export default Home
