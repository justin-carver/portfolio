import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const ProjectCard = (props: any) => {
	return (
		<Card className='flex xl:flex-row flex-col'>
			<div>
				<CardContent className='pt-6'>
					<div className='max-w-[500px]'>
						<Image
							src={props.src || '/devwork.jpg'}
							alt={props.alt || ''}
							width={500}
							height={500}
						/>
					</div>
				</CardContent>
				<CardHeader className='pt-0'>
					<CardTitle>{props.projectTitle}</CardTitle>
					<CardDescription>
						{props.projectDescription}
					</CardDescription>
					<div className='flex pt-2 gap-2'>
						{props.projectTags.map((tag: string) => (
							<Badge variant={'secondary'} key={tag}>
								{tag}
							</Badge>
						))}
					</div>
				</CardHeader>
			</div>
			<div className='p-6 text-sm dark:text-slate-500'>
				<p>Notes from Justin:</p>
				<p></p>
			</div>
		</Card>
	);
};

export default ProjectCard;
