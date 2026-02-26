/**
 * Centralized Course Dates Manager
 *
 * Update this file to manage all course and retreat dates across the site.
 * All components pull dates from this single source of truth.
 */

export interface CourseBatch {
    startDate: string; // ISO date string
    endDate: string; // ISO date string
    spotsTotal: number;
    spotsBooked: number;
    earlyBirdDeadline?: string; // ISO date string
    status: "open" | "filling" | "full" | "upcoming";
}

export interface CourseSchedule {
    slug: string;
    title: string;
    shortTitle: string;
    category: "ttc" | "retreat" | "immersion";
    batches: CourseBatch[];
}

// ============================================
// EDIT DATES HERE - Single Source of Truth
// ============================================

export const courseSchedules: CourseSchedule[] = [
    {
        slug: "100-hour-yoga-ttc",
        title: "100 Hour Yoga Teacher Training",
        shortTitle: "100hr TTC",
        category: "ttc",
        batches: [
            {
                startDate: "2026-03-01",
                endDate: "2026-03-14",
                spotsTotal: 15,
                spotsBooked: 8,
                earlyBirdDeadline: "2026-01-01",
                status: "filling",
            },
            {
                startDate: "2026-04-01",
                endDate: "2026-04-14",
                spotsTotal: 15,
                spotsBooked: 3,
                status: "open",
            },
            {
                startDate: "2026-05-01",
                endDate: "2026-05-14",
                spotsTotal: 15,
                spotsBooked: 0,
                status: "open",
            },
        ],
    },
    {
        slug: "200-hour-yoga-ttc",
        title: "200 Hour Yoga Teacher Training",
        shortTitle: "200hr TTC",
        category: "ttc",
        batches: [
            {
                startDate: "2026-03-01",
                endDate: "2026-03-26",
                spotsTotal: 20,
                spotsBooked: 14,
                earlyBirdDeadline: "2026-01-01",
                status: "filling",
            },
            {
                startDate: "2026-04-01",
                endDate: "2026-04-26",
                spotsTotal: 20,
                spotsBooked: 6,
                status: "open",
            },
            {
                startDate: "2026-05-01",
                endDate: "2026-05-26",
                spotsTotal: 20,
                spotsBooked: 0,
                status: "open",
            },
        ],
    },
    {
        slug: "300-hour-yoga-ttc",
        title: "300 Hour Yoga Teacher Training",
        shortTitle: "300hr TTC",
        category: "ttc",
        batches: [
            {
                startDate: "2026-03-01",
                endDate: "2026-04-10",
                spotsTotal: 12,
                spotsBooked: 5,
                status: "open",
            },
            {
                startDate: "2026-05-01",
                endDate: "2026-06-10",
                spotsTotal: 12,
                spotsBooked: 0,
                status: "open",
            },
        ],
    },
    {
        slug: "7-day-yoga-retreat",
        title: "7-Day Yoga Retreat",
        shortTitle: "7-Day Retreat",
        category: "retreat",
        batches: [
            {
                startDate: "2026-03-10",
                endDate: "2026-03-16",
                spotsTotal: 10,
                spotsBooked: 6,
                status: "filling",
            },
            {
                startDate: "2026-04-10",
                endDate: "2026-04-16",
                spotsTotal: 10,
                spotsBooked: 0,
                status: "open",
            },
        ],
    },
    {
        slug: "3-day-pranayama-retreat",
        title: "3-Day Pranayama Retreat",
        shortTitle: "3-Day Pranayama",
        category: "retreat",
        batches: [
            {
                startDate: "2026-03-13",
                endDate: "2026-03-16",
                spotsTotal: 10,
                spotsBooked: 2,
                status: "open",
            },
            {
                startDate: "2026-04-13",
                endDate: "2026-04-16",
                spotsTotal: 10,
                spotsBooked: 0,
                status: "open",
            },
        ],
    },
    {
        slug: "1-day-retreat",
        title: "1-Day Yoga Reset",
        shortTitle: "1-Day Reset",
        category: "retreat",
        batches: [
            {
                startDate: "2026-03-08",
                endDate: "2026-03-08",
                spotsTotal: 15,
                spotsBooked: 0,
                status: "open",
            },
        ],
    },
    {
        slug: "advanced-pranayama-immersion",
        title: "Advanced Pranayama Immersion",
        shortTitle: "Pranayama Immersion",
        category: "immersion",
        batches: [
            {
                startDate: "2026-03-13",
                endDate: "2026-03-16",
                spotsTotal: 10,
                spotsBooked: 0,
                status: "open",
            },
            {
                startDate: "2026-04-16",
                endDate: "2026-04-24",
                spotsTotal: 10,
                spotsBooked: 0,
                status: "open",
            },
        ],
    },
];

// ============================================
// Helper Functions
// ============================================

export function getScheduleBySlug(slug: string): CourseSchedule | undefined {
    return courseSchedules.find((c) => c.slug === slug);
}

export function getNextBatch(slug: string): CourseBatch | undefined {
    const schedule = getScheduleBySlug(slug);
    if (!schedule) return undefined;
    const now = new Date().toISOString().split("T")[0];
    return schedule.batches.find(
        (b) => b.startDate >= now && b.status !== "full"
    );
}

export function formatDate(isoDate: string): string {
    const date = new Date(isoDate + "T00:00:00");
    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
    });
}

export function getSpotsLeft(batch: CourseBatch): number {
    return batch.spotsTotal - batch.spotsBooked;
}
