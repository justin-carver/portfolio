'use client';

import { InitMetadata } from './metadata';
import ProjectCard from './project-card';
import { completedProjects } from '@/lib/data';

export const metadata = InitMetadata({
    title: 'Justin Carver -- Projects',
});

const Projects = () => {
    return (
        <div className="flex flex-wrap md:pt-0 pt-5 gap-8 md:justify-normal justify-center">
            {completedProjects.map((e, i) => (
                <ProjectCard
                    key={i}
                    src={completedProjects[i].projectImage}
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
