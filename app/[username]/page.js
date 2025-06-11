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
            <h2 className='text-2xl font-bold my-5'>Supporters</h2>
            <ul className='mx-5'>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
              <li className='my-2'>Ahmed donated $30 with a message ""</li>
            </ul>
            </div>

            <div className="makePayment w-1/2 bg-slate-900 rounded-lg text-white p-10">
            <h2>Make a Payment</h2>
            </div>
          </div>
      </div>
    </>
  )
}

export default Username
