"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, Slide, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notifySuccess = () =>
    toast.success("✅ Signup successful! Redirecting to login...", {
        position: "top-right",
        autoClose: 1500,
        theme: "dark",
        transition: Slide,
    });

const notifyError = (msg) =>
    toast.error(msg || "❌ Something went wrong!", {
        position: "top-right",
        autoClose: 2000,
        theme: "dark",
        transition: Slide,
    });

const Signup = () => {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, username }),
      });

      const data = await res.json();

      if (res.ok) {
        notifySuccess();
        setTimeout(() => router.push("/login"), 1500);
      } else {
        notifyError(data.message);
      }
    } catch (err) {
      notifyError("❌ Server error. Try again.");
    } finally {
      setLoading(false);
    }
  };

    return (
        <div className="text-white container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
        <form
          onSubmit={handleSignup}
          className="bg-white dark:bg-gray-800 p-6 rounded-xl w-full max-w-sm space-y-4"
        >
          <div className="text-xl font-bold text-center bg-gradient-to-r from-sky-200 via-blue-100 to-slate-300 text-transparent bg-clip-text flex items-center justify-center gap-2">
            Sign Up <img width={44} src="/biryani.png" alt="" />
          </div>
          <div className="text-center text-gray-400">
            Join us and earn your biryani treat!
          </div>

          <input
            type="email"
            placeholder="Email"
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border-gray-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <input
            type="text"
            placeholder="Username"
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 border-gray-300"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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

          <button
            type="submit"
            disabled={loading}
            className="bg-blue-600 hover:bg-blue-700 w-full text-white py-2 rounded font-semibold"
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>

          <div className="flex items-center justify-center gap-2 text-gray-500 mt-2">
            <span>Already have an account?</span>{" "}
            <a className="underline" href="/login">
              Login
            </a>
          </div>
        </form>
        <ToastContainer />
      </div>
    </div>
    )
}

export default Signup
