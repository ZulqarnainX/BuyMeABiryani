import React from 'react'
import { notFound } from "next/navigation"
import User from '@/models/User'
import connectDB from '@/db/connectDb'
import PaymentPage from '@/components/PaymentPage'

const Username = async ({ params }) => {
  await connectDB()
  const u = await User.findOne({ username: params.username }).lean()

  if (!u) return notFound()

  // Convert special fields to plain strings
  const safeUser = {
    ...u,
    _id: u._id.toString(),
    createdAt: u.createdAt?.toISOString?.(),
    updatedAt: u.updatedAt?.toISOString?.(),
  }

  return <PaymentPage user={safeUser} />
}

export default Username

export async function generateMetadata({ params }) {
  return {
    title: `Support ${params.username} - GetMeABiryani`,
  }
}
