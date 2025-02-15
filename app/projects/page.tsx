"use client";

import Footer from "@/app/components/layout/Footer";
import NavBar from "@/app/components/layout/NavBar";
import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import Lenis from "lenis";
import { Github, Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

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
        <div className="mx-auto flex min-h-dvh max-w-3xl flex-col px-8">
            <NavBar />
            <main className="flex-1">
                <div className="grid gap-8">
                    <h2 className="font-serif text-4xl tracking-[0.6px] transition-colors duration-200 sm:text-5xl">
                        my projects
                    </h2>
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        <div className="border-gray-90 grid grid-rows-[1fr_auto] gap-6 rounded-lg border p-6">
                            <div>
                                <Image
                                    src="/thumbnails/pokehaven.webp"
                                    alt="pokehaven website thumbnail"
                                    width={500}
                                    height={300}
                                />
                                <div className="pt-4">
                                    <h3 className="mb-1 font-semibold text-foreground">
                                        Pokéhaven
                                    </h3>
                                    <p className="text-xs text-muted transition-colors duration-200">
                                        A sleek Pokémon database with smooth
                                        animations, ID and name search,
                                        type-based filtering, and a clean,
                                        minimalist design
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-rows-[1fr_auto] gap-4">
                                <div className="flex flex-wrap gap-1">
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        Vanilla JS
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        PokéAPI
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        IndexedDB
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        Vibrancy
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        Vite
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        Vercel
                                    </Badge>
                                </div>
                                <div className="flex gap-1">
                                    <Link
                                        target="_blank"
                                        href="https://pokehaven.vercel.app/"
                                    >
                                        <Button className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground">
                                            <Github className="!size-3" />
                                            Website
                                        </Button>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://github.com/hyoihz/pokehaven"
                                    >
                                        <Button className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground">
                                            <Globe className="!size-3" />
                                            Source
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="border-gray-90 grid grid-rows-[1fr_auto] gap-6 rounded-lg border p-6">
                            <div>
                                <Image
                                    src="/thumbnails/pokehaven.webp"
                                    alt="pokehaven website thumbnail"
                                    width={500}
                                    height={300}
                                />
                                <div className="pt-4">
                                    <h3 className="mb-1 font-semibold text-foreground">
                                        Portfolio Website
                                    </h3>
                                    <p className="text-xs text-muted transition-colors duration-200">
                                        A sleek Pokémon database with smooth
                                        animations, ID and name search,
                                        type-based filtering, and a clean,
                                        minimalist design
                                    </p>
                                </div>
                            </div>
                            <div className="grid grid-rows-[1fr_auto] gap-4">
                                <div className="flex flex-wrap gap-1">
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        Vanilla JS
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        PokéAPI
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        IndexedDB
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        Vibrancy
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        Vite
                                    </Badge>
                                    <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                        Vercel
                                    </Badge>
                                </div>
                                <div className="flex gap-1">
                                    <Link
                                        target="_blank"
                                        href="https://pokehaven.vercel.app/"
                                    >
                                        <Button className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground">
                                            <Github className="!size-3" />
                                            Website
                                        </Button>
                                    </Link>
                                    <Link
                                        target="_blank"
                                        href="https://github.com/hyoihz/pokehaven"
                                    >
                                        <Button className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground">
                                            <Globe className="!size-3" />
                                            Source
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <div className="mt-16 sm:mt-auto">
                <Footer />
            </div>
        </div>
    );
};

export default ProjectsPage;
