'use client';

import ProjectCard from './project-card';
import { completedProjects } from '@/app/api/data';

const Projects = () => {
	return (
		<div className='flex flex-col md:pt-0 pt-5 gap-8 md:justify-normal justify-center'>
			{completedProjects.map((e, i) => (
				<ProjectCard
					key={i}
					projectTitle={completedProjects[i].projectTitle}
					projectDescription={completedProjects[i].projectDescription}
					projectTags={completedProjects[i].projectTags}
					projectNotes={completedProjects[i].projectNotes}
				/>
			))}
		</div>
	);
};

export default Projects;
