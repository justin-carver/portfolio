/**
 * This may become an external file later.
 */

type completedProjectType = {
	projectTitle: string;
	projectDescription: string;
	projectTags: string[];
	projectNotes: string;
};

export const completedProjects: completedProjectType[] = [
	{
		projectTitle: 'Squrl',
		projectDescription:
			'Squrl, Secure Quick URL, is a URL shortening service that offers secure end-to-end encryption.',
		projectTags: ['Next.js', 'TailwindCSS'],
		projectNotes: '',
	},
];
