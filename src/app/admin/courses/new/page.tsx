import CourseForm from "@/components/admin/CourseForm";

export const dynamic = 'force-dynamic';

export default function NewCoursePage() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add New Course</h2>
            <CourseForm />
        </div>
    );
}
