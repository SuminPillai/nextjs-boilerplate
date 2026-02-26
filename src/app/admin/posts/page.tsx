import prisma from "@/lib/prisma";
import Link from "next/link";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import { deletePost } from "@/app/actions/posts";

export const dynamic = 'force-dynamic';

export default async function PostsPage() {
    const posts = await prisma.post.findMany({
        orderBy: { created_at: "desc" },
    });

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Blog Posts</h2>
                <Link
                    href="/admin/posts/new"
                    className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-2 px-4 rounded shadow transition flex items-center gap-2"
                >
                    <Plus size={20} /> Add New
                </Link>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <table className="w-full text-left border-collapse">
                    <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                        <tr>
                            <th className="px-6 py-3 font-semibold">Title / Slug</th>
                            <th className="px-6 py-3 font-semibold">Status</th>
                            <th className="px-6 py-3 font-semibold">Date</th>
                            <th className="px-6 py-3 font-semibold">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {posts.map((post: any) => (
                            <tr key={post.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium text-gray-900">
                                    <div className="flex items-center gap-3">
                                        {post.image_url ? (
                                            <img src={post.image_url} alt="" className="w-10 h-10 object-cover rounded" />
                                        ) : (
                                            <div className="w-10 h-10 bg-gray-200 rounded flex items-center justify-center text-xs text-gray-400">No Img</div>
                                        )}
                                        <div>
                                            <div className="font-bold">{post.title}</div>
                                            <div className="text-xs text-gray-500">/{post.slug}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${post.is_published ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                                        }`}>
                                        {post.is_published ? 'Published' : 'Draft'}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-sm text-gray-600">
                                    {new Date(post.created_at).toLocaleDateString()}
                                </td>
                                <td className="px-6 py-4 flex gap-3">
                                    <Link
                                        href={`/admin/posts/${post.id}/edit`}
                                        className="text-blue-600 hover:text-blue-800"
                                    >
                                        <Edit size={18} />
                                    </Link>
                                    <form action={async () => {
                                        "use server";
                                        await deletePost(post.id);
                                    }}>
                                        <button className="text-red-600 hover:text-red-800">
                                            <Trash2 size={18} />
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        ))}
                        {posts.length === 0 && (
                            <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">No posts found.</td></tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
