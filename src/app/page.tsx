'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Github } from 'lucide-react';
import Projects from '@/components/projects';

export default function Home() {
	const [splashScreen, setSplashScreen] = useState<string>('');
	const sayings: string[] = [
		"// I'm a developer, analyst, writer, and systems administrator!",
		'/* In Python, I use def to define solutions */',
		'<!-- Full Stack Developer! Next.js 14 Powered Website! -->',
		"SELECT 'Cyber Security' FROM skills WHERE passion = true;",
	];

	type NavigationType =
		| 'Landing'
		| 'Projects'
		| 'Blog'
		| 'Contact'
		| 'Resume';
	const [currentNav, setCurrentNav] = useState<NavigationType>('Landing');
	const navigation: Record<NavigationType, JSX.Element> = {
		Landing: <></>,
		Projects: <Projects />,
		Blog: <></>,
		Contact: <></>,
		Resume: <></>,
	};

	useEffect(() => {
		setSplashScreen(sayings[Math.floor(Math.random() * sayings.length)]);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className='flex min-h-screen flex-col sm:p-24 p-10 select-none'>
			<div className='flex justify-between'>
				<div className='flex flex-col gap-2 sm:mb-20 mb-8'>
					<h1 className='text-4xl tracking-wide'>Justin Carver</h1>
					<h3 className='text-sm text-gray-400 dark:text-slate-500'>
						{splashScreen !== '' ? (
							<em>{splashScreen}</em>
						) : (
							<div>
								<Skeleton className='h-4 w-[full]' />
								<Skeleton className='h-4 w-3/4' />
							</div>
						)}
					</h3>
				</div>
				<Button
					variant={'outline'}
					onClick={() =>
						window.open(
							'https://github.com/justin-carver',
							'noreferrer'
						)
					}>
					<Github />
				</Button>
			</div>
			<div className='flex sm:flex-row flex-col'>
				<nav className='pr-20'>
					<ul className='flex flex-row sm:flex-col mb-6 gap-3 justify-between sm:w-fit'>
						{Object.keys(navigation)
							.filter((link) => link !== 'Landing')
							.map((link) => (
								<li
									key={link}
									className={`${
										currentNav == link ? 'currentnav ' : ''
									} p-1`}
									onClick={() =>
										setCurrentNav(link as NavigationType)
									}>
									{link}
								</li>
							))}
					</ul>
				</nav>
				<div className='sm:pl-20 w-full'>
					<div>{currentNav && navigation[currentNav]}</div>
				</div>
			</div>
		</main>
	);
}
