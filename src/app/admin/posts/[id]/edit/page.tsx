import Prisma from "@/lib/prisma";
import PostForm from "@/components/admin/PostForm";
import { notFound } from "next/navigation";

export const dynamic = 'force-dynamic';

export default async function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const postId = parseInt(id);

    if (isNaN(postId)) {
        notFound();
    }

    const post = await Prisma.post.findUnique({
        where: { id: postId },
    });

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Post</h2>
            <PostForm post={post} />
        </div>
    );
}
