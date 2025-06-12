"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"

const page = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  //   Redirecting Users to /login if they are logged in
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="bg-[#070f2cb2] p-8 rounded-xl w-full max-w-md shadow-lg">
          <h1 className="text-2xl font-bold text-white text-center mb-6">Welcome to your Dashboard</h1>

          <form className="flex flex-col space-y-4">
            <label className="text-gray-300">Name
              <input type="text" className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none" />
            </label>

            <label className="text-gray-300">Email
              <input type="email" className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none" />
            </label>

            <label className="text-gray-300">Username
              <input type="text" className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none" />
            </label>

            <label className="text-gray-300">Profile Picture
              <input type="url" className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none" />
            </label>

            <label className="text-gray-300">Cover Picture
              <input type="url" className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none" />
            </label>

            <label className="text-gray-300">Easypaisa Credentials
              <input type="text" className="mt-1 w-full p-2 rounded-md bg-gray-700 text-white focus:outline-none" />
            </label>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default page
