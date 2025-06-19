"use client"
import React, { useEffect, useState } from 'react'
import { fetchuser } from '@/actions/useractions'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'
import { notFound } from "next/navigation"
const PaymentPage = ({ username }) => {

    const [currentUser, setcurrentUser] = useState({})

    useEffect(() => {
        getData()
    }, [])

    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        let u = await fetchuser(username)
        setcurrentUser(u)
    }
    return (
        <>

            <div className='cover w-full bg-red-50 relative'>
                <img className='object-cover w-full h-48 md:h-[400px]' src={currentUser.coverpic} alt="" />
                <div className='absolute -bottom-20 left-1/2 transform -translate-x-1/2 rounded-full border-white border-2'>
                    <img className='rounded-full' width={150} height={150} src={currentUser.profilepic} alt="" />
                </div>
            </div>
            <div className="info flex justify-center items-center my-20 flex-col gap-2">
                <div className='font-bold text-lg'>
                    @{username}
                </div>
                <div className='text-slate-400'>
                    {currentUser.accountbio}
                </div>


                <div className="payment flex gap-3 w-[80%] mt-11 flex-col md:flex-row">
                    <div className="supporters w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        {/* Show list of all the supporters as a leaderboard */}
                        {/* <h2 className='text-2xl flex font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500 items-center'>Get Me A Biryani <img width={44} src="/biryani.png" alt="" /></h2> */}
                        {(currentUser.easypaisanum == 0 || currentUser.easypaisaname == 0) && (
                            <li>No payment information is available yet.</li>
                        )}
                        <div className="mx-5 flex flex-col items-center justify-center h-[100%]">
                            <div className="bg-[#0d1b2a] shadow-lg rounded-2xl p-8 w-[290px] md:w-full max-w-xl border border-[#1c2e4a] transition-all">
                                <h2 className="md:text-3xl text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Payment Info</h2>

                                <div className="space-y-4 text-lg text-[#cbd5e1]">
                                    <div>
                                        <span className="md:text-[18px] text-[15px] md:font-medium bg-gradient-to-r from-indigo-300 to-cyan-400 text-transparent bg-clip-text">Name:</span> <span className='md:text-[18px] text-[15px]'> {currentUser.easypaisaname || "N/A"} </span>
                                    </div>
                                    <div>
                                        <span className="md:text-[18px] text-[15px] md:font-medium bg-gradient-to-r from-indigo-300 to-cyan-400 text-transparent bg-clip-text">Account Number:</span> <span className='md:text-[18px] text-[15px]'> {currentUser.easypaisanum || "N/A"} </span>
                                    </div>
                                    <div>
                                        <span className="md:text-[18px] text-[15px] md:font-medium bg-gradient-to-r from-indigo-300 to-cyan-400 text-transparent bg-clip-text">Account Type:</span> <span className='md:text-[18px] text-[15px]'> {currentUser.accountType || "N/A"} </span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>

                    <div className="makePayment w-full md:w-1/2 bg-slate-900 rounded-lg text-white p-10">
                        <h2 className='text-2xl font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500'>Description</h2>
                        <div className="flex gap-2 flex-col">
                            <div>{currentUser.accountdes}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
