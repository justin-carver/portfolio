'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import Link from 'next/link';
import { Skeleton } from '@/components/ui/skeleton';
import { Github } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { sayings } from '@/lib/data';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const pathname = usePathname();
    const navigation: string[] = ['Landing', 'Projects', 'Blog', 'Contact', 'Resume'];
    const [splashScreen, setSplashScreen] = useState<string>('');

    useEffect(() => {
        setSplashScreen(sayings[Math.floor(Math.random() * sayings.length)]);
    }, []);

    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    <div className="flex justify-between sm:px-24 px-10 pt-24">
                        <div className="flex flex-col gap-2 sm:mb-20 mb-8 select-none">
                            <Link href="/">
                                <h1 className="text-4xl tracking-wide mb-2">Justin Carver</h1>
                            </Link>
                            <h3 className="text-sm text-gray-400 dark:text-slate-500">
                                {splashScreen !== '' ? (
                                    <em className="font-mono">{splashScreen}</em>
                                ) : (
                                    <div>
                                        <Skeleton className="h-4 w-full" />
                                        <Skeleton className="h-4 w-3/4 mt-2 sm:hidden" />
                                    </div>
                                )}
                            </h3>
                        </div>
                        <Link href="https://github.com/justin-carver">
                            <div className="border-slate-600 rounded-md border p-2">
                                <Github />
                            </div>
                        </Link>
                    </div>
                    <main className="flex min-h-screen flex-col sm:px-24 px-10">
                        <div className="flex sm:flex-row flex-col">
                            <nav className="sm:pr-24 select-none sm:w-auto">
                                <div className="flex flex-row sm:flex-col mb-6 gap-3 justify-between sm:w-fit cursor-pointer">
                                    {navigation
                                        .filter((link) => link !== 'Landing')
                                        .map((link) => (
                                            <Link
                                                key={link}
                                                className={`${
                                                    pathname.toLowerCase().substring(1) == link.toLowerCase()
                                                        ? 'currentnav '
                                                        : ''
                                                } p-1 hover:text-slate-700/50 hover:dark:text-gray-500`}
                                                href={`/${link.toLowerCase()}`}
                                            >
                                                {link}
                                            </Link>
                                        ))}
                                </div>
                            </nav>
                            <div className="sm:pl-20 w-full">{children}</div>
                        </div>
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}
