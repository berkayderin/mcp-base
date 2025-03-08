import React from 'react'

const PrivacyPolicyPage = () => {
	return (
		<div className="container mx-auto px-4 py-8 max-w-4xl">
			<h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Introduction</h2>
				<p className="mb-4">
					Welcome to mcp.so, a third-party Model Context Protocol
					(MCP) servers store. We value your privacy and are committed
					to protecting your personal information. This privacy policy
					explains how we collect, use, and safeguard your information
					when you use our MCP server hosting and distribution
					services.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					Information Collection and Use
				</h2>
				<p className="mb-2">
					We collect and use the following types of information:
				</p>

				<div className="mb-4">
					<h3 className="text-xl font-medium mb-2">
						MCP Server Information
					</h3>
					<ul className="list-disc pl-6 mb-2">
						<li>
							<strong>What We Collect:</strong> Information necessary
							to host and distribute MCP servers, including server
							configurations, technical specifications, and usage
							metrics.
						</li>
						<li>
							<strong>Purpose:</strong> To provide secure and reliable
							MCP server hosting and distribution services.
						</li>
					</ul>
				</div>

				<div className="mb-4">
					<h3 className="text-xl font-medium mb-2">
						Account Information
					</h3>
					<ul className="list-disc pl-6 mb-2">
						<li>
							<strong>What We Collect:</strong> Basic contact
							information such as name, email, and
							developer/organization details.
						</li>
						<li>
							<strong>Purpose:</strong> To manage user accounts and
							provide support for MCP server deployments.
						</li>
					</ul>
				</div>

				<div className="mb-4">
					<h3 className="text-xl font-medium mb-2">Technical Data</h3>
					<ul className="list-disc pl-6 mb-2">
						<li>
							<strong>What We Collect:</strong> Information about how
							you interact with our MCP servers and platform.
						</li>
						<li>
							<strong>Purpose:</strong> To improve our services,
							ensure security, and enhance user experience.
						</li>
					</ul>
				</div>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Data Security</h2>
				<p className="mb-4">
					We implement industry-standard security measures to protect
					your information and MCP server data. All data is treated
					with strict confidentiality and is only accessed by
					authorized personnel who need it to maintain our services.
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					Information Sharing
				</h2>
				<p className="mb-2">
					We do not sell or share your information with third parties
					except:
				</p>
				<ul className="list-disc pl-6">
					<li>When required by law</li>
					<li>With your explicit consent</li>
					<li>
						With service providers who help us operate our services
						(under confidentiality agreements)
					</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
				<p className="mb-2">You have the right to:</p>
				<ul className="list-disc pl-6">
					<li>Access your personal information</li>
					<li>Request corrections to your data</li>
					<li>Request deletion of your data</li>
					<li>Opt-out of marketing communications</li>
				</ul>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
				<p className="mb-4">
					If you have questions about this privacy policy or our
					privacy practices, please contact us at:
				</p>
				<p className="mb-4">
					<strong>Email:</strong>{' '}
					<a
						href="mailto:support@model-context-protocol.com"
						className="text-blue-600 hover:underline"
					>
						support@model-context-protocol.com
					</a>
				</p>
			</section>

			<section className="mb-8">
				<h2 className="text-2xl font-semibold mb-4">
					Updates to This Policy
				</h2>
				<p className="mb-4">
					We may update this privacy policy periodically. Any changes
					will be posted on this page with an updated effective date.
					Your continued use of our services after such modifications
					constitutes your acknowledgment of the modified policy.
				</p>
			</section>

			<footer className="text-sm text-gray-600 mt-8 pt-4 border-t">
				<p>Last updated: February 3, 2025</p>
			</footer>
		</div>
	)
}

export default PrivacyPolicyPage
