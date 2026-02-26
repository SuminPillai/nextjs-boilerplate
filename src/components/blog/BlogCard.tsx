import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/data/blogData';
import { Card } from '@/components/ui/Card';

interface BlogCardProps {
    post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
    return (
        <Card className="flex flex-col h-full hover:shadow-xl transition-shadow duration-300 group overflow-hidden">
            <Link href={`/blog/${post.slug}`} className="relative h-48 w-full overflow-hidden block">
                <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </Link>
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-primary uppercase tracking-wider mb-2">
                    <span>{post.category}</span>
                    <span className="text-brand-text-muted">•</span>
                    <time className="text-brand-text-muted">{post.date}</time>
                </div>
                <Link href={`/blog/${post.slug}`} className="group-hover:text-brand-primary transition-colors">
                    <h2 className="text-xl font-bold text-brand-dark mb-3 line-clamp-2 font-serif">{post.title}</h2>
                </Link>
                <p className="text-brand-text-muted text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
                    {post.excerpt}
                </p>
                <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center text-sm font-bold text-brand-primary group/link mt-auto"
                >
                    Read Article <span className="ml-1 transition-transform group-hover/link:translate-x-1">→</span>
                </Link>
            </div>
        </Card>
    );
}
