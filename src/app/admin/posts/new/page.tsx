import PostForm from "@/components/admin/PostForm";

export const dynamic = 'force-dynamic';

export default function NewPostPage() {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Write New Post</h2>
            <PostForm />
        </div>
    );
}
