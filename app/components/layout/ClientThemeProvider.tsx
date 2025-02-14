"use client"; // Ensures this is client-only

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";

export default function ClientThemeProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return mounted ? (
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            {children}
        </ThemeProvider>
    ) : null;
}
