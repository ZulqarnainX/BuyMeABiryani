"use client"
import React, { useEffect, useState } from 'react'
import { useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import { updateProfile, fetchuser } from '@/actions/useractions'
import { ToastContainer, Slide, toast } from 'react-toastify'

const Dashboard = () => {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [form, setform] = useState({})
  const [loading, setLoading] = useState(true)

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
    })

  useEffect(() => {
    if (status === "loading") return
    if (!session) {
      router.push("/login")
    } else {
      getData()
    }
  }, [status, session])

  const getData = async () => {
    setLoading(true)
    let u = await fetchuser(session.user.name)
    setform(u)
    setLoading(false)
  }

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!session || status === "loading") return

    notify()
    await updateProfile(e, session.user.name)
    router.push(`/${session.user.name}`)
    getData()
  }

  return (
    <>
      <div className='container mx-auto py-5 px-6'>
        <h1 className='text-center my-5 text-3xl font-bold'>Welcome to your Dashboard</h1>

        {loading ? (
          <div className="text-center text-white py-20">Loading your data...</div>
        ) : (
          <form className="max-w-2xl mx-auto" onSubmit={handleSubmit}>
            {[
              { id: "name", label: "Name", type: "text" },
              { id: "accountbio", label: "Account Bio", type: "text" },
              { id: "accountdes", label: "Account Description", type: "text" },
              { id: "email", label: "Email", type: "email" },
              { id: "username", label: "Username", type: "text" },
              { id: "profilepic", label: "Profile Picture", type: "text" },
              { id: "coverpic", label: "Cover Picture", type: "text" },
              { id: "easypaisaname", label: "Account Holder Name", type: "text" },
              { id: "easypaisanum", label: "Account Number", type: "text" },
            ].map(({ id, label, type }) => (
              <div className='my-2' key={id}>
                <label htmlFor={id} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">{label}</label>
                <input
                  disabled={loading}
                  placeholder={`Enter your ${label.toLowerCase()}`}
                  value={form[id] || ""}
                  onChange={handleChange}
                  type={type}
                  name={id}
                  id={id}
                  className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            ))}

            {/* Account Type Radio Buttons */}
            <div className="my-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Account Type</label>
              {["Easypaisa", "JazzCash"].map((type) => (
                <div className="flex items-center mb-2" key={type}>
                  <input
                    disabled={loading}
                    type="radio"
                    id={type.toLowerCase()}
                    name="accountType"
                    value={type}
                    checked={form.accountType === type}
                    onChange={handleChange}
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-700 dark:border-gray-600"
                  />
                  <label htmlFor={type.toLowerCase()} className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{type}</label>
                </div>
              ))}
            </div>

            <div className="my-6">
              <button type="submit" disabled={loading} className="block w-full p-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-blue-500 focus:ring-4 focus:outline-none dark:focus:ring-blue-800 font-medium text-sm">
                Save
              </button>
            </div>
          </form>
        )}
      </div>
      <ToastContainer />
    </>
  )
}

export default Dashboard
