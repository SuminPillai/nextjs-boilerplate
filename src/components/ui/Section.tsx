import * as React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    container?: boolean;
    spacing?: "none" | "sm" | "md" | "lg";
    bg?: "default" | "alt" | "none" | "dark" | "primary";
    // New props aliases
    variant?: "default" | "light" | "dark" | "primary";
    pattern?: "none" | "lotus" | "mandala";
}

const Section = React.forwardRef<HTMLElement, SectionProps>(
    ({ className, children, container = true, spacing = "lg", bg, variant, pattern = "none", ...props }, ref) => {
        // Map variant to bg if bg is not provided
        let background = bg;
        if (!background) {
            if (variant === "light") background = "default";
            else if (variant === "default") background = "alt";
            else if (variant === "dark") background = "dark";
            else if (variant === "primary") background = "primary";
            else background = "default"; // Default fallback
        }

        const patterns = {
            none: "",
            lotus: "bg-[url('/img/pattern-lotus.png')] bg-repeat opacity-5",
            mandala: "bg-[url('/img/pattern-mandala.png')] bg-repeat opacity-5",
        };

        return (
            <section
                ref={ref}
                className={cn(
                    "relative overflow-hidden",
                    spacing === "sm" && "py-12 md:py-16",
                    spacing === "md" && "py-16 md:py-24",
                    spacing === "lg" && "py-20 md:py-32",
                    background === "default" && "bg-white",
                    background === "alt" && "bg-brand-base",
                    background === "dark" && "bg-brand-dark text-white",
                    background === "primary" && "bg-brand-primary text-white",
                    className
                )}
                {...props}
            >
                {pattern !== "none" && (
                    <div className={`absolute inset-0 pointer-events-none ${patterns[pattern]}`} />
                )}
                {container ? (
                    <div className="container mx-auto px-6 max-w-7xl relative z-10">
                        {children}
                    </div>
                ) : (
                    children
                )}
            </section>
        );
    }
);
Section.displayName = "Section";

export { Section };
