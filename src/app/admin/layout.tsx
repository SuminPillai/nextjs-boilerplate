import Link from "next/link";
import { LogOut, LayoutDashboard, Calendar, BookOpen, Image as ImageIcon, FileText } from "lucide-react";
import { logout } from "@/app/actions/auth";
import "../globals.css";

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <div className="min-h-screen bg-gray-100 flex flex-col">
                    {/* Top Navigation */}
                    <nav className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center z-10">
                        <div className="flex items-center gap-2">
                            <img src="/img/logo.webp" alt="Logo" className="h-8 w-auto" />
                            <h1 className="text-xl font-bold text-gray-800 font-serif">Admin Panel</h1>
                        </div>
                        <div className="flex items-center gap-4">
                            <Link href="/" className="text-sm text-gray-500 hover:text-amber-500">Visit Public Site</Link>
                            <form action={logout}>
                                <button className="flex items-center gap-2 text-sm text-red-600 hover:text-red-700 font-medium px-3 py-1 bg-red-50 rounded hover:bg-red-100 transition-colors">
                                    <LogOut size={16} /> Logout
                                </button>
                            </form>
                        </div>
                    </nav>

                    <div className="flex flex-1">
                        {/* Sidebar */}
                        <aside className="w-64 bg-white shadow-r hidden md:block border-r border-gray-200">
                            <div className="p-4 space-y-1">
                                <NavItem href="/admin" icon={<LayoutDashboard size={18} />} label="Dashboard" />
                                <NavItem href="/admin/bookings" icon={<Calendar size={18} />} label="Bookings" />
                                <NavItem href="/admin/courses" icon={<BookOpen size={18} />} label="Courses" />
                                <NavItem href="/admin/gallery" icon={<ImageIcon size={18} />} label="Gallery" />
                                <NavItem href="/admin/posts" icon={<FileText size={18} />} label="Blog Posts" />
                            </div>

                            <div className="p-4 mt-auto border-t">
                                <div className="bg-amber-50 p-3 rounded text-xs text-amber-800">
                                    <p className="font-bold">Support</p>
                                    <p>Contact system admin for help.</p>
                                </div>
                            </div>
                        </aside>

                        {/* Main Content */}
                        <main className="flex-1 p-8 overflow-y-auto h-[calc(100vh-65px)]">
                            {children}
                        </main>
                    </div>
                </div>
            </body>
        </html>
    );
}

function NavItem({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <Link
            href={href}
            className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-amber-50 hover:text-amber-700 rounded-md transition-colors font-medium"
        >
            {icon}
            <span>{label}</span>
        </Link>
    );
}
