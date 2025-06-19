import mongoose from 'mongoose'

const connectDB = async () => {
  if (mongoose.connections[0].readyState) return

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      // remove useNewUrlParser
      useUnifiedTopology: true,
    })
    console.log('✅ MongoDB connected')
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message)
  }
}

export default connectDB
