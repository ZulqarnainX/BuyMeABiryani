"use client"
import React from 'react'
import { useRouter } from "next/navigation";
import { useEffect, useState } from 'react';
import { useSession, signIn, signOut } from "next-auth/react"
import { updateProfile, fetchuser } from '@/actions/useractions';
import { ToastContainer, Slide, toast } from 'react-toastify';

const Dashboard = () => {
  const { data: session, status, update } = useSession();
  const router = useRouter();
  const [form, setform] = useState({})

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

  //   Redirecting Users to /login if they are logged in
  useEffect(() => {
    if (status === "loading") return;
    if (!session) {
      router.push("/login");
    } else {
      getData();
    }
  }, [status, session]);

  const getData = async () => {
    let u = await fetchuser(session.user.name)
    setform(u)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    if (status === "loading") return;
    if (!session) return;

    // alert("Profile Updated Successfully");
    notify()
    let a = await updateProfile(e, session.user.name)
      router.push(`/${session.user.name}`);
      getData();
    
  }


  return (
    <>
      <div className='container mx-auto py-5 px-6 '>
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

        <form className="max-w-2xl mx-auto" action={handleSubmit}>

          <div className='my-2'>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
            <input placeholder='Enter your name' value={form.name ? form.name : ""} onChange={handleChange} type="text" name='name' id="name" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input for bio */}
          <div className="my-2">
            <label htmlFor="accountbio" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Bio</label>
            <input placeholder='Enter your account bio' value={form.accountbio ? form.accountbio : ""} onChange={handleChange} type="text" name='accountbio' id="accountbio" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input for account description*/}
          <div className="my-2">
            <label htmlFor="accountdes" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Description</label>
            <input placeholder='Enter your account description' value={form.accountdes ? form.accountdes : ""} onChange={handleChange} type="text" name='accountdes' id="accountdes" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input for email */}
          <div className="my-2">
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
            <input placeholder='Enter your email' value={form.email ? form.email : ""} onChange={handleChange} type="email" name='email' id="email" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input forusername */}
          <div className='my-2'>
            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input placeholder='Enter your username' value={form.username ? form.username : ""} onChange={handleChange} type="text" name='username' id="username" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input for profile picture of input type text */}
          <div className="my-2">
            <label htmlFor="profilepic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Profile Picture</label>
            <input placeholder='Enter your profile picture URL' value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name='profilepic' id="profilepic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>

          {/* input for cover pic  */}
          <div className="my-2">
            <label htmlFor="coverpic" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Cover Picture</label>
            <input placeholder='Enter your cover picture URL' value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name='coverpic' id="coverpic" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input account name */}
          <div className="my-2">
            <label htmlFor="easypaisaname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Holder Name</label>
            <input placeholder='Enter your account holder name' value={form.easypaisaname ? form.easypaisaname : ""} onChange={handleChange} type="text" name='easypaisaname' id="easypaisaname" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* input account number */}
          <div className="my-2">
            <label htmlFor="easypaisanum" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Account Number</label>
            <input placeholder='Enter your account number' value={form.easypaisanum ? form.easypaisanum : ""} onChange={handleChange} type="text" name='easypaisanum' id="easypaisanum" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
          </div>
          {/* Select Account Type */}
          <div className="my-2">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Select Account Type
            </label>

            <div className="flex items-center mb-2">
              <input
                type="radio"
                id="easypaisa"
                name="accountType"
                value="Easypaisa"
                checked={form.accountType === "Easypaisa"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="easypaisa"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Easypaisa
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="jazzcash"
                name="accountType"
                value="JazzCash"
                checked={form.accountType === "JazzCash"}
                onChange={handleChange}
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="jazzcash"
                className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                JazzCash
              </label>
            </div>
          </div>


          {/* Submit Button  */}
          <div className="my-6">
            <button type="submit" className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none   dark:focus:ring-blue-800 font-medium text-sm">Save</button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Dashboard
