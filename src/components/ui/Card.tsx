import * as React from "react";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
    return twMerge(clsx(inputs));
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: "default" | "glass" | "outline";
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
    ({ className, variant = "default", ...props }, ref) => {
        return (
            <div
                ref={ref}
                className={cn(
                    "rounded-2xl overflow-hidden transition-all duration-300",
                    variant === "default" && "bg-white shadow-xl hover:shadow-2xl border border-transparent",
                    variant === "glass" && "bg-white/60 backdrop-blur-md border border-white/40 shadow-lg",
                    variant === "outline" && "bg-transparent border-2 border-brand-primary/20 hover:border-brand-primary/50",
                    className
                )}
                {...props}
            />
        );
    }
);
Card.displayName = "Card";

export { Card };
