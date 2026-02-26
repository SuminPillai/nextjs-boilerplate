"use client";

import { useActionState } from "react";
import { login } from "@/app/actions/auth";

export default function AdminLogin() {
    const [state, action, isPending] = useActionState(login, undefined);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Login</h1>
                    <p className="text-gray-500 mt-2">Welcome back! Please login to your account.</p>
                </div>

                {state?.error && (
                    <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-6" role="alert">
                        <p>{state.error}</p>
                    </div>
                )}

                <form action={action}>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-500 transition"
                            id="username"
                            name="username"
                            type="text"
                            placeholder="admin"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline focus:border-amber-500 transition"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="******************"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full transition transform hover:scale-105 disabled:opacity-50"
                            type="submit"
                            disabled={isPending}
                        >
                            {isPending ? "Signing In..." : "Sign In"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
