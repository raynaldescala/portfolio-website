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
import { useEffect, useState } from "react";

export default function HomePage() {
    const [loading, setLoading] = useState(true);
    const [isReload, setIsReload] = useState(false);

    useEffect(() => {
        // Check if this is a page reload
        const navigationEntries = performance.getEntriesByType(
            "navigation",
        ) as PerformanceNavigationTiming[];
        const isReloadPage = navigationEntries[0]?.type === "reload";
        setIsReload(isReloadPage);

        const handleBeforeUnload = () => {
            sessionStorage.setItem("isReloading", "true");
        };

        window.addEventListener("beforeunload", handleBeforeUnload);

        const reloadFlag = sessionStorage.getItem("isReloading");
        if (reloadFlag) {
            sessionStorage.removeItem("isReloading");
            setLoading(true);

            const timer = setTimeout(() => {
                setLoading(false);
                window.scrollTo(0, 0);
            }, 2000);

            return () => {
                clearTimeout(timer);
                window.removeEventListener("beforeunload", handleBeforeUnload);
            };
        } else {
            setLoading(false);
            return () =>
                window.removeEventListener("beforeunload", handleBeforeUnload);
        }
    }, []);

    useEffect(() => {
        if (loading && isReload) {
            document.body.style.overflow = "hidden";
        } else {
            const timer = setTimeout(() => {
                document.body.style.overflow = "auto";
            }, 750);
            return () => clearTimeout(timer);
        }
    }, [loading, isReload]);

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
                {loading && isReload && <Preloader />}
            </AnimatePresence>
            <div className="mx-auto min-w-[360px] max-w-3xl px-8">
                <NavBar />
                <div className="grid gap-16">
                    <Intro />
                    <Qualifications />
                    <Skills />
                    <RecentProjects />
                    <Contact />
                    <Footer />
                </div>
            </div>
        </>
    );
}
