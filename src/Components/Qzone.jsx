import React from 'react'
import swimmming from '../assets/images/swimming.png'
import classImg from '../assets/images/class.png'
import playground from '../assets/images/playground.png'
const Qzone = () => {
  return (
    <div className='bg-base-200 p-3'>
        <h2 className='font-bold'>Q-Zone</h2>
        <div className="space-y-5">
   <img src={swimmming} alt="" />
   <img src={classImg} alt="" />
   <img src={playground} alt="" />
        </div>

    </div>
  )
}

export default Qzone