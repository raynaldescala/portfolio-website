import {
    Tabs,
    TabsContent,
    TabsList,
    TabsTrigger,
} from "@/app/components/ui/tabs";
import { motion } from "framer-motion";

import Image from "next/image";

interface QualificationsProps {
    preloaderDone: boolean;
    preloaderHasPlayed: boolean;
}

const qualificationsVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (customDelay: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, delay: customDelay, ease: "easeOut" },
    }),
};

const Qualifications = ({
    preloaderDone,
    preloaderHasPlayed,
}: QualificationsProps) => {
    const animateState = preloaderHasPlayed
        ? preloaderDone
            ? "visible"
            : "hidden"
        : "visible";

    const delayValue = preloaderHasPlayed ? 0.75 : 0;

    return (
        <motion.div
            variants={qualificationsVariants}
            custom={delayValue}
            initial="hidden"
            animate={animateState}
        >
            <Tabs defaultValue="experience" className="w-full">
                <TabsList className="w-full bg-accent transition-colors duration-200">
                    <TabsTrigger
                        value="experience"
                        className="w-1/2 transition-colors duration-200"
                    >
                        Experience
                    </TabsTrigger>
                    <TabsTrigger
                        value="education"
                        className="w-1/2 transition-colors duration-200"
                    >
                        Education
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="experience" className="rounded-lg border">
                    <ol className="relative ml-10 mr-6 border-s sm:mr-10">
                        <li className="relative ml-10 py-4">
                            <span className="absolute -start-16 flex items-center justify-center">
                                <Image
                                    src="/logos/phlpost.webp"
                                    alt="phlpost logo"
                                    width={46}
                                    height={46}
                                    className="rounded-full bg-secondary dark:bg-muted"
                                ></Image>
                            </span>
                            <span className="block text-xs font-normal leading-tight text-highlight transition-colors duration-200">
                                April 2024 – May 2024
                            </span>
                            <h3 className="flex items-center text-lg font-semibold leading-tight text-foreground transition-colors duration-200">
                                Encoder Intern
                            </h3>
                            <span className="mb-2 block text-sm font-normal leading-tight text-highlight transition-colors duration-200">
                                Philippine Postal Corporation
                            </span>
                            <ul className="ml-4 grid list-outside list-disc gap-1">
                                <li className="text-sm text-muted transition-colors duration-200">
                                    Updated delivery statuses by inputting
                                    receiver details using tracking numbers,
                                    ensuring accurate and timely data reflection
                                    in the tracking system.
                                </li>
                                <li className="text-sm text-muted transition-colors duration-200">
                                    Leveraged Optical Character Recognition
                                    (OCR) to extract tracking numbers from faded
                                    barcodes, securing data integrity despite
                                    print degradation.
                                </li>
                                <li className="text-sm text-muted transition-colors duration-200">
                                    Adapted to website outages by encoding
                                    delivered items for transmittal in Excel,
                                    mitigating disruptions and sustaining
                                    productivity.
                                </li>
                            </ul>
                        </li>
                        <li className="relative ml-10 py-4">
                            <span className="absolute -start-16 flex items-center justify-center">
                                <Image
                                    src="/logos/creotec.webp"
                                    alt="creotec logo"
                                    width={46}
                                    height={46}
                                    className="rounded-full bg-secondary dark:bg-muted"
                                ></Image>
                            </span>
                            <span className="block text-xs font-normal leading-tight text-highlight transition-colors duration-200">
                                Sep. 2019 – Sep. 2019
                            </span>
                            <h3 className="flex items-center text-lg font-semibold leading-tight text-foreground transition-colors duration-200">
                                Quality Assurance Intern
                            </h3>
                            <span className="mb-2 block text-sm font-normal leading-tight text-highlight transition-colors duration-200">
                                Creotec Philippines Inc.
                            </span>
                            <ul className="ml-4 grid list-outside list-disc gap-1">
                                <li className="text-sm text-muted transition-colors duration-200">
                                    Handled quality assurance on the
                                    microcontroller production line, ensuring
                                    100% compliance with standards and resolving
                                    production issues throughout the internship.
                                </li>
                                <li className="text-sm text-muted transition-colors duration-200">
                                    Monitored microcontroller handling, ensuring
                                    careful processing to meet daily quotas
                                    while maintaining production quality
                                    standards.
                                </li>
                                {/* <li className="text-sm text-muted transition-colors duration-200">
                                    Learned the 5S methodology through the
                                    lecture provided and applied it to
                                    streamline quality assurance processes for
                                    microcontrollers, enhancing workplace
                                    organization and efficiency.
                                </li> */}
                            </ul>
                        </li>
                    </ol>
                </TabsContent>
                <TabsContent value="education" className="rounded-lg border">
                    <ol className="relative ml-10 mr-6 border-s sm:mr-10">
                        <li className="relative ml-10 py-4">
                            <span className="absolute -start-16 flex items-center justify-center">
                                <Image
                                    src="/logos/ncst.webp"
                                    alt="ncst logo"
                                    width={46}
                                    height={46}
                                    className="rounded-full bg-secondary dark:bg-muted"
                                ></Image>
                            </span>
                            <span className="block text-xs font-normal leading-tight text-highlight transition-colors duration-200">
                                March 2021 - Aug. 2024
                            </span>
                            <h3 className="flex items-center text-lg font-semibold leading-tight text-foreground transition-colors duration-200">
                                National College of Science and Technology
                            </h3>
                            <span className="mb-2 block text-sm font-normal leading-tight text-highlight transition-colors duration-200">
                                Bachelor of Science in Computer Science
                            </span>
                            <ul className="ml-4 grid list-outside list-disc gap-1">
                                <li className="text-sm text-muted transition-colors duration-200">
                                    Graduated with Cum Laude honors,
                                    demonstrating consistent academic excellence
                                </li>
                                <li className="text-sm text-muted transition-colors duration-200">
                                    Received the Best in Thesis Award for the
                                    most outstanding undergraduate research,
                                    titled &quot;Implementation of Mobile Game
                                    Using Periodic Table for National Academy of
                                    Science and Technology.&quot;
                                </li>
                            </ul>
                        </li>
                        <li className="relative ml-10 py-4">
                            <span className="absolute -start-16 flex items-center justify-center">
                                <Image
                                    src="/logos/pcu.webp"
                                    alt="pcu logo"
                                    width={46}
                                    height={46}
                                    className="rounded-full bg-secondary dark:bg-muted"
                                ></Image>
                            </span>
                            <span className="block text-xs font-normal leading-tight text-highlight transition-colors duration-200">
                                Aug. 2018 – June 2020
                            </span>
                            <h3 className="flex items-center text-lg font-semibold leading-tight text-foreground transition-colors duration-200">
                                Philippine Christian University
                            </h3>
                            <span className="mb-2 block text-sm font-normal leading-tight text-highlight transition-colors duration-200">
                                Technical Vocational and Livelihood Track
                            </span>
                            <ul className="ml-4 grid list-outside list-disc gap-1">
                                <li className="text-sm text-muted transition-colors duration-200">
                                    Specialized in Information and
                                    Communications Technology (ICT) – Computer
                                    Programming
                                </li>
                            </ul>
                        </li>
                    </ol>
                </TabsContent>
            </Tabs>
        </motion.div>
    );
};

export default Qualifications;
