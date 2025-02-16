import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const footerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
    },
};

const Footer = () => {
    return (
        <motion.footer
            className="pb-8"
            variants={footerVariants}
            initial="hidden"
            animate="visible"
        >
            <div className="flex flex-col-reverse items-center justify-between gap-y-8 sm:flex-row">
                <p className="text-xs text-foreground/65 transition-colors duration-200">
                    © {new Date().getFullYear()} All rights reserved.
                </p>
                <div className="flex items-center gap-4 sm:gap-8">
                    <ul className="flex gap-6">
                        <li>
                            <Link href="https://linkedin.com/in/raynaldescala">
                                <Linkedin
                                    width={20}
                                    height={20}
                                    className="text-foreground/65 transition-colors duration-200 hover:text-foreground"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="https://github.com/hyoihz"
                            >
                                <Github
                                    width={20}
                                    height={20}
                                    className="text-foreground/65 transition-colors duration-200 hover:text-foreground"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link
                                target="_blank"
                                href="mailto:raynaldescala01@gmail.com"
                            >
                                <Mail
                                    width={20}
                                    height={20}
                                    className="text-foreground/65 transition-colors duration-200 hover:text-foreground"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;
