import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import ProjectThumbnail from "@/app/components/ui/ProjectThumbnail";
import { projects } from "@/app/projects/project-data";
import { ArrowRight, Github, Globe } from "lucide-react";
import Link from "next/link";

const RecentProjects = () => {
    return (
        <section className="grid gap-8">
            <div className="flex items-center justify-between">
                <h2 className="font-serif text-2xl tracking-[0.6px] transition-colors duration-200 sm:text-3xl">
                    recent projects
                </h2>
                <Link
                    href="/projects"
                    className="flex items-center gap-2 text-foreground/65 transition-colors duration-200 hover:text-foreground"
                >
                    <span>view all</span>
                    <ArrowRight />
                </Link>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {projects.map(
                    ({
                        name,
                        workInProgress,
                        description,
                        thumbnail,
                        technologies,
                        website,
                        source,
                    }) => (
                        <div
                            key={name}
                            className="border-gray-90 grid grid-rows-[1fr_auto] gap-6 rounded-lg border p-6"
                        >
                            <div>
                                <ProjectThumbnail
                                    {...thumbnail}
                                    workInProgress={workInProgress}
                                />
                                <div className="pt-4">
                                    <h3 className="mb-1 font-semibold text-foreground">
                                        {name}
                                    </h3>
                                    <p className="text-xs text-muted transition-colors duration-200">
                                        {description}
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-rows-[1fr_auto] gap-4">
                                <div className="flex flex-wrap gap-1">
                                    {technologies.map((technology) => (
                                        <Badge
                                            key={technology}
                                            className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80"
                                        >
                                            {technology}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-1">
                                    <Button
                                        asChild
                                        className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <Link target="_blank" href={website}>
                                            <Globe className="!size-3" />
                                            Website
                                        </Link>
                                    </Button>
                                    <Button
                                        asChild
                                        className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                                    >
                                        <Link target="_blank" href={source}>
                                            <Github className="!size-3" />
                                            Source
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    ),
                )}
            </div>
        </section>
    );
};

export default RecentProjects;
