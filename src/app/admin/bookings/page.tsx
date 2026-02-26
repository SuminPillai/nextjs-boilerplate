import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { Booking } from "@prisma/client";

export const dynamic = 'force-dynamic';

// ...

// ...
// ... {bookings.map((booking: Booking) => ( ...

export default async function BookingsPage({
    searchParams,
}: {
    searchParams: Promise<{ status?: string }>;
}) {
    const params = await searchParams;
    const statusFilter = params.status || 'All';

    const where = statusFilter !== 'All' ? { status: statusFilter } : {};

    const bookings = await prisma.booking.findMany({
        where,
        orderBy: { created_at: "desc" },
    });

    return (
        <div>
            <div className="flex flex-col md:flex-row justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Bookings Management</h2>
                <div className="flex gap-3">
                    <a href="/api/admin/bookings/export" target="_blank" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded shadow transition text-sm flex items-center">
                        Download CSV
                    </a>
                    {/* Filters */}
                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <FilterButton status="All" current={statusFilter} />
                        <FilterButton status="Pending" current={statusFilter} />
                        <FilterButton status="Confirmed" current={statusFilter} />
                    </div>
                </div>
            </div>

            <div className="bg-white shadow rounded-lg overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead className="bg-gray-50 text-gray-600 uppercase text-xs">
                            <tr>
                                <th className="px-6 py-3 font-semibold">ID</th>
                                <th className="px-6 py-3 font-semibold">Customer Details</th>
                                <th className="px-6 py-3 font-semibold">Class / Date</th>
                                <th className="px-6 py-3 font-semibold">Message</th>
                                <th className="px-6 py-3 font-semibold">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200">
                            {bookings.map((booking: Booking) => (
                                <tr key={booking.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 text-xs text-gray-500">#{booking.id}</td>
                                    <td className="px-6 py-4">
                                        <p className="font-bold text-gray-800">{booking.customer_name}</p>
                                        <p className="text-xs text-blue-600 hover:underline"><a href={`mailto:${booking.email}`}>{booking.email}</a></p>
                                        <p className="text-xs text-gray-500">{booking.phone}</p>
                                    </td>
                                    <td className="px-6 py-4">
                                        <p className="text-sm font-medium text-gray-700">{booking.class_name}</p>
                                        <p className="text-xs text-gray-500">{booking.date_booked ? new Date(booking.date_booked).toLocaleDateString() : '-'}</p>
                                    </td>
                                    <td className="px-6 py-4 text-sm text-gray-500 max-w-xs truncate" title={booking.message || ""}>
                                        {booking.message ? (booking.message.length > 50 ? booking.message.substring(0, 50) + '...' : booking.message) : '-'}
                                    </td>
                                    <td className="px-6 py-4">
                                        <form action={updateStatus}>
                                            <input type="hidden" name="id" value={booking.id} />
                                            <select
                                                name="status"
                                                defaultValue={booking.status || 'Pending'}
                                                // On change, we'd ideally trigger submit, but for now using a button or just native form behavior
                                                className={`text-xs font-semibold rounded-full px-2 py-1 border-0 cursor-pointer focus:ring-2 focus:ring-amber-500 ${booking.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                                                    booking.status === 'Confirmed' ? 'bg-green-100 text-green-800' :
                                                        booking.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                                                            booking.status === 'Cancelled' ? 'bg-red-100 text-red-800' :
                                                                'bg-gray-100 text-gray-800'
                                                    }`}
                                            >
                                                <option value="Pending">Pending</option>
                                                <option value="Confirmed">Confirmed</option>
                                                <option value="Completed">Completed</option>
                                                <option value="Cancelled">Cancelled</option>
                                            </select>
                                            <button type="submit" className="ml-2 text-xs text-gray-400 hover:text-amber-500">Save</button>
                                        </form>
                                    </td>
                                </tr>
                            ))}
                            {bookings.length === 0 && (
                                <tr><td colSpan={5} className="px-6 py-8 text-center text-gray-500">No bookings found.</td></tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

function FilterButton({ status, current }: { status: string, current: string }) {
    return (
        <a
            href={`?status=${status}`}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${current === status
                ? 'bg-amber-500 text-white shadow-md'
                : 'bg-white text-gray-600 border hover:bg-gray-50'
                }`}
        >
            {status}
        </a>
    );
}

async function updateStatus(formData: FormData) {
    "use server";
    const id = parseInt(formData.get("id") as string);
    const status = formData.get("status") as string;

    if (id && status) {
        await prisma.booking.update({
            where: { id },
            data: { status }
        });
        revalidatePath("/admin/bookings");
    }
}
