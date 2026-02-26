"use client";

import { motion, useInView, Variant } from "framer-motion";
import { useRef, ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    direction?: "up" | "down" | "left" | "right" | "fade";
    delay?: number;
    duration?: number;
    className?: string;
    once?: boolean;
    width?: "fit-content" | "100%";
}

const directionVariants: Record<string, { hidden: Variant; visible: Variant }> = {
    up: {
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
    },
    down: {
        hidden: { opacity: 0, y: -75 },
        visible: { opacity: 1, y: 0 },
    },
    left: {
        hidden: { opacity: 0, x: -75 },
        visible: { opacity: 1, x: 0 },
    },
    right: {
        hidden: { opacity: 0, x: 75 },
        visible: { opacity: 1, x: 0 },
    },
    fade: {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    },
};

export const ScrollReveal = ({
    children,
    direction = "up",
    delay = 0,
    duration = 0.8,
    className = "",
    once = true,
    width = "100%",
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });

    const variants = directionVariants[direction];

    return (
        <div ref={ref} style={{ width }} className={className}>
            <motion.div
                variants={variants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{
                    duration,
                    delay,
                    ease: [0.2, 0.8, 0.2, 1],
                }}
            >
                {children}
            </motion.div>
        </div>
    );
};

interface StaggerContainerProps {
    children: ReactNode;
    staggerDelay?: number;
    className?: string;
    once?: boolean;
}

export function StaggerContainer({
    children,
    staggerDelay = 0.1,
    className = "",
    once = true,
}: StaggerContainerProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once, margin: "-10%" });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                    },
                },
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}

export const StaggerItem = motion.div;

export const staggerItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: "easeOut" as const,
        },
    },
};
