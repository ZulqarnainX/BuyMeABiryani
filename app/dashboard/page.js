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
        <div>

        </div>
    )
}

export default page
