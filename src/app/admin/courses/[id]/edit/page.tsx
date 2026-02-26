import Prisma from "@/lib/prisma";
import CourseForm from "@/components/admin/CourseForm";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function EditCoursePage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const courseId = parseInt(id);

    if (isNaN(courseId)) {
        notFound();
    }

    const course = await Prisma.course.findUnique({
        where: { id: courseId },
    });

    if (!course) {
        notFound();
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Course</h2>
            <CourseForm course={course} />
        </div>
    );
}
