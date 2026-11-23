"use client";

import Footer from "@/app/components/layout/Footer";
import NavBar from "@/app/components/layout/NavBar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import ProjectThumbnail from "@/app/components/ui/ProjectThumbnail";
import { projects } from "@/app/projects/project-data";
import { motion } from "framer-motion";
import Lenis from "lenis";
import { Github, Globe } from "lucide-react";
import Link from "next/link";
import { useEffect } from "react";

const headingVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const cardsContainerVariants = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const ProjectsPage = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.5,
            easing: (t) => 1 - Math.pow(1 - t, 4),
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);
        return () => lenis.destroy();
    }, []);

    return (
        <div className="bg-background">
            <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-8">
                <NavBar />
                <main className="flex-1">
                    <div className="grid gap-8">
                        <motion.h2
                            className="font-serif text-4xl tracking-[0.6px] transition-colors duration-200 sm:text-5xl"
                            variants={headingVariants}
                            initial="hidden"
                            animate="visible"
                        >
                            my projects
                        </motion.h2>
                        <motion.div
                            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
                            variants={cardsContainerVariants}
                            initial="hidden"
                            animate="visible"
                        >
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
                                    <motion.div
                                        key={name}
                                        className="border-gray-90 grid grid-rows-[1fr_auto] gap-6 rounded-lg border p-6"
                                        variants={cardVariants}
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
                                                {technologies.map(
                                                    (technology) => (
                                                        <Badge
                                                            key={technology}
                                                            className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80"
                                                        >
                                                            {technology}
                                                        </Badge>
                                                    ),
                                                )}
                                            </div>
                                            <div className="flex gap-1">
                                                <Button
                                                    asChild
                                                    className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <Link
                                                        target="_blank"
                                                        href={website}
                                                    >
                                                        <Globe className="!size-3" />
                                                        Website
                                                    </Link>
                                                </Button>
                                                <Button
                                                    asChild
                                                    className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground"
                                                >
                                                    <Link
                                                        target="_blank"
                                                        href={source}
                                                    >
                                                        <Github className="!size-3" />
                                                        Source
                                                    </Link>
                                                </Button>
                                            </div>
                                        </div>
                                    </motion.div>
                                ),
                            )}
                        </motion.div>
                    </div>
                </main>
                <div className="mt-16">
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
