'use client';

import ProjectCard from './project-card';

const Projects = () => {
	return (
		<div className='flex flex-wrap md:pt-0 pt-5 gap-8 md:justify-normal justify-center'>
			{[0, 0, 0, 0, 0, 0, 0, 0].map((e) => (
				<ProjectCard key={e} />
			))}
		</div>
	);
};

export default Projects;
