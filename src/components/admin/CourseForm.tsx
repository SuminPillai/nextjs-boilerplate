"use client";

import { useActionState } from "react";
import Link from "next/link";
import ImageUpload from "./ImageUpload";
// useActionState is available in React 19 canary / Next.js 15+? 
// User has React 19.2.3. checking imports.
// Actually, standard useFormState in canary is useActionState.
// Let's use a simpler approach or standard useFormStatus if needed, 
// but for now standard form submission with useActionState or just basic form action is fine.
// Since createCourse returns state, we can use useActionState (or useFormState from react-dom if not renamed yet).
// React 19 renamed useFormState to useActionState.

import { createCourse, updateCourse } from "@/app/actions/courses";

// Define a type for the state
type State = {
    errors?: {
        title?: string[];
        type?: string[];
        price?: string[];
        description?: string[];
        image_url?: string[];
    };
    message?: string | null;
};

export default function CourseForm({ course }: { course?: any }) {
    const initialState: State = { message: null, errors: {} };

    // Create a wrapper function to bind ID for update
    const updateCourseWithId = updateCourse.bind(null, course?.id);

    const [state, formAction] = useActionState(
        course ? updateCourseWithId : createCourse,
        initialState
    );

    return (
        <form action={formAction} className="bg-white shadow rounded-lg p-6 max-w-2xl">
            <div className="space-y-4">
                {/* Title */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                    <input
                        type="text"
                        name="title"
                        defaultValue={course?.title || ""}
                        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                        required
                    />
                    {state?.errors?.title && <p className="text-red-500 text-sm mt-1">{state.errors.title}</p>}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {/* Type */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Type</label>
                        <select
                            name="type"
                            defaultValue={course?.type || "Class"}
                            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                        >
                            <option value="Class">Class</option>
                            <option value="Retreat">Retreat</option>
                            <option value="Training">Training</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Price ($)</label>
                        <input
                            type="number"
                            name="price"
                            step="0.01"
                            defaultValue={course?.price ? Number(course.price) : ""}
                            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                            required
                        />
                        {state?.errors?.price && <p className="text-red-500 text-sm mt-1">{state.errors.price}</p>}
                    </div>
                </div>

                {/* Image URL */}
                {/* Image Upload */}
                <div>
                    <ImageUpload
                        label="Course Image"
                        name="image_url"
                        defaultValue={course?.image_url || ""}
                        onUploadComplete={() => { }}
                    />
                    {state?.errors?.image_url && <p className="text-red-500 text-sm mt-1">{state.errors.image_url}</p>}
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Description</label>
                    <textarea
                        name="description"
                        rows={4}
                        defaultValue={course?.description || ""}
                        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                    {state?.errors?.description && <p className="text-red-500 text-sm mt-1">{state.errors.description}</p>}
                </div>

                {state?.message && (
                    <div className="p-3 bg-red-100 text-red-700 rounded text-sm font-medium">
                        {state.message}
                    </div>
                )}

                <div className="flex justify-end gap-3 pt-4 border-t">
                    <Link href="/admin/courses" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                        Cancel
                    </Link>
                    <button
                        type="submit"
                        className="px-6 py-2 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition"
                    >
                        {course ? "Update Course" : "Create Course"}
                    </button>
                </div>
            </div>
        </form>
    );
}
