"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Preloader = () => {
    // Manage preloader visibility (for internal logic, e.g., animations)
    const [index, setIndex] = useState(0);
    const [dimension, setDimension] = useState({ width: 0, height: 0 });
    const words = [
        "Kamusta",
        "Hello",
        "Bonjour",
        "やあ",
        "Hola",
        "Ciao",
        "Hallå",
        "Guten tag",
    ];

    // Set viewport dimensions on mount
    useEffect(() => {
        setDimension({ width: window.innerWidth, height: window.innerHeight });
    }, []);

    // Cycle through words continuously (or you can let it cycle just once)
    useEffect(() => {
        if (index == words.length - 1) return;
        setTimeout(
            () => {
                setIndex(index + 1);
            },
            index == 0 ? 1000 : 150,
        );
    }, [index]);

    // Define SVG paths based on viewport dimensions
    const initialPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height + 300} 0 ${dimension.height} L0 0`;
    const targetPath = `M0 0 L${dimension.width} 0 L${dimension.width} ${dimension.height} Q${dimension.width / 2} ${dimension.height} 0 ${dimension.height} L0 0`;

    const opacity = {
        initial: { opacity: 0 },
        enter: { opacity: 0.75, transition: { duration: 1, delay: 0.2 } },
    };

    const slideUp = {
        initial: { top: 0 },
        exit: {
            top: "-100vh",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
        },
    };

    const curve = {
        initial: {
            d: initialPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: targetPath,
            transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.3 },
        },
    };

    // Do not return null here—let the parent remove the component
    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="fixed inset-0 z-[100] flex h-screen w-screen cursor-wait items-center justify-center bg-foreground text-background"
        >
            {dimension.width > 0 && (
                <>
                    <motion.p
                        variants={opacity}
                        initial="initial"
                        animate="enter"
                        className="absolute z-[1] flex items-center text-[42px]"
                    >
                        <span className="mr-[10px] block h-[10px] w-[10px] rounded-full bg-background" />
                        {words[index]}
                    </motion.p>
                    <svg className="absolute top-0 h-[calc(100%+300px)] w-full">
                        <motion.path
                            variants={curve}
                            initial="initial"
                            exit="exit"
                            className="fill-foreground"
                        />
                    </svg>
                </>
            )}
        </motion.div>
    );
};

export default Preloader;
