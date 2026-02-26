"use client";

import { useState, useRef, ChangeEvent } from "react";
import { Upload, X, Loader2, Image as ImageIcon } from "lucide-react";

interface ImageUploadProps {
    defaultValue?: string;
    onUploadComplete: (url: string) => void;
    label?: string;
    name?: string; // Optional name for hidden input
}

export default function ImageUpload({ defaultValue = "", onUploadComplete, label = "Image", name }: ImageUploadProps) {
    const [preview, setPreview] = useState<string>(defaultValue);
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = async (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        setUploading(true);

        try {
            // 1. Convert to WebP
            const webpBlob = await convertToWebP(file);

            // 2. Upload
            const filename = file.name.replace(/\.[^/.]+$/, "") + ".webp";
            const response = await fetch(`/api/upload?filename=${encodeURIComponent(filename)}`, {
                method: 'POST',
                body: webpBlob,
            });

            if (!response.ok) throw new Error("Upload failed");

            const blob = await response.json();
            const url = blob.url;

            setPreview(url);
            onUploadComplete(url);
        } catch (error) {
            console.error("Upload error:", error);
            alert("Failed to upload image.");
        } finally {
            setUploading(false);
        }
    };

    const convertToWebP = (file: File): Promise<Blob> => {
        return new Promise((resolve, reject) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                // Max dimensions
                const MAX_WIDTH = 1200;
                const MAX_HEIGHT = 1200;
                let width = img.width;
                let height = img.height;

                if (width > height) {
                    if (width > MAX_WIDTH) {
                        height *= MAX_WIDTH / width;
                        width = MAX_WIDTH;
                    }
                } else {
                    if (height > MAX_HEIGHT) {
                        width *= MAX_HEIGHT / height;
                        height = MAX_HEIGHT;
                    }
                }

                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext("2d");
                if (!ctx) {
                    reject(new Error("Canvas context not available"));
                    return;
                }

                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob((blob) => {
                    if (blob) resolve(blob);
                    else reject(new Error("Conversion failed"));
                }, "image/webp", 0.8); // Quality 0.8
            };
            img.onerror = reject;
            img.src = URL.createObjectURL(file);
        });
    };

    const handleRemove = () => {
        setPreview("");
        onUploadComplete("");
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    return (
        <div className="space-y-2">
            <label className="block text-sm font-bold text-gray-700">{label}</label>

            {/* Hidden Input for Form Submission if name is provided */}
            {name && <input type="hidden" name={name} value={preview} />}

            <div className="flex items-center gap-4">
                {preview ? (
                    <div className="relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200 group">
                        <img src={preview} alt="Preview" className="w-full h-full object-cover" />
                        <button
                            type="button"
                            onClick={handleRemove}
                            className="absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                            <X size={14} />
                        </button>
                    </div>
                ) : (
                    <div
                        onClick={() => fileInputRef.current?.click()}
                        className="w-32 h-32 rounded-lg border-2 border-dashed border-gray-300 flex flex-col items-center justify-center text-gray-400 cursor-pointer hover:border-amber-500 hover:text-amber-500 transition-colors"
                    >
                        {uploading ? (
                            <Loader2 className="animate-spin" />
                        ) : (
                            <>
                                <Upload size={24} className="mb-2" />
                                <span className="text-xs font-medium">Upload</span>
                            </>
                        )}
                    </div>
                )}

                <div className="flex-1">
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />
                    {!preview && (
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            disabled={uploading}
                            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
                        >
                            {uploading ? "Converting & Uploading..." : "Choose Image"}
                        </button>
                    )}
                    <p className="text-xs text-gray-500 mt-1">
                        Auto-converted to WebP. Max size optimized.
                    </p>
                </div>
            </div>
        </div>
    );
}
