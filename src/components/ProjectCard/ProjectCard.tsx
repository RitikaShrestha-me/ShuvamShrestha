
import React from 'react';
import Image from 'next/image';
import { ExternalLink, GithubIcon } from '@/assets/svg';

export interface Project {
	id: string;
	title: string;
	liveDemoUrl: string;
	imageUrl: string;
	dataAiHint?: string;
	repositoryUrl?: string;
	technologies?: string[];
	manualCategory?: string;
	summary?: string;
	aiCategories?: string[];
	aiKeywords?: string[];
}

interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
	return (
		<div
			className="flex flex-col h-full rounded-2xl bg-white border shadow-sm hover:shadow-md hover:-translate-y-1 transform transition-all duration-300 ease-in-out p-5 animate-fadeIn"
			style={{ animationDelay: `${index * 100}ms` }}
			aria-labelledby={`project-title-${project.id}`}
		>
			<header className="mb-4">
				<h3
					id={`project-title-${project.id}`}
					className="font-semibold text-center text-lg text-gray-900"
				>
					{project.title}
				</h3>
				{project.manualCategory && (
					<p className="text-sm text-gray-500 mt-1">{project.manualCategory}</p>
				)}
			</header>

			<div className="relative w-full h-48 rounded-lg overflow-hidden mb-4">
				<Image
					src={project.imageUrl}
					alt={`Screenshot of ${project.title}`}
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover transition-transform duration-300 hover:scale-105"
					data-ai-hint={project.dataAiHint || 'project image'}
				/>
			</div>

			{project.technologies && project.technologies.length > 0 && (
				<div className="mb-3">
					<h4 className="text-xs font-semibold uppercase text-muted-foreground mb-1.5">
						Technologies used:
					</h4>
					<div className="flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<span
								key={tech}
								className="px-2 py-1 text-xs rounded-full border border-primary text-primary bg-primary bg-opacity-10"
							>
								{tech}
							</span>
						))}
					</div>
				</div>
			)}

			<div className="text-sm text-gray-700 mb-6 min-h-[60px]">
				{project.summary}
			</div>

			<footer className="mt-auto pt-4 border-t border-gray-200">
				<div className="flex gap-2">
					<a
						href={project.liveDemoUrl}
						target="_blank"
						rel="noopener noreferrer"
						className="flex items-center justify-center gap-1 px-3 py-2 text-sm text-primary hover:underline transition"
					>
						<ExternalLink className="w-4 h-4" /> Live Demo
					</a>

					{project.repositoryUrl && (
						<a
							href={project.repositoryUrl}
							target="_blank"
							rel="noopener noreferrer"
							className="flex items-center justify-center gap-1 px-3 py-2 text-sm text-gray-700 hover:underline transition"
						>
							<GithubIcon className="w-4 h-4" /> Source
						</a>
					)}
				</div>
			</footer>
		</div>
	);
}

export default ProjectCard;