import { Badge } from "@/app/components/ui/badge";
import { Button } from "@/app/components/ui/button";
import { ArrowRight, Github, Globe } from "lucide-react";
import Image from "next/image";
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
                <div className="border-gray-90 grid grid-rows-[1fr_auto] gap-6 rounded-lg border p-6">
                    <div>
                        <Image
                            src="/thumbnails/tracklet-light.webp"
                            alt="tracklet website thumbnail"
                            width={500}
                            height={300}
                            className="rounded-sm"
                        />
                        <div className="pt-4">
                            <h3 className="mb-1 font-semibold text-foreground">
                                🚧 Tracklet
                            </h3>
                            <p className="text-xs text-muted transition-colors duration-200">
                                A job application tracking system featuring
                                real-time status updates and progress tracking
                                to centralize user application management
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-rows-[1fr_auto] gap-4">
                        <div className="flex flex-wrap gap-1">
                            <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                Next.js
                            </Badge>
                            <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                React
                            </Badge>
                            <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                Tailwind CSS
                            </Badge>
                            <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                shadcn/ui
                            </Badge>
                            <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                Supabase
                            </Badge>
                            <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                Resend
                            </Badge>
                            <Badge className="bg-secondary px-1 py-0 text-[10px] font-semibold text-secondary-foreground hover:bg-secondary/80 hover:text-secondary-foreground/80">
                                Vercel
                            </Badge>
                        </div>
                        <div className="flex gap-1">
                            <Link
                                target="_blank"
                                href="https://tracklet.vercel.app/"
                            >
                                <Button className="h-full px-2 py-1 text-[10px] font-semibold transition-colors duration-200 hover:bg-accent hover:text-accent-foreground">
                                    <Github className="!size-3" />
                                    Website
                                </Button>
                            </Link>
                            <Link
                                target="_blank"
                                href="https://github.com/raynaldescala/tracklet"
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
                            className="rounded-sm"
                        />
                        <div className="pt-4">
                            <h3 className="mb-1 font-semibold text-foreground">
                                Pokéhaven
                            </h3>
                            <p className="text-xs text-muted transition-colors duration-200">
                                A sleek Pokémon database with smooth animations,
                                ID and name search, type-based filtering, and a
                                clean, minimalist design
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
                                href="https://github.com/raynaldescala/pokehaven"
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
        </section>
    );
};

export default RecentProjects;
