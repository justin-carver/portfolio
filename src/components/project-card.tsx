// TODO: Implement /notfound.png
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from '@/components/ui/alert-dialog';

import { Info } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';

const ProjectCard = (props: any) => {
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
                        <div className="flex p-4">
                            <Popover>
                                <PopoverTrigger asChild>
                                    <Info size={32} color="rgb(148 163 184)" />
                                </PopoverTrigger>
                                <PopoverContent className="dark:text-slate-400 p-6 m-4">
                                    {props.projectNotes}
                                </PopoverContent>
                            </Popover>
                            {/* ---- */}
                            <AlertDialog>
                                <AlertDialogTrigger>Open</AlertDialogTrigger>
                                <AlertDialogContent>
                                    <AlertDialogHeader>
                                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                        <AlertDialogDescription>
                                            This action cannot be undone. This will permanently delete your account and
                                            remove your data from our servers.
                                        </AlertDialogDescription>
                                    </AlertDialogHeader>
                                    <AlertDialogFooter>
                                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                                        <AlertDialogAction>Continue</AlertDialogAction>
                                    </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
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
