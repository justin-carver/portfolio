/* eslint-disable react/no-unescaped-entities */
'use client';

import { brandColors } from '@/lib/data';
import { Separator } from './ui/separator';

const Landing = () => {
    type MarkdownStylingProps = {
        children: React.ReactNode | undefined;
        className?: string | undefined;
        color?: keyof typeof brandColors | undefined;
    };

    const MarkdownStyling = ({ children, color = 'primary', className }: MarkdownStylingProps) => {
        return <span className={`${brandColors[color]} ${className}`}>{children}</span>;
    };

    return (
        <div className="flex max-w-[1000px]">
            {
                <code className="flex flex-col gap-4">
                    <div>
                        <MarkdownStyling className="text-lg italic"># Welcome to My Portfolio!</MarkdownStyling>
                    </div>
                    <div>
                        I'm a passionate Full Stack Developer based in{' '}
                        <MarkdownStyling className="text-lg italic" color="secondary">
                            Dallas, TX
                        </MarkdownStyling>{' '}
                        with a knack for transforming ideas into digital realities. With a blend of creativity and
                        technical expertise, I build seamless, scalable web applications that provide engaging user
                        experiences.
                    </div>
                    <div>
                        <MarkdownStyling className="text-lg italic">## What I Do</MarkdownStyling>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4 list-disc ml-4">
                            <li>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>
                                <MarkdownStyling>Web Development</MarkdownStyling>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>: Crafting responsive and dynamic
                                websites with HTML, CSS, JavaScript, React, and Next.js.
                            </li>
                            <li>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>
                                <MarkdownStyling>Back-End Solutions</MarkdownStyling>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>: Developing robust server-side
                                logic using Node.js, Express, and working with SQL and NoSQL databases.
                            </li>
                            <li>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>
                                <MarkdownStyling>UI/UX Design</MarkdownStyling>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>: Designing intuitive and
                                user-friendly interfaces, focusing on usability and aesthetics.
                            </li>
                            <li>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>
                                <MarkdownStyling>Problem Solving</MarkdownStyling>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>: Analyzing requirements and
                                devising efficient, scalable solutions to meet business needs.
                            </li>
                        </ul>
                    </div>
                    <div>
                        <MarkdownStyling className="text-lg italic">## Why Work With Me?</MarkdownStyling>
                    </div>
                    <div>
                        <ul className="flex flex-col gap-4 list-disc ml-4">
                            <li>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>
                                <MarkdownStyling>Quality and Precision</MarkdownStyling>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>: Committed to delivering
                                high-quality, well-tested applications that meet or exceed expectations.
                            </li>
                            <li>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>
                                <MarkdownStyling>Innovative and Adaptive</MarkdownStyling>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>: Constantly learning and
                                adapting to new technologies and methodologies to stay at the forefront of web
                                development.
                            </li>
                            <li>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>
                                <MarkdownStyling>Team Player</MarkdownStyling>
                                <MarkdownStyling color="secondary">**</MarkdownStyling>: Excellent communication skills
                                and a collaborative spirit, believing that great ideas are often the result of teamwork.
                            </li>
                        </ul>
                    </div>
                    <Separator className="my-4" />
                    Whether you're looking to bring a new project to life or need a skilled developer to join your team,
                    I'm ready to help. Check out my [projects](/projects) to see what I can do, or [contact
                    me](/contact) directly to discuss how we can work together to achieve your goals. Let's create
                    something impactful together!
                </code>
            }
        </div>
    );
};

export default Landing;
