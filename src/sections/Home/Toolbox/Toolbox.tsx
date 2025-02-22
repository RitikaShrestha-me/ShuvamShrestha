import React from "react";
import { GithubIcon, JiraIcon, ExcelIcon, FigmaIcon, TableauIcon, TrelloIcon } from '@/assets/svg';

const tools = [
	{ name: "Jira", logo: <JiraIcon /> },
	{ name: "Trello", logo: <TrelloIcon /> },
	{ name: "Github", logo: <GithubIcon /> },
	{ name: "Figma", logo: <FigmaIcon /> },
	{ name: "Excel", logo: <ExcelIcon /> },
	{ name: "Tableau", logo: <TableauIcon /> },
];

const Toolbox = () => {
	return (
		<div className="flex w-full flex-col px-4 lg:px-20 items-center py-10">
			<h2 className="text-2xl font-semibold text-center mb-8">My Toolbox for Project Success</h2>
			<div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
				{tools.map((tool, index) => (
					<div key={index} className="flex items-center gap-2 space-x-3 p-4 border rounded-lg shadow-sm hover:shadow-md transition">
						<div className='h-6 w-6 flex items-center justify-center'>{tool.logo}</div>
						<span className="text-lg font-medium">{tool.name}</span>
					</div>
				))}
			</div>
		</div>
	);
};

export default Toolbox;