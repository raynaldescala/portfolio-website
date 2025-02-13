import { ShimmerButton } from "@/app/components/ui/shimmer-button";
import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Intro = () => {
    return (
        <section className="flex flex-col items-center justify-between gap-32 sm:flex-row sm:gap-16">
            <div className="grid gap-6 sm:w-[65%]">
                <div>
                    <h1 className="text-nowrap font-serif text-[2.5rem] leading-none tracking-[0.6px] transition-colors duration-200 sm:text-5xl">
                        Raynald Escala
                    </h1>
                    <p className="font-medium text-highlight transition-colors duration-200">
                        Aspiring Fullstack Developer
                    </p>
                </div>
                <p className="font-medium transition-colors duration-200">
                    Kamusta 👋🏼 — I&apos;m a web enthusiast based in the
                    Philippines, passionate about delivering high-quality
                    digital products.{" "}
                    <span className="text-highlight transition-colors duration-200">
                        My focus is on crafting intuitive, user-centered
                        software that empowers users and drives meaningful
                        change.
                    </span>
                </p>
                <div className="flex items-center gap-8">
                    <Link
                        target="_blank"
                        href="/resume/Raynald_Escala_Resume.pdf"
                    >
                        <ShimmerButton className="flex items-center px-4 py-2 text-sm font-medium transition-colors duration-200">
                            Resume
                            <ExternalLink
                                width={16}
                                height={16}
                                className="ml-2"
                            />
                        </ShimmerButton>
                    </Link>
                    <ul className="flex gap-6">
                        <li>
                            <Link
                                target="_blank"
                                href="https://linkedin.com/in/raynaldescala"
                            >
                                <Linkedin
                                    width={20}
                                    height={20}
                                    className="text-foreground/65 transition-colors duration-200 hover:text-foreground"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="https://github.com/hyoihz"
                            >
                                <Github
                                    width={20}
                                    height={20}
                                    className="text-foreground/65 transition-colors duration-200 hover:text-foreground"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="mailto:raynaldescala01@gmail.com"
                            >
                                <Mail
                                    width={20}
                                    height={20}
                                    className="text-foreground/65 transition-colors duration-200 hover:text-foreground"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="relative ml-auto aspect-square w-[83.3%] rounded-lg bg-highlight dark:bg-secondary sm:m-0 sm:w-[35%]">
                <Image
                    src="/profile.webp"
                    alt="picture"
                    width={175}
                    height={175}
                    className="absolute left-[-20%] top-[-20%] h-full w-full rounded-lg shadow-sm shadow-primary/10 grayscale dark:shadow-md dark:shadow-primary/15 sm:left-[-10%] sm:top-[-10%]"
                />
            </div>
        </section>
    );
};

export default Intro;
