"use client";

import { Particles } from "@/app/components/ui/particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function DynamicParticles() {
    const { resolvedTheme } = useTheme();
    const [particleColor, setParticleColor] = useState("#ffffff");

    useEffect(() => {
        setParticleColor(resolvedTheme === "dark" ? "#ffffff" : "#000000");
    }, [resolvedTheme]);

    return (
        <Particles
            className="pointer-events-none fixed inset-0 -z-10"
            quantity={100}
            ease={80}
            color={particleColor}
            refresh
        />
    );
}
