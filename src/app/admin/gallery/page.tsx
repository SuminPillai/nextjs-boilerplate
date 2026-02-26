import Prisma from "@/lib/prisma";
import GalleryAddForm from "@/components/admin/GalleryAddForm";
import { Trash2 } from "lucide-react";
import { deleteImage } from "@/app/actions/gallery";

export const dynamic = 'force-dynamic';

export default async function GalleryPage() {
    const images = await Prisma.galleryImage.findMany({
        orderBy: { created_at: "desc" },
    });

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Gallery Management</h2>

            <GalleryAddForm />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {images.map((img: any) => (
                    <div key={img.id} className="bg-white rounded-lg shadow overflow-hidden group relative">
                        <div className="aspect-square bg-gray-100 relative">
                            <img
                                src={img.url}
                                alt={img.title || "Gallery Image"}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <form action={async () => {
                                    "use server";
                                    await deleteImage(img.id);
                                }}>
                                    <button className="bg-red-600 text-white p-2 rounded-full hover:bg-red-700 transition">
                                        <Trash2 size={20} />
                                    </button>
                                </form>
                            </div>
                        </div>
                        <div className="p-3">
                            <p className="font-medium text-gray-800 truncate">{img.title || "Untitled"}</p>
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded mt-1 inline-block">
                                {img.category}
                            </span>
                        </div>
                    </div>
                ))}
                {images.length === 0 && (
                    <div className="col-span-full py-12 text-center text-gray-500 bg-white rounded-lg border-2 border-dashed">
                        No images in gallery yet.
                    </div>
                )}
            </div>
        </div>
    );
}
