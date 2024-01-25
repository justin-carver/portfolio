import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

import { ThemeProvider } from '@/components/theme-provider';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Justin Carver — Professional Freelance Web Developer',
    description:
        'Discover the innovative web development and cybersecurity expertise \
		of Justin Carver. With over a decade in IT, a BSc in Cybersecurity, \
		and industry-standard IT certifications, Justin specializes in crafting secure, \
		scalable web applications using Next.js, TypeScript, and Node. \
		Explore cutting-edge projects and an SME for many business IT needs.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
                    {children}
                </ThemeProvider>
            </body>
        </html>
    );
}
