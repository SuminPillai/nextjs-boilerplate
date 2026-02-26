"use client";

import { getScheduleBySlug, formatDate, getSpotsLeft } from "@/data/courseDates";
import type { CourseBatch } from "@/data/courseDates";

interface CourseDatesProps {
    courseSlug: string;
    showAll?: boolean; // show all batches vs just next one
    className?: string;
}

function BatchBadge({ batch }: { batch: CourseBatch }) {
    const spotsLeft = getSpotsLeft(batch);

    if (batch.status === "full") {
        return (
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                Full
            </span>
        );
    }

    if (spotsLeft <= 5 && spotsLeft > 0) {
        return (
            <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded-full font-semibold">
                Only {spotsLeft} spots left!
            </span>
        );
    }

    if (batch.status === "filling") {
        return (
            <span className="text-xs bg-amber-100 text-amber-700 px-2 py-1 rounded-full font-semibold">
                Filling Fast
            </span>
        );
    }

    return (
        <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
            Open
        </span>
    );
}

export function CourseDates({ courseSlug, showAll = false, className = "" }: CourseDatesProps) {
    const schedule = getScheduleBySlug(courseSlug);

    if (!schedule) {
        return (
            <p className={`text-brand-text-muted italic ${className}`}>
                Contact for schedule
            </p>
        );
    }

    const now = new Date().toISOString().split("T")[0];
    const upcomingBatches = schedule.batches.filter(
        (b) => b.startDate >= now && b.status !== "full"
    );

    if (upcomingBatches.length === 0) {
        return (
            <p className={`text-brand-text-muted italic ${className}`}>
                Dates opening soon
            </p>
        );
    }

    const batchesToShow = showAll ? upcomingBatches : [upcomingBatches[0]];

    return (
        <div className={`space-y-3 ${className}`}>
            {batchesToShow.map((batch, i) => (
                <div
                    key={i}
                    className="flex items-center justify-between gap-4 flex-wrap"
                >
                    <div className="flex items-center gap-2">
                        <span className="text-brand-primary font-semibold">
                            {formatDate(batch.startDate)}
                        </span>
                        <span className="text-brand-text-muted">-</span>
                        <span className="text-brand-primary font-semibold">
                            {formatDate(batch.endDate)}
                        </span>
                    </div>
                    <BatchBadge batch={batch} />
                </div>
            ))}
        </div>
    );
}

/**
 * Inline version for use in text/paragraphs — shows just the next date.
 */
export function NextCourseDate({ courseSlug }: { courseSlug: string }) {
    const schedule = getScheduleBySlug(courseSlug);
    if (!schedule) return <span className="text-brand-text-muted italic">Contact for schedule</span>;

    const now = new Date().toISOString().split("T")[0];
    const next = schedule.batches.find((b) => b.startDate >= now && b.status !== "full");

    if (!next) return <span className="text-brand-text-muted italic">Dates opening soon</span>;

    return <span className="text-brand-primary font-semibold">{formatDate(next.startDate)}</span>;
}
