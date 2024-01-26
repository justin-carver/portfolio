'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Github } from 'lucide-react';

import Projects from '@/components/projects';
import Landing from '@/components/landing';

import { sayings } from '@/lib/data';

export default function Home() {
    const [splashScreen, setSplashScreen] = useState<string>('');

    type NavigationType = 'Landing' | 'Projects' | 'Blog' | 'Contact' | 'Resume';
    const [currentNav, setCurrentNav] = useState<NavigationType>('Landing');
    const navigation: Record<NavigationType, JSX.Element> = {
        Landing: <Landing />,
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
        <main className="flex min-h-screen flex-col sm:p-24 p-10">
            <div className="flex justify-between">
                <div className="flex flex-col gap-2 sm:mb-20 mb-8 select-none">
                    <div className="cursor-pointer" onClick={() => setCurrentNav('Landing')}>
                        <h1 className="text-4xl tracking-wide mb-2">Justin Carver</h1>
                    </div>
                    <h3 className="text-sm text-gray-400 dark:text-slate-500">
                        {splashScreen !== '' ? (
                            <em className="font-mono">{splashScreen}</em>
                        ) : (
                            <div>
                                <Skeleton className="h-4 w-full" />
                                <Skeleton className="h-4 w-3/4 mt-2" />
                            </div>
                        )}
                    </h3>
                </div>
                <Button
                    variant={'outline'}
                    onClick={() => window.open('https://github.com/justin-carver', 'noreferrer')}
                >
                    <Github />
                </Button>
            </div>
            <div className="flex sm:flex-row flex-col">
                <nav className="sm:pr-24 select-none sm:w-auto">
                    <ul className="flex flex-row sm:flex-col mb-6 gap-3 justify-between sm:w-fit cursor-pointer">
                        {Object.keys(navigation)
                            .filter((link) => link !== 'Landing')
                            .map((link) => (
                                <li
                                    key={link}
                                    className={`${
                                        currentNav == link ? 'currentnav ' : ''
                                    } p-1 hover:text-slate-700/50 hover:dark:text-gray-500`}
                                    onClick={() => setCurrentNav(link as NavigationType)}
                                >
                                    {link}
                                </li>
                            ))}
                    </ul>
                </nav>
                <div className="sm:pl-20 w-full">
                    <div>{currentNav && navigation[currentNav]}</div>
                </div>
            </div>
        </main>
    );
}
