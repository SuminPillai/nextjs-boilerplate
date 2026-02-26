"use client";

import { useActionState } from "react";
import { addImage } from "@/app/actions/gallery";
import { Plus } from "lucide-react";
import ImageUpload from "./ImageUpload";

const initialState = {
    message: null,
    errors: {},
};

export default function GalleryAddForm() {
    const [state, formAction] = useActionState(addImage, initialState as any);

    return (
        <form action={formAction} className="bg-white p-6 rounded-lg shadow mb-8">
            <h3 className="text-lg font-bold text-gray-800 mb-4">Add New Image</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title (Optional)</label>
                    <input
                        type="text"
                        name="title"
                        className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                    />
                </div>
                <div>
                    <ImageUpload
                        label="Image"
                        name="url"
                        onUploadComplete={(url) => console.log("Uploaded:", url)}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
                    <select name="category" className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none">
                        <option value="General">General</option>
                        <option value="Ashram">Ashram</option>
                        <option value="Classes">Classes</option>
                        <option value="Retreats">Retreats</option>
                    </select>
                </div>
            </div>

            {state?.message && <p className="text-red-600 text-sm mt-2">{state.message}</p>}

            <div className="mt-4 flex justify-end">
                <button
                    type="submit"
                    className="bg-amber-600 text-white px-4 py-2 rounded hover:bg-amber-700 flex items-center gap-2"
                >
                    <Plus size={18} /> Add Image
                </button>
            </div>
        </form>
    );
}
