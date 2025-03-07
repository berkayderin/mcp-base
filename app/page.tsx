import FeatureCards from '@/components/core/FeatureCards'
import Header from '@/components/layout/Header'
import { Cover } from '@/components/ui/cover'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { InteractiveHoverButton } from '@/components/magicui/interactive-hover-button'

const Home = () => {
	return (
		<div>
			<Header />
			<main className="flex-1 flex flex-col items-center justify-center py-16 px-6 text-center">
				<div className="max-w-4xl mx-auto">
					<div className="mb-6 flex justify-center">
						<div className="px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-medium text-gray-600 inline-flex items-center shadow-sm">
							<span className="mr-2">🚀</span>
							<AnimatedShinyText shimmerWidth={150}>
								+1985 MCP Servers in list
							</AnimatedShinyText>
						</div>
					</div>

					<h1 className="text-5xl md:text-7xl font-bold mb-6">
						<span className="text-gray-900">Find Awesome </span>
						<span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
							MCP <Cover>Servers</Cover> and <Cover>Clients</Cover>
						</span>
					</h1>

					<p className="text-xl md:text-2xl text-gray-600 mb-10">
						The largest collection of MCP Servers.
					</p>

					<div className="flex justify-center">
						<InteractiveHoverButton>
							Become a Member
						</InteractiveHoverButton>
					</div>
				</div>
			</main>
			<FeatureCards />
		</div>
	)
}

export default Home
