import Landing from '@/components/landing';
import { InitMetadata } from '@/components/metadata';

export const metadata = InitMetadata({
    title: 'Justin Carver — Professional Freelance Web Developer',
    description:
        'Discover the innovative web development and cybersecurity expertise \
    of Justin Carver. With over a decade in IT, a BSc in Cybersecurity, \
    and industry-standard IT certifications, Justin specializes in crafting secure, \
    scalable web applications using Next.js, TypeScript, and Node. \
    Explore cutting-edge projects and an SME for many business IT needs.',
});

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col">
            <div className="flex sm:flex-row flex-col">
                <Landing />
            </div>
        </main>
    );
}
