import { cn } from "@/lib/utils";
import Image from "next/image";

const tapeClasses =
    "absolute -inset-x-6 bg-[linear-gradient(180deg,#ffffff38,transparent_35%,transparent_55%,#00000045),repeating-linear-gradient(-45deg,#211a0d_0_9.5px,#f4ca52_10.5px_19.5px,#211a0d_20.5px)] [mask-image:linear-gradient(to_bottom,transparent,#000_1px,#000_calc(100%_-_1px),transparent)]";

interface ProjectThumbnailProps {
    src: string;
    alt: string;
    workInProgress: boolean;
}

export default function ProjectThumbnail({
    src,
    alt,
    workInProgress,
}: ProjectThumbnailProps) {
    return (
        <div className="relative overflow-hidden rounded-sm">
            <Image src={src} alt={alt} width={500} height={300} />
            {workInProgress && (
                <div className="pointer-events-none absolute inset-0">
                    <div
                        aria-hidden="true"
                        className={cn(
                            tapeClasses,
                            "top-[33%] h-3.5 -translate-y-1/2 -rotate-[13deg] sm:h-4",
                        )}
                    />
                    <div
                        aria-hidden="true"
                        className={cn(
                            tapeClasses,
                            "top-[35%] h-3.5 -translate-y-1/2 rotate-[14deg] sm:h-4",
                        )}
                    />
                    <p
                        className={cn(
                            tapeClasses,
                            "bottom-3 flex -rotate-[8deg] justify-center",
                        )}
                    >
                        <span className="bg-gradient-to-b from-[#ffdd76] to-[#e3b443] px-3 py-1.5 text-xs font-extrabold uppercase leading-none tracking-[0.12em] text-[#211a0d]">
                            Work in Progress
                        </span>
                    </p>
                </div>
            )}
        </div>
    );
}
