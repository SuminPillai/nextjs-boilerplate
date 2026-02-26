import * as React from "react";


import { Slot } from "@radix-ui/react-slot";

// If you don't have radix-ui slot, we can simplify. 
// For now, I'll use a standard button implementation without standardizing on Radix unless requested.
// But the prompt implied using "frontend-design" skill which often uses shadcn-like patterns.
// I will start with a simpler custom implementation to avoid extra dependency issues if Radix isn't installed.

import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn2(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        const variants = {
            primary: "bg-brand-primary text-white hover:bg-brand-primary-dark shadow-md hover:shadow-lg",
            secondary: "bg-brand-accent text-white hover:bg-brand-accent/90 shadow-md",
            outline: "border-2 border-brand-primary text-brand-primary hover:bg-brand-primary hover:text-white",
            ghost: "hover:bg-brand-base text-brand-text-muted hover:text-brand-primary",
        };

        const sizes = {
            sm: "h-9 px-4 text-sm",
            md: "h-11 px-6 text-base",
            lg: "h-14 px-8 text-lg",
        };

        return (
            <Comp
                ref={ref}
                className={cn2(
                    "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 disabled:opacity-50 disabled:pointer-events-none active:scale-95",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button };
