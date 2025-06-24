"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [accountType, setAccountType] = useState("");
  const [easypaisanum, setEasypaisanum] = useState("");
  const [easypaisaname, setEasypaisaname] = useState("");
  const [bio, setBio] = useState("");
  const [description, setDescription] = useState("");
  const [profilepic, setProfilepic] = useState("");
  const [coverpic, setCoverpic] = useState("");

  // Wait for session to load
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/auth/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: session?.user?.email,
          accountType,
          easypaisanum,
          easypaisaname,
          bio,
          description,
          profilepic,
          coverpic,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        alert("✅ Account updated successfully!");
        router.push("/dashboard/setup-profile");
      } else {
        alert("❌ Update failed: " + data.error);
      }
    } catch (err) {
      console.error("Error updating account:", err);
      alert("❌ Something went wrong!");
    }
  };

  if (status === "loading" || status === "unauthenticated") return null;

  return (
    <div className="text-white container mx-auto">
      <div className="flex flex-col items-center justify-center min-h-screen gap-4 px-4">
        <form className="max-w-2xl mx-auto w-full" onSubmit={handleSubmit}>
          <h1 className="text-3xl mb-4 font-bold">
            👤 Welcome, {session.user.name}
          </h1>

          <div className="mb-4">
            <label className="block mb-1">Account Type</label>
            <select
              className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              value={accountType}
              onChange={(e) => setAccountType(e.target.value)}
              required
            >
              <option value="">Select</option>
              <option value="Easypaisa">Easypaisa</option>
              <option value="JazzCash">JazzCash</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block mb-1">Account Number</label>
            <input
              type="number"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              value={easypaisanum}
              onChange={(e) => setEasypaisanum(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Account Name</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              value={easypaisaname}
              onChange={(e) => setEasypaisaname(e.target.value)}
              required
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Bio</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Description</label>
            <textarea
              className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Profile Picture URL</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              value={profilepic}
              onChange={(e) => setProfilepic(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1">Cover Picture URL</label>
            <input
              type="text"
              className="w-full p-2 rounded bg-gray-800 border border-gray-600"
              value={coverpic}
              onChange={(e) => setCoverpic(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
