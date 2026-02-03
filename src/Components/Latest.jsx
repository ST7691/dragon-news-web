import React from 'react'
import Marquee from 'react-fast-marquee'

const Latest = () => {
  return (
    <div className='flex gap-3 items-center bg-base-200  '>
        <p className='btn btn-secondary px-3 py-2 text-base-100 '>Latest</p>
        <Marquee className='flex gap-5' speed={60} pauseOnHover={true}>
             <p className='font-bold p-3'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
             <p className='font-bold p-3'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
             <p className='font-bold p-3'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
             <p className='font-bold p-3'>Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...</p>
        </Marquee>
       
    </div>
  )
}

export default Latest