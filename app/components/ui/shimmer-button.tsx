"use client";

import React, {
    CSSProperties,
    ComponentPropsWithoutRef,
    useEffect,
    useState,
} from "react";

import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export interface ShimmerButtonProps extends ComponentPropsWithoutRef<"button"> {
    shimmerColor?: string;
    shimmerSize?: string;
    borderRadius?: string;
    shimmerDuration?: string;
    background?: string;
    className?: string;
    children?: React.ReactNode;
}

export const ShimmerButton = React.forwardRef<
    HTMLButtonElement,
    ShimmerButtonProps
>(
    (
        {
            shimmerColor,
            shimmerSize = "0.1em",
            shimmerDuration = "3s",
            borderRadius = "0.5rem",
            background,
            className,
            children,
            ...props
        },
        ref,
    ) => {
        const [themeLoaded, setThemeLoaded] = useState(false);
        const { theme } = useTheme();
        const [isHovered, setIsHovered] = useState(false);

        useEffect(() => {
            setThemeLoaded(true);
        }, []);

        if (!themeLoaded) return null;

        const defaultShimmerColor =
            theme === "dark" ? "hsl(60, 7%, 3%)" : "hsl(60, 10%, 90%)";
        const defaultBackground =
            theme === "dark" ? "hsl(60, 10%, 90%)" : "hsl(60, 7%, 3%)";

        const effectiveBackground = isHovered
            ? theme === "dark"
                ? "#c5c5b5"
                : "#1a1a1a"
            : background || defaultBackground;
        return (
            <button
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                style={
                    {
                        "--spread": "90deg",
                        "--shimmer-color": shimmerColor || defaultShimmerColor,
                        "--radius": borderRadius,
                        "--speed": shimmerDuration,
                        "--cut": shimmerSize,
                        "--bg": background || defaultBackground,
                    } as CSSProperties
                }
                className={cn(
                    "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 [background:var(--bg)] [border-radius:var(--radius)]",
                    "text-[#e8e8e3] hover:bg-[#1a1a1a] hover:text-[#b8b8b3] dark:text-[#080807] dark:hover:bg-[#c5c5b5] dark:hover:text-[#1a1a1a]",
                    "transform-gpu transition-transform duration-300 ease-in-out active:translate-y-px",
                    className,
                )}
                ref={ref}
                {...props}
            >
                {/* spark container */}
                <div
                    className={cn(
                        "-z-30 blur-[2px]",
                        "absolute inset-0 overflow-visible [container-type:size]",
                    )}
                >
                    {/* spark */}
                    <div className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
                        {/* spark before */}
                        <div className="absolute -inset-full w-auto rotate-0 animate-spin-around [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
                    </div>
                </div>
                {children}

                {/* Highlight */}
                <div
                    className={cn(
                        "insert-0 absolute size-full",

                        "rounded-2xl px-4 py-1.5 text-sm font-medium",

                        // transition
                        "transform-gpu transition-all duration-300 ease-in-out",

                        // on hover
                        // "group-hover:shadow-[inset_0_-6px_10px_#ffffff3f]",

                        // on click
                        // "group-active:shadow-[inset_0_-10px_10px_#ffffff3f]",
                    )}
                />

                {/* Backdrop */}
                <div
                    className={cn(
                        "absolute -z-20 transition-colors duration-200 [border-radius:var(--radius)] [inset:var(--cut)]",
                    )}
                    // Instead of using [background:var(--bg)], we override the background
                    // with our computed value based on hover state.
                    style={{ background: effectiveBackground }}
                />
            </button>
        );
    },
);

ShimmerButton.displayName = "ShimmerButton";
