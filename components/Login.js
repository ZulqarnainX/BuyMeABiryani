"use client";
import React, { useState, useEffect } from "react";
import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = () =>
  toast.success("✅ Redirecting...", {
    position: "top-right",
    autoClose: 1500,
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
  }, [session]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg("");

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (!res.ok) {
      setErrorMsg("❌ Invalid email or password");
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
            Log In <img width={44} src="/biryani.png" alt="" />
          </div>
          <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border-gray-300" />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border-gray-300" />
          {errorMsg && <p className="text-red-500 text-sm">{errorMsg}</p>}
          <button type="submit" className="bg-green-600 hover:bg-green-700 w-full text-white py-2 rounded font-semibold">Login</button>
          <div className="text-gray-500 text-center">
            Don't have an account? <a className="underline" href="/signup">Sign up</a>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Login;
