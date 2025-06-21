"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const SetupProfile = () => {
  const router = useRouter();
  const [currentUser, setCurrentUser] = useState(null);
  const [profilepic, setProfilepic] = useState("");
  const [coverpic, setCoverpic] = useState("");
  const [bio, setBio] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
    //   router.push("/login");
      return;
    }

    // ✅ Skip if already setup
    if (user.profilepic && user.coverpic && user.bio && user.description) {
    //   router.push("/dashboard");
      return;
    }

    setCurrentUser(user);
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/auth/update", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: currentUser.email,
        profilepic,
        coverpic,
        bio,
        description,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      const updatedUser = {
        ...currentUser,
        profilepic,
        coverpic,
        bio,
        description,
      };

      // ✅ Update localStorage
      localStorage.setItem("user", JSON.stringify(updatedUser));

      alert("✅ Profile setup complete!");
    //   router.push("/dashboard");
    } else {
      alert("❌ Failed: " + data.error);
    }
  };

  if (!currentUser) return null;

  return (
    <div className="text-white container mx-auto p-4 min-h-screen flex justify-center items-center">
      <form className="w-full max-w-xl" onSubmit={handleSubmit}>
        <h1 className="text-2xl font-bold mb-4">📸 Setup Your Public Profile</h1>

        <input
          type="text"
          placeholder="Profile Picture URL"
          className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-600"
          value={profilepic}
          onChange={(e) => setProfilepic(e.target.value)}
        />

        <input
          type="text"
          placeholder="Cover Picture URL"
          className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-600"
          value={coverpic}
          onChange={(e) => setCoverpic(e.target.value)}
        />

        <input
          type="text"
          placeholder="Short Bio"
          className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-600"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <textarea
          placeholder="Long Description"
          className="w-full mb-3 p-2 rounded bg-gray-800 border border-gray-600"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-blue-600 px-6 py-2 rounded hover:bg-blue-700">
          Save & Continue
        </button>
      </form>
    </div>
  );
};

export default SetupProfile;
