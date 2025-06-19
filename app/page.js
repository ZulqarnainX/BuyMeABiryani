"use client"

import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/navigation";
import { useEffect } from 'react'


export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();
  
  
  // Redirecting Users to /login if they are logged in
    const handleGetStarted = () => {
    if (session) {
      router.push(`/${session.user.name}`);
    } else {
      router.push('/login');
    }
  };

    const handleAbout = () => {
      router.push(`/about`);
  };



  return (
    <>
   <div className="flex justify-center items-center flex-col gap-4 text-white h-[44vh]">
    <div className="font-bold flex items-center gap-2 text-5xl bg-gradient-to-r from-sky-200 via-blue-100 to-slate-300 text-transparent bg-clip-text">Buy Me a Biryani <span><img src="/biryani.png" width={80} alt="" /></span></div>
    <p className="bg-gradient-to-r from-rose-100 via-indigo-100 to-teal-100 text-transparent bg-clip-text text-xl py-2">It’s an easy way to raise some funds and share a little love just like how biryani brings people together, we bring support to your passion.</p>
    <div className="">
      <button onClick={handleGetStarted} className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Here</button>
      <button onClick={handleAbout} type="button" className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
    </div>
   </div>
      <div className="bg-white h-1 opacity-10">fsd</div>

      <div className="text-white container mx-auto pb-32 pt-14">
        <h1 className="text-3xl font-bold text-center mb-14 bg-gradient-to-r from-sky-200 via-blue-100 to-slate-300 text-transparent bg-clip-text">Your Fans Can Buy You A Biryani</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-800 rounded-full p-2 text-black" width={88} src="/working_dog.gif" alt="" />
            <p className="font-bold">Fund Yourself</p>
            <p className="text-center">Get funded and take the leap</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-800 rounded-full p-2 text-black" width={88} src="/coin.gif" alt="" />
            <p className="font-bold">Get Funded</p>
            <p className="text-center">Get funded and take the leap</p>
          </div>
          <div className="item space-y-3 flex flex-col items-center justify-center">
            <img className="bg-slate-800 rounded-full p-2 text-black" width={88} src="/group.gif" alt="" />
            <p className="font-bold">Fans want to help</p>
            <p className="text-center">Your fans are here to support you</p>
          </div>

        </div>
        </div>
    </>
  );
}
