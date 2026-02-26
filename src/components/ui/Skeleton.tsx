import { cn } from "@/lib/utils";

interface SkeletonProps {
    className?: string;
    variant?: "text" | "circular" | "rectangular";
    width?: string | number;
    height?: string | number;
    animation?: "pulse" | "wave" | "none";
}

export function Skeleton({
    className,
    variant = "rectangular",
    width,
    height,
    animation = "pulse",
}: SkeletonProps) {
    const variantStyles = {
        text: "h-4 rounded",
        circular: "rounded-full",
        rectangular: "rounded-lg",
    };

    const animationStyles = {
        pulse: "animate-pulse",
        wave: "animate-shimmer bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%]",
        none: "",
    };

    return (
        <div
            className={cn(
                "bg-gray-200",
                variantStyles[variant],
                animationStyles[animation],
                className
            )}
            style={{
                width: width || (variant === "circular" ? height : "100%"),
                height: height || (variant === "text" ? "1rem" : "auto"),
            }}
        />
    );
}

export function SkeletonCard() {
    return (
        <div className="bg-white p-6 rounded-xl shadow-lg space-y-4">
            <Skeleton variant="rectangular" height={200} />
            <Skeleton variant="text" width="60%" />
            <Skeleton variant="text" width="80%" />
            <Skeleton variant="text" width="40%" />
        </div>
    );
}

export function SkeletonText({ lines = 3 }: { lines?: number }) {
    return (
        <div className="space-y-2">
            {Array.from({ length: lines }).map((_, i) => (
                <Skeleton
                    key={i}
                    variant="text"
                    width={i === lines - 1 ? "60%" : "100%"}
                />
            ))}
        </div>
    );
}
