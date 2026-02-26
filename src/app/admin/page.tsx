import Link from "next/link";
import { Users, Calendar, BookOpen } from "lucide-react";
import prisma from "@/lib/prisma";
import { Booking } from "@prisma/client";

export const dynamic = 'force-dynamic';

export default async function AdminDashboard() {
    const bookingCount = await prisma.booking.count();
    const pendingCount = await prisma.booking.count({ where: { status: "Pending" } });
    const courseCount = await prisma.course.count();

    // Recent bookings
    const recentBookings = await prisma.booking.findMany({
        take: 5,
        orderBy: { created_at: "desc" },
    });

    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Overview</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-amber-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase">Total Bookings</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{bookingCount}</p>
                        </div>
                        <div className="p-2 bg-amber-100 rounded-full text-amber-600">
                            <Calendar size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase">Pending Review</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{pendingCount}</p>
                        </div>
                        <div className="p-2 bg-blue-100 rounded-full text-blue-600">
                            <Users size={24} />
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-500">
                    <div className="flex justify-between items-start">
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase">Active Courses</p>
                            <p className="text-3xl font-bold text-gray-800 mt-1">{courseCount}</p>
                        </div>
                        <div className="p-2 bg-green-100 rounded-full text-green-600">
                            <BookOpen size={24} />
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
                <div className="px-6 py-4 border-b">
                    <h3 className="font-bold text-gray-800">Recent Bookings</h3>
                </div>
                <table className="w-full text-left">
                    <thead className="bg-gray-50 text-gray-500 text-xs uppercase">
                        <tr>
                            <th className="px-6 py-3">Customer</th>
                            <th className="px-6 py-3">Course/Class</th>
                            <th className="px-6 py-3">Status</th>
                            <th className="px-6 py-3 text-right">Date</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                        {recentBookings.map((booking: Booking) => (
                            <tr key={booking.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 font-medium">{booking.customer_name}</td>
                                <td className="px-6 py-4 text-gray-600">{booking.class_name || "-"}</td>
                                <td className="px-6 py-4">
                                    <span className={`px-2 py-1 text-xs rounded-full ${booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                            booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                                'bg-gray-100 text-gray-800'
                                        }`}>
                                        {booking.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-right text-sm text-gray-500">
                                    {new Date(booking.created_at).toLocaleDateString()}
                                </td>
                            </tr>
                        ))}
                        {recentBookings.length === 0 && (
                            <tr><td colSpan={4} className="px-6 py-8 text-center text-gray-500">No bookings found.</td></tr>
                        )}
                    </tbody>
                </table>
                <div className="px-6 py-4 border-t bg-gray-50 text-center">
                    <Link href="/admin/bookings" className="text-amber-600 font-medium hover:underline text-sm">View All Bookings</Link>
                </div>
            </div>
        </div>
    );
}
