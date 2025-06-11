import React from 'react'

const Username = ({ params }) => {
  return (
    <>

      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-[400px]' src="https://raw.githubusercontent.com/ZulqarnainX/ZulqarnainX/main/Main.png" alt="" />
        <div className='absolute -bottom-20 right-[46%] rounded-full border-white border-2'>
          <img className='rounded-full' width={150} height={150} src="https://avatars.githubusercontent.com/u/184561476?v=4" alt="" />
        </div>
      </div>
      <div className="info flex justify-center items-center my-20 flex-col gap-2">
        <div className='font-bold text-lg'>
          @{params.username}
        </div>
        <div className='text-slate-400'>
          I just like to code 🤷
        </div>
        <div className='text-slate-400'>
          0 members . 0 posts . $15,000/release
        </div>

        <div className="payment flex gap-3 w-[80%] mt-11">
          <div className="supporters w-1/2 bg-slate-900 rounded-lg text-white p-10">
            {/* Show list of all the supporters as a leaderboard */}
            <h2 className='text-2xl font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-500'>Supporters</h2>
            <ul className='mx-5'>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>Ahmed donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>Ahmed donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
                </li>
              <li className='my-4 flex gap-2 items-center'>
                <img width={33} src="avatar.gif" alt="user avatar" />
                <span>Ahmed donated <span className='font-bold'>$30</span> with a message "I support you bro. Lots of ❤️"</span>
                </li>
            </ul>
          </div>

          <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2 className='text-2xl font-bold my-5 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-500 to-purple-500'>Make a Payment</h2>
            <div className="flex gap-2 flex-col">
              {/* input for name and message */}
              <div>
                <input type="text" placeholder='Enter Name' className='w-full p-3 rounded-lg bg-slate-800' />
              </div>
              <input type="text" placeholder='Enter Message' className='w-full p-3 rounded-lg bg-slate-800' />
              <input type="text" placeholder='Enter Amount' className='w-full p-3 rounded-lg bg-slate-800' />
              <button type="button" className="text-white bg-gradient-to-r from-blue-700 via-indigo-800 to-purple-900 hover:from-blue-600 hover:to-purple-800 shadow-xl shadow-indigo-900/50 font-bold rounded-xl text-sm px-6 py-3 text-center me-2 mb-2 transition-all duration-300 ease-in-out">💳 Pay Now</button>
            </div>
            {/* Or choose from these amounts */}
            <div className='flex gap-2 mt-5'>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay 10$</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay 20$</button>
              <button className='bg-slate-800 p-3 rounded-lg'>Pay 50$</button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Username
