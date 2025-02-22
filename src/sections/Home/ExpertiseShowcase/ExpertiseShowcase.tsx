import React from "react";

const projects = [
	{ name: "Advent Hope", image: "/images/AdventHope.png", link: 'https://advent-hope.org/' },
	{ name: "Hakikibilim", image: "/images/Hakikibilim.png", link: 'https://www.hakikibilim.com/' },
	{ name: "Halarosis", image: "/images/Halarosis.png", link: 'https://halarosis.com/' },
	{ name: "Iconic Visa Solutions", image: "/images/IconicVisaSolutions.png", link: 'https://iconicvisasolutions.com/' },
	{ name: "Lineage Journey", image: "/images/LineageJourney.png", link: 'https://lineagejourney.com/' },
	{ name: "Zephyr", image: "/images/Zephyr.png", link: 'https://zephyrinternational.com.np/' },
];

const ExpertiseShowcase = () => {
	return (
		<div id='portfolio' className="flex flex-col items-center py-10">
			<h2 className="text-3xl font-semibold mb-8 px-2 text-center">Showcasing My Expertise</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 py-4 px-4 lg:px-20">
				{projects.map((project, index) => (
					<div key={index} className="relative group">
						<a href={project.link} target='_blank'>
							<div style={{ backgroundImage: `url(${project.image})` }} className="rounded-lg shadow-md w-[360px] h-52 bg-cover" />
							<div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-center py-3 rounded-b-lg">
								{project.name}
							</div>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default ExpertiseShowcase;