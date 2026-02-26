"use client";

import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";

interface HoverCardProps {
    children: ReactNode;
    className?: string;
    tilt?: boolean;
    glow?: boolean;
    lift?: boolean;
}

export function HoverCard({
    children,
    className,
    tilt = true,
    glow = true,
    lift = true,
}: HoverCardProps) {
    const [rotateX, setRotateX] = useState(0);
    const [rotateY, setRotateY] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!tilt) return;

        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateXValue = ((y - centerY) / centerY) * -10;
        const rotateYValue = ((x - centerX) / centerX) * 10;

        setRotateX(rotateXValue);
        setRotateY(rotateYValue);
    };

    const handleMouseLeave = () => {
        setRotateX(0);
        setRotateY(0);
    };

    return (
        <motion.div
            className={cn(
                "relative rounded-xl transition-all duration-300",
                glow && "hover:shadow-2xl",
                className
            )}
            style={{
                transformStyle: "preserve-3d",
                perspective: "1000px",
            }}
            animate={{
                rotateX: tilt ? rotateX : 0,
                rotateY: tilt ? rotateY : 0,
                y: lift ? 0 : 0,
            }}
            whileHover={{
                y: lift ? -8 : 0,
                transition: { duration: 0.3, ease: "easeOut" },
            }}
            transition={{
                rotateX: { duration: 0.3, ease: "easeOut" },
                rotateY: { duration: 0.3, ease: "easeOut" },
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            {/* Glow effect */}
            {glow && (
                <motion.div
                    className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-brand-primary/20 to-brand-accent/20 opacity-0 blur-lg transition-opacity duration-300"
                    whileHover={{ opacity: 1 }}
                />
            )}

            {/* Content */}
            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
