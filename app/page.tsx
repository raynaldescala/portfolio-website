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
    const [loading, setLoading] = useState(false); // Start with false instead of true
    const pathname = usePathname();

    useEffect(() => {
        // Check if coming from projects page using sessionStorage
        const fromProjects = sessionStorage.getItem("fromProjects") === "true";

        // If we're coming from projects, don't show preloader
        if (fromProjects) {
            sessionStorage.removeItem("fromProjects");
            setLoading(false);
            return;
        }

        // Otherwise, show preloader
        setLoading(true);
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

    // Set flag when leaving projects page
    useEffect(() => {
        const handleBeforeUnload = () => {
            if (pathname === "/projects") {
                sessionStorage.setItem("fromProjects", "true");
            }
        };

        window.addEventListener("beforeunload", handleBeforeUnload);
        return () =>
            window.removeEventListener("beforeunload", handleBeforeUnload);
    }, []);

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
