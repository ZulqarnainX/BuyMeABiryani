import React from 'react'

const Username = ({ params }) => {
  return (
    <>
      
      <div className='cover w-full bg-red-50 relative'>
        <img className='object-cover w-full h-[350]' src="https://raw.githubusercontent.com/ZulqarnainX/ZulqarnainX/main/Main.png" alt="" />
        <div className='absolute -bottom-20 right-[46%] rounded-full border-white border-2'>
          <img className='rounded-full' width={150} height={150} src="https://avatars.githubusercontent.com/u/184561476?v=4" alt="" />
        </div>
        <div className="info">
            {params.username}
        </div>
      </div>
    </>
  )
}

export default Username
