"use client";

import { Badge } from "@/app/components/ui/badge";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import { useMemo, useRef } from "react";

const AnimatedBadge = ({
    badge,
    index,
    scrollYProgress,
}: {
    badge: string;
    index: number;
    scrollYProgress: MotionValue<number>;
}) => {
    const start = index * 0.03;
    const end = start + 0.05;

    const opacity = useTransform(scrollYProgress, [start, end], [0, 1]);
    const y = useTransform(scrollYProgress, [start, end], [20, 0]);

    return (
        <motion.div className="duration-200" style={{ opacity, y }}>
            <Badge>{badge}</Badge>
        </motion.div>
    );
};

const Skills = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: containerRef });

    const badges = useMemo(
        () => [
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
        ],
        [],
    );

    return (
        <section ref={containerRef} className="grid gap-8">
            <h2 className="font-serif text-2xl tracking-[0.6px] transition-colors duration-200 sm:text-3xl">
                skills
            </h2>
            <div className="flex w-full flex-wrap items-center gap-2">
                {badges.map((badge, index) => (
                    <AnimatedBadge
                        key={badge}
                        badge={badge}
                        index={index}
                        scrollYProgress={scrollYProgress}
                    />
                ))}
            </div>
        </section>
    );
};

export default Skills;
