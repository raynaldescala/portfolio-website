export const projects = [
    {
        name: "Tracklet",
        workInProgress: true,
        description:
            "A job application tracker in development, designed to centralize applications with real-time status updates and progress tracking.",
        thumbnail: {
            src: "/thumbnails/tracklet.webp",
            alt: "Tracklet website thumbnail",
        },
        technologies: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "shadcn/ui",
            "Supabase",
            "Resend",
            "Vercel",
        ],
        website: "https://tracklet.vercel.app/",
        source: "https://github.com/raynaldescala/tracklet",
    },
    {
        name: "Pokéhaven",
        workInProgress: true,
        description:
            "A Pokémon database in development focused on smooth animations, ID and name search, type-based filtering, and a clean, minimalist design.",
        thumbnail: {
            src: "/thumbnails/pokehaven.webp",
            alt: "Pokéhaven website thumbnail",
        },
        technologies: [
            "Vanilla JS",
            "PokéAPI",
            "IndexedDB",
            "Vibrancy",
            "Vite",
            "Vercel",
        ],
        website: "https://pokehaven.vercel.app/",
        source: "https://github.com/raynaldescala/pokehaven",
    },
];
