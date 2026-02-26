"use client";

import { motion, MotionProps } from "framer-motion";
import { ButtonHTMLAttributes, ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimatedButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    magnetic?: boolean;
    ripple?: boolean;
}

export function AnimatedButton({
    children,
    variant = "primary",
    size = "md",
    magnetic = true,
    ripple = true,
    className,
    ...props
}: AnimatedButtonProps) {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);

    const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!magnetic || !buttonRef.current) return;

        const rect = buttonRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        buttonRef.current.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };

    const handleMouseLeave = () => {
        if (!buttonRef.current) return;
        buttonRef.current.style.transform = "translate(0, 0)";
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!ripple) return;

        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const newRipple = { x, y, id: Date.now() };
        setRipples((prev) => [...prev, newRipple]);

        setTimeout(() => {
            setRipples((prev) => prev.filter((r) => r.id !== newRipple.id));
        }, 600);

        props.onClick?.(e);
    };

    const variantStyles = {
        primary: "bg-brand-primary text-white hover:bg-brand-primary-dark shadow-md hover:shadow-lg",
        secondary: "bg-brand-accent text-white hover:bg-teal-800 shadow-md hover:shadow-lg",
        outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
    };

    const sizeStyles = {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg",
    };

    return (
        <motion.button
            ref={buttonRef}
            className={cn(
                "relative overflow-hidden rounded-full font-semibold transition-all duration-300 transform",
                variantStyles[variant],
                sizeStyles[size],
                className
            )}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick}
            style={{ transition: "transform 0.2s ease-out" }}
            type={props.type || "button"}
            disabled={props.disabled}
        >
            {children}

            {/* Ripple Effect */}
            {ripples.map((ripple) => (
                <motion.span
                    key={ripple.id}
                    className="absolute rounded-full bg-white/30"
                    style={{
                        left: ripple.x,
                        top: ripple.y,
                        width: 0,
                        height: 0,
                    }}
                    initial={{ width: 0, height: 0, opacity: 1 }}
                    animate={{
                        width: 300,
                        height: 300,
                        opacity: 0,
                        x: -150,
                        y: -150,
                    }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                />
            ))}
        </motion.button>
    );
}
