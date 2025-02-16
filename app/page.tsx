"use client";

import Footer from "@/app/components/layout/Footer";
import NavBar from "@/app/components/layout/NavBar";
import Preloader from "@/app/components/layout/Preloader";
import Contact from "@/app/components/sections/Contact";
import Intro from "@/app/components/sections/Intro";
import Qualifications from "@/app/components/sections/Qualifications";
import RecentProjects from "@/app/components/sections/RecentProjects";
import Skills from "@/app/components/sections/Skills";
import { AnimatePresence } from "framer-motion";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function HomePage() {
    // `loading` controls the preloader's visibility (and exit animation).
    const [loading, setLoading] = useState(false);
    // `preloaderHasPlayed` tracks whether the preloader was ever shown.
    const [preloaderHasPlayed, setPreloaderHasPlayed] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const fromProjectsOr404 =
            sessionStorage.getItem("fromProjectsOr404") === "true";

        if (fromProjectsOr404) {
            // Preloader was skipped.
            sessionStorage.removeItem("fromProjectsOr404");
            setLoading(false);
            setPreloaderHasPlayed(false);
            return;
        }

        // Otherwise, show the preloader.
        setLoading(true);
        setPreloaderHasPlayed(true);
        const timer = setTimeout(() => {
            setLoading(false);
            if (window.location.hash === "#contact") {
                const contactEl = document.getElementById("contact");
                if (contactEl) {
                    contactEl.scrollIntoView({ behavior: "smooth" });
                } else {
                    window.scrollTo(0, 0);
                }
            } else {
                window.scrollTo(0, 0);
            }
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    // Set flag when leaving the /projects page.
    useEffect(() => {
        const handleBeforeUnload = () => {
            if (pathname === "/projects") {
                sessionStorage.setItem("fromProjectsOr404", "true");
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () =>
            window.removeEventListener("beforeunload", handleBeforeUnload);
    }, [pathname]);

    useEffect(() => {
        if (loading) {
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => {
                document.body.style.overflow = "auto";
            }, 750);
            return () => clearTimeout(timer);
        }
    }, [loading]);

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
        <>
            <AnimatePresence mode="wait">
                {loading && <Preloader />}
            </AnimatePresence>
            <div className="mx-auto min-w-[360px] max-w-3xl px-8">
                <NavBar
                    preloaderDone={!loading}
                    preloaderHasPlayed={preloaderHasPlayed}
                />
                <div className="grid gap-16">
                    {/* Pass both states so Intro can decide when to animate */}
                    <Intro
                        preloaderDone={!loading}
                        preloaderHasPlayed={preloaderHasPlayed}
                    />
                    <Qualifications
                        preloaderDone={!loading}
                        preloaderHasPlayed={preloaderHasPlayed}
                    />
                    <Skills />
                    <RecentProjects />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    );
}
