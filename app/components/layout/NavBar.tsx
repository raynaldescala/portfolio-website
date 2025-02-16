"use client";
import Footer from "@/app/components/layout/Footer";
import { Button } from "@/app/components/ui/button";
import ThemeSwitcher from "@/app/components/ui/theme-switcher";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
    { title: "Home", href: "/" },
    { title: "Projects", href: "/projects" },
    { title: "Contact", href: "/#contact" },
];

const NavBar = () => {
    const [isActive, setIsActive] = useState(false);

    const pathname = usePathname();
    const [selectedIndicator, setSelectedIndicator] = useState(pathname);
    const [svgPaths, setSvgPaths] = useState({ initial: "", target: "" });

    useEffect(() => {
        // Client-side only code
        const calculatePaths = () => {
            const height =
                typeof window !== "undefined" ? window.innerHeight : 0;
            return {
                initial: `M100 0 L200 0 L200 ${height} L100 ${height} Q-100 ${height / 2} 100 0`,
                target: `M100 0 L200 0 L200 ${height} L100 ${height} Q100 ${height / 2} 100 0`,
            };
        };

        setSvgPaths(calculatePaths());

        // Handle window resize
        const handleResize = () => setSvgPaths(calculatePaths());
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // const initialPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q-100 ${window.innerHeight / 2} 100 0`;
    // const targetPath = `M100 0 L200 0 L200 ${window.innerHeight} L100 ${window.innerHeight} Q100 ${window.innerHeight / 2} 100 0`;

    const curve = {
        initial: { d: svgPaths.initial },
        enter: {
            d: svgPaths.target,
            transition: { duration: 1, ease: [0.76, 0, 0.24, 1] },
        },
        exit: {
            d: svgPaths.initial,
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
    };

    const menuSlide = {
        initial: { x: "calc(100% + 100px)" },

        enter: {
            x: "0",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },

        exit: {
            x: "calc(100% + 100px)",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
        },
    };

    const slide = {
        initial: { x: 80 },

        enter: (i: number) => ({
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.05 * i,
            },
        }),

        exit: (i: number) => ({
            x: 80,
            transition: {
                duration: 0.8,
                ease: [0.76, 0, 0.24, 1],
                delay: 0.05 * i,
            },
        }),
    };

    const scale = {
        open: { scale: 1, transition: { duration: 0.3 } },

        closed: { scale: 0, transition: { duration: 0.4 } },
    };

    return (
        <header className="bg-back sticky top-0 z-50 mb-8 bg-background/75 py-6 backdrop-blur-sm">
            <nav>
                <div className="flex items-center justify-between">
                    <div>
                        <Link
                            href="/"
                            onClick={() => {
                                if (
                                    pathname === "/projects" ||
                                    !["/", "/projects"].includes(pathname)
                                ) {
                                    sessionStorage.setItem(
                                        "fromProjectsOr404",
                                        "true",
                                    );
                                }
                            }}
                            className="font-serif text-3xl leading-none transition-colors duration-200 hover:text-foreground/65"
                        >
                            re<span className="font-serif">.</span>
                        </Link>
                    </div>
                    <div className="flex items-center gap-4 sm:gap-8">
                        <ul className="hidden items-center gap-4 sm:flex sm:gap-8">
                            <li>
                                <Link
                                    href="/"
                                    onClick={() => {
                                        if (
                                            pathname === "/projects" ||
                                            !["/", "/projects"].includes(
                                                pathname,
                                            )
                                        ) {
                                            sessionStorage.setItem(
                                                "fromProjectsOr404",
                                                "true",
                                            );
                                        }
                                    }}
                                    className={`transition-colors duration-200 ${
                                        pathname === "/"
                                            ? "text-foreground/65"
                                            : "hover:text-foreground/65"
                                    }`}
                                >
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/projects"
                                    className={`transition-colors duration-200 ${
                                        pathname.startsWith("/projects")
                                            ? "text-foreground/65"
                                            : "hover:text-foreground/65"
                                    }`}
                                >
                                    projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    onClick={() => {
                                        if (pathname === "/projects") {
                                            sessionStorage.setItem(
                                                "fromProjectsOr404",
                                                "true",
                                            );
                                        }
                                    }}
                                    className="transition-colors duration-200 hover:text-foreground/65"
                                >
                                    contact
                                </Link>
                            </li>
                        </ul>

                        <div className="flex">
                            <ThemeSwitcher />
                            <Button
                                onClick={() => setIsActive(!isActive)}
                                aria-label="Toggle navigation menu"
                                variant={"ghost"}
                                size={"icon"}
                                className="relative z-[1] sm:hidden"
                            >
                                <div className="absolute flex h-full w-full items-center justify-center overflow-visible">
                                    {/* Top Line */}
                                    <div
                                        className={`absolute left-1/2 h-px w-4 origin-center -translate-x-1/2 bg-current transition-all duration-300 ${
                                            isActive
                                                ? "top-1/2 -translate-y-1/2 rotate-45"
                                                : "top-1/2 -translate-y-1"
                                        }`}
                                    />
                                    {/* Bottom Line */}
                                    <div
                                        className={`absolute left-1/2 h-px w-4 origin-center -translate-x-1/2 bg-current transition-all duration-300 ${
                                            isActive
                                                ? "top-1/2 -translate-y-1/2 -rotate-45"
                                                : "top-1/2 translate-y-1"
                                        }`}
                                    />
                                </div>
                            </Button>
                            <AnimatePresence mode="wait">
                                {isActive && (
                                    <motion.div
                                        variants={menuSlide}
                                        initial="initial"
                                        animate="enter"
                                        exit="exit"
                                        className="fixed right-[-32px] top-0 h-dvh w-[300px] bg-secondary"
                                    >
                                        <div className="box-border flex h-full flex-col justify-between p-16 pb-0 pt-20">
                                            <div
                                                onMouseLeave={() =>
                                                    setSelectedIndicator(
                                                        pathname,
                                                    )
                                                }
                                                className="flex flex-col gap-5"
                                            >
                                                <div className="mb-4 text-xs uppercase text-highlight">
                                                    <p className="border-b border-current pb-2">
                                                        Navigation
                                                    </p>
                                                </div>

                                                {navItems.map((data, index) => {
                                                    const { title, href } =
                                                        data;
                                                    const isActive =
                                                        selectedIndicator ===
                                                        href;

                                                    return (
                                                        <motion.div
                                                            key={index}
                                                            className="relative flex items-center"
                                                            onMouseEnter={() =>
                                                                setSelectedIndicator(
                                                                    href,
                                                                )
                                                            }
                                                            custom={index}
                                                            variants={slide}
                                                            initial="initial"
                                                            animate="enter"
                                                            exit="exit"
                                                        >
                                                            <motion.div
                                                                variants={scale}
                                                                animate={
                                                                    isActive
                                                                        ? "open"
                                                                        : "closed"
                                                                }
                                                                className="absolute left-[-30px] h-2.5 w-2.5 rounded-full bg-current"
                                                            />
                                                            <Link
                                                                href={href}
                                                                onClick={() => {
                                                                    if (
                                                                        pathname ===
                                                                            "/projects" ||
                                                                        ![
                                                                            "/",
                                                                            "/projects",
                                                                        ].includes(
                                                                            pathname,
                                                                        )
                                                                    ) {
                                                                        sessionStorage.setItem(
                                                                            "fromProjectsOr404",
                                                                            "true",
                                                                        );
                                                                    }
                                                                    setIsActive(
                                                                        false,
                                                                    );
                                                                    setSelectedIndicator(
                                                                        href,
                                                                    );
                                                                }}
                                                                className="text-[2rem] font-light transition-colors duration-200 hover:text-foreground/65"
                                                            >
                                                                {title}
                                                            </Link>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>

                                            <Footer />
                                        </div>
                                        <svg className="absolute left-[-99px] top-0 h-full w-[100px] fill-[hsl(var(--secondary))] stroke-none">
                                            <motion.path
                                                variants={curve}
                                                initial="initial"
                                                animate="enter"
                                                exit="exit"
                                            ></motion.path>
                                        </svg>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default NavBar;
