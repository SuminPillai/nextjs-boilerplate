import prisma from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2 } from "lucide-react";
import { deleteCourse } from "@/app/actions/courses";
import { Course } from "@prisma/client";

export const dynamic = 'force-dynamic';

export default async function CoursesPage() {
    const courses = await prisma.course.findMany({
        orderBy: { created_at: "desc" },
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Courses & Retreats</h2>
                <Link
                    href="/admin/courses/new"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded shadow transition flex items-center gap-2"
                >
                    <Plus size={20} /> Add New
                </Link>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3 font-semibold">Title</th>
                            <th className="px-6 py-3 font-semibold">Type</th>
                            <th className="px-6 py-3 font-semibold">Price</th>
                            <th className="px-6 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {courses.map((course: Course) => (
                            <tr key={course.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center gap-3">
                                        {course.image_url ? (
                                            <img src={course.image_url} alt="" className="w-10 h-10 object-cover rounded" />
                                        ) : (
                                            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">No Img</div>
                                        )}
                                        <span>{course.title}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-gray-600">
                                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">{course.type}</span>
                                </td>
                                <td className="px-6 py-4 font-bold text-gray-800">
                                    ${Number(course.price).toFixed(2)}
                                </td>
                                <td className="px-6 py-4 flex gap-3">
                                    <Link
                                        href={`/admin/courses/${course.id}/edit`}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Edit size={18} />
                                    </Link>
                                    <form action={async () => {
                                        "use server";
                                        await deleteCourse(course.id);
                                    }}>
                                        <button type="submit" className="text-red-600 hover:text-red-800">
                                            <Trash2 size={18} />
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                        {courses.length === 0 && (
                            <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">No courses found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
