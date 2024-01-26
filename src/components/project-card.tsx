// TODO: Implement /notfound.png
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { useEffect, useState } from 'react';
import { Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const ProjectCard = (props: any) => {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 1450);
    const [contMsgIndex, setContMsgIndex] = useState<number>(0);
    const continueMessages: string[] = ['Wow!', 'Neat 📸', 'Interesting 🤔'];

    const updateMedia = () => {
        setDesktop(window.innerWidth > 1450);
    };

    useEffect(() => {
        window.addEventListener('resize', updateMedia);
        return () => window.removeEventListener('resize', updateMedia);
    });

    return (
        <Card className="flex flex-col max-w-[500px]">
            <div>
                <CardContent className="pt-6">
                    <div className="max-w-[500px]">
                        <Image src={props.src || '/notfound.png'} alt={props.alt || ''} width={500} height={500} />
                    </div>
                </CardContent>
                <CardHeader className="pt-0">
                    <div className="flex flex-row justify-items-center">
                        <div className="flex flex-col gap-2">
                            <CardTitle>{props.projectTitle}</CardTitle>
                            <CardDescription>{props.projectDescription}</CardDescription>
                        </div>
                        <div className="flex p-2">
                            {isDesktop ? (
                                <Popover>
                                    <PopoverTrigger asChild className="cursor-help">
                                        <Info size={32} color="rgb(148 163 184)" />
                                    </PopoverTrigger>
                                    <PopoverContent className="dark:text-slate-400 p-6 m-4 w-[600px] text-center">
                                        {props.projectNotes}
                                    </PopoverContent>
                                </Popover>
                            ) : (
                                <AlertDialog>
                                    <AlertDialogTrigger
                                        onClick={() => {
                                            let r = Math.floor(Math.random() * continueMessages.length);
                                            setContMsgIndex(r);
                                        }}
                                    >
                                        <Info size={28} color="rgb(148 163 184)" />
                                    </AlertDialogTrigger>
                                    <AlertDialogContent className="p-10 flex flex-col gap-8">
                                        <AlertDialogHeader>
                                            <AlertDialogTitle>
                                                <em className="font-light">Notes from Justin:</em>
                                            </AlertDialogTitle>
                                            <AlertDialogDescription>{props.projectNotes}</AlertDialogDescription>
                                        </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogAction>{continueMessages[contMsgIndex]}</AlertDialogAction>
                                        </AlertDialogFooter>
                                    </AlertDialogContent>
                                </AlertDialog>
                            )}
                        </div>
                    </div>
                    <div className="flex pt-2 gap-2">
                        {props.projectTags.map((tag: string) => (
                            <Badge variant={'secondary'} key={tag}>
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardHeader>
            </div>
        </Card>
    );
};

export default ProjectCard;
