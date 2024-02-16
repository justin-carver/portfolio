import { InitMetadata } from '@/components/metadata';
import Projects from '@/components/projects';

export const metadata = InitMetadata({
    title: `Justin Carver's Projects`,
    description:
        'Discover the innovative web development and cybersecurity expertise \
    of Justin Carver. With over a decade in IT, a BSc in Cybersecurity, \
    and industry-standard IT certifications, Justin specializes in crafting secure, \
    scalable web applications using Next.js, TypeScript, and Node. \
    Explore cutting-edge projects and an SME for many business IT needs.',
});

const Page = () => {
    return <Projects />;
};

export default Page;
