"use client";
import { Badge } from "@/app/components/ui/badge";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Skills = () => {
    // Create a ref for the container whose scroll progress we want to track.
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    // List your badges (you could also import this from a data file)
    const badges = [
        "HTML",
        "CSS",
        "JavaScript",
        "Vite",
        "React",
        "Tailwind CSS",
        "Next.js",
        "TypeScript",
        "Framer Motion",
        "Shadcn",
        "Redux",
        "Zustand",
        "Git",
        "GitHub",
        "Node.js",
        "Express",
        "RESTful APIs",
        "GraphQL",
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Prisma",
        "Jest",
        "CI/CD",
        "Vercel",
        "Stripe",
    ];

    return (
        <section ref={containerRef} className="grid gap-8">
            <h2 className="font-serif text-2xl tracking-[0.6px] transition-colors duration-200 sm:text-3xl">
                skills
            </h2>
            <div className="flex w-full flex-wrap items-center gap-2">
                {badges.map((badge, index) => {
                    // Calculate a start and end threshold for each badge based on its index.
                    // These numbers are examples – adjust them to get your desired stagger.
                    const start = index * 0.03; // when the badge begins to appear
                    const end = start + 0.05; // when the badge is fully visible

                    // Map the container's scroll progress to opacity and vertical offset.
                    const opacity = useTransform(
                        scrollYProgress,
                        [start, end],
                        [0, 1],
                    );
                    const y = useTransform(
                        scrollYProgress,
                        [start, end],
                        [20, 0],
                    ); // moves from 20px below to normal

                    return (
                        <motion.div
                            key={badge}
                            className="duration-200"
                            style={{ opacity, y }}
                        >
                            <Badge>{badge}</Badge>
                        </motion.div>
                    );
                })}
            </div>
        </section>
    );
};

export default Skills;
