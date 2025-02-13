import DynamicParticles from "@/app/components/layout/DynamiCParticles";
import { Toaster } from "@/app/components/ui/toaster";
import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Calistoga, Inter } from "next/font/google";
import "../styles/globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
    weight: ["400", "500", "600", "700"],
});

const calistoga = Calistoga({
    subsets: ["latin"],
    variable: "--font-calistoga",
    weight: "400",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Home | Raynald Escala's Portfolio",

    description:
        "Hey, I'm Raynald Escala! Welcome to my portfolio, a space where you can explore my experience, projects, and what I’m all about.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${inter.variable} ${calistoga.variable}`}
            suppressHydrationWarning
        >
            <body className="relative font-sans antialiased before:pointer-events-none before:fixed before:inset-0 before:z-[9999] before:bg-[url('data:image/svg+xml,%3Csvg%20viewBox%3D%270%200%20250%20250%27%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%3E%3Cfilter%20id%3D%27noiseFilter%27%3E%3CfeTurbulence%20type%3D%27fractalNoise%27%20baseFrequency%3D%274.86%27%20numOctaves%3D%273%27%20stitchTiles%3D%27stitch%27/%3E%3C/filter%3E%3Crect%20width%3D%27100%25%27%20height%3D%27100%25%27%20filter%3D%27url(%23noiseFilter)%27/%3E%3C/svg%3E')] before:bg-[length:250px_250px] before:opacity-20 before:content-[''] after:pointer-events-none after:fixed after:inset-0 after:z-[9999] after:opacity-20 after:content-[''] dark:before:opacity-10 dark:after:opacity-10">
                <ThemeProvider
                    attribute="class"
                    defaultTheme="system"
                    enableSystem
                >
                    <DynamicParticles />
                    {children}
                    <Toaster />
                </ThemeProvider>
            </body>
        </html>
    );
}
