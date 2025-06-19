"use client"
import React, { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)

  return (
    <nav className='bg-[#020D25] text-white flex justify-between px-4 items-center md:h-16 flex-col md:flex-row'>
      {/* Logo */}
      <Link href={"/"} className="logo font-bold text-lg flex items-center">
        <img src="/biryani.png" width={44} alt="Logo" />
        <span className='ml-2 bg-gradient-to-r from-sky-200 via-blue-100 to-slate-300 text-transparent bg-clip-text'>
          BuyMeABiryani
        </span>
      </Link>

      {/* Buttons Section */}
      <div className="flex items-center gap-4 relative">
        {/* GitHub Button */}
        <a
          href="https://github.com/ZulqarnainX/BuyMeABiryani"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className='text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-2 py-1 md:px-5 md:py-2.5 inline-flex items-center'>
            <svg
              className="w-4 h-4 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 
      9.8 8.205 11.387.6.113.82-.258.82-.577 
      0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.084-.729.084-.729 
      1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.809 
      1.305 3.495.998.108-.776.42-1.305.763-1.605-2.665-.3-5.467-1.332-5.467-5.93 
      0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 
      0 0 1.005-.322 3.3 1.23a11.5 11.5 0 0 1 3-.405c1.02.005 
      2.045.138 3 .405 2.28-1.552 3.285-1.23 
      3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 
      1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 
      5.92.435.375.81 1.102.81 2.222 
      0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 
      22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
            Github Repository
          </button>
        </a>

        {/* Profile/Login Button */}
        {session ? (
          <div className="relative flex flex flex-col md:block gap-4">
            <button
              onClick={() => setShowdropdown(!showdropdown)}
              onBlur={() => setTimeout(() => setShowdropdown(false), 100)}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 md:px-5 md:py-2.5 inline-flex items-center"
            >
              Welcome {session.user.email}
              <svg className="w-2.5 h-2.5 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
              </svg>
            </button>

            {/* Dropdown */}
            <div className={`z-10 ${showdropdown ? "" : "hidden"} absolute right-0 md:mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 mt-[48px] dark:bg-gray-700`}>
              <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link href={`/${session.user.name}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Your Page
                  </Link>
                </li>
                <li>
                  <Link href="#" onClick={() => signOut()} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Sign out
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <button className='text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5'>
              Login
            </button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Navbar
