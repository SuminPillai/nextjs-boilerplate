"use client";

import { useActionState, useEffect, useState } from "react";
import Link from "next/link";
import { createPost, updatePost } from "@/app/actions/posts";
import ImageUpload from "./ImageUpload";

// Helper to generate slug from title
const generateSlug = (text: string) => {
    return text
        .toString()
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

export default function PostForm({ post }: { post?: any }) {
    const initialState = { message: null, errors: {} };

    const updatePostWithId = updatePost.bind(null, post?.id);

    const [state, formAction] = useActionState(
        post ? updatePostWithId : createPost,
        initialState as any
    );

    const [title, setTitle] = useState(post?.title || "");
    const [slug, setSlug] = useState(post?.slug || "");

    // Auto-generate slug if creating new post and user hasn't manually edited slug significantly
    useEffect(() => {
        if (!post && title) {
            setSlug(generateSlug(title));
        }
    }, [title, post]);

    return (
        <form action={formAction} className="bg-white shadow rounded-lg p-6 max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Title</label>
                        <input
                            type="text"
                            name="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                            required
                        />
                        {state?.errors?.title && <p className="text-red-500 text-sm mt-1">{state.errors.title}</p>}
                    </div>

                    {/* Slug */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Slug (URL)</label>
                        <input
                            type="text"
                            name="slug"
                            value={slug}
                            onChange={(e) => setSlug(e.target.value)}
                            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none bg-gray-50"
                            required
                        />
                        {state?.errors?.slug && <p className="text-red-500 text-sm mt-1">{state.errors.slug}</p>}
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Content (HTML or Markdown)</label>
                        <textarea
                            name="content"
                            rows={15}
                            defaultValue={post?.content || ""}
                            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none font-mono text-sm"
                            required
                        />
                        {state?.errors?.content && <p className="text-red-500 text-sm mt-1">{state.errors.content}</p>}
                    </div>
                </div>

                <div className="space-y-4">
                    {/* Publish Status */}
                    <div className="bg-gray-50 p-4 rounded border">
                        <label className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                name="is_published"
                                defaultChecked={post ? post.is_published : true}
                                className="rounded text-amber-600 focus:ring-amber-500 h-4 w-4"
                            />
                            <span className="font-bold text-gray-700">Published</span>
                        </label>
                    </div>

                    {/* Summary */}
                    <div>
                        <label className="block text-sm font-bold text-gray-700 mb-1">Summary / Excerpt</label>
                        <textarea
                            name="summary"
                            rows={4}
                            defaultValue={post?.summary || ""}
                            className="w-full border rounded px-3 py-2 focus:ring-2 focus:ring-amber-500 outline-none"
                        />
                        {state?.errors?.summary && <p className="text-red-500 text-sm mt-1">{state.errors.summary}</p>}
                    </div>

                    {/* Image URL */}
                    {/* Image Upload */}
                    <div>
                        <ImageUpload
                            label="Featured Image"
                            name="image_url"
                            defaultValue={post?.image_url || ""}
                            onUploadComplete={() => { }}
                        />
                        {state?.errors?.image_url && <p className="text-red-500 text-sm mt-1">{state.errors.image_url}</p>}
                    </div>
                </div>
            </div>

            {state?.message && (
                <div className="mt-6 p-3 bg-red-100 text-red-700 rounded text-sm font-medium">
                    {state.message}
                </div>
            )}

            <div className="flex justify-end gap-3 pt-6 mt-6 border-t">
                <Link href="/admin/posts" className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded">
                    Cancel
                </Link>
                <button
                    type="submit"
                    className="px-6 py-2 bg-amber-600 text-white font-medium rounded hover:bg-amber-700 transition"
                >
                    {post ? "Update Post" : "Create Post"}
                </button>
            </div>
        </form>
    );
}
