'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />
			<div className="absolute inset-0">
				<div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
			</div>

			<div className="relative z-10 max-w-4xl w-full mx-4">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
				>
					<div className="flex items-center gap-2 mb-4">
						<div className="w-3 h-3 rounded-full bg-red-500" />
						<div className="w-3 h-3 rounded-full bg-yellow-500" />
						<div className="w-3 h-3 rounded-full bg-green-500" />
					</div>
					<div className="font-mono">
						<p className="text-green-500">$ whoami</p>
						<h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">Kazi Khaled Nur</h1>
						<p className="text-gray-400 mb-2">Software Engineer</p>
						<p className="text-green-500">$ skills</p>
						<div className="flex flex-wrap gap-2 mt-2">
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Python</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Django</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Django REST Framework</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Celery</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Websocket</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">PostgreSQL</span>
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Docker</span>
							{/* <span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Terraform</span> */}
							<span className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20">Jenkins</span>
						</div>
						<motion.a
							href="#contact"
							initial={{ opacity: 0, y: 10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 1, duration: 0.6 }}
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.97 }}
							className="mt-8 inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 rounded-lg text-black font-semibold shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:shadow-[0_0_30px_rgba(34,197,94,0.5)] transition-all duration-300"
						>
							<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
								<path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
							</svg>
							Get in Touch
						</motion.a>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
