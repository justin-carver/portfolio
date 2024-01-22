import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col sm:p-24 p-10 select-none'>
			<div className='flex justify-between'>
				<div className='flex flex-col gap-2 sm:mb-20 mb-8'>
					<h1 className='text-2xl tracking-wide'>Justin Carver</h1>
					<h3 className='text-sm text-gray-400 dark:text-slate-500'>
						<em>
							{
								"// I'm a developer, tinkerer, writer, and systems administrator!"
							}
						</em>
					</h3>
				</div>
				<Button variant={'outline'} className=''>
					<Github />
				</Button>
			</div>
			<aside className='min-w-1/3'>
				<ul className='flex sm:flex-col flex-row justify-between gap-1 w-auto'>
					{['Projects', 'Contact', 'Resume', 'Blog'].map((link) => (
						<li
							key={link}
							className='active:bg-slate-100 active:text-slate-800 inline-block p-1'>
							{link}
						</li>
					))}
				</ul>
			</aside>
		</main>
	);
}
