"use client"
import React from "react";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react'
import { ToastContainer, Slide, toast } from 'react-toastify';
import { set } from "mongoose";



  const notify = () =>
    toast.success('✅ Redirecting...', {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });

const Login = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (session) {
      notify();
      setTimeout(() => {
        router.push("/dashboard");
      }, 1500);
    }
  }, [session, router]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if(res?.ok) {
      // Session will trigger useEffect
    } else {
      setErrorMsg("❌ Invalid email or password")
    }
  };

  
  return (
    <div className="text-white container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
        <form
          onSubmit={handleLogin}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-sm space-y-4"
        >
          <div className="text-xl font-bold text-center bg-gradient-to-r from-sky-200 via-blue-100 to-slate-300 text-transparent bg-clip-text flex items-center justify-center gap-2">
            Login In <img width={44} src="/biryani.png" alt="" />
          </div>
          <div className="text-center text-gray-400">
            Log in to earn your biryani treat!</div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700  border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border-gray-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 w-full text-white py-2 rounded font-semibold"
          >
            Login
          </button>
        <div className="flex items-center justify-center gap-2 text-gray-500 mt-2">
          <span>Dont have an account ?</span> <a className="underline" href="/signup">Sign up</a>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
