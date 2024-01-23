import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const ProjectCard = () => {
	return (
		<Card className='max-w-[500px] min-w-[300px]'>
			<CardContent className='p-0 bg-clip-padding'>
				<Image
					src={'/devwork.jpg'}
					alt={''}
					width={500}
					height={500}
					layout={'responsive'}
				/>
			</CardContent>
			<CardHeader>
				<CardTitle>Project Title</CardTitle>
				<CardDescription>Card Description</CardDescription>
				<div className='flex flex-row pt-2'>
					<Badge variant={'secondary'}>Next.js</Badge>
				</div>
			</CardHeader>
		</Card>
	);
};

export default ProjectCard;
