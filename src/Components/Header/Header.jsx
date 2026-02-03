import React from 'react'
import logo from '../../assets/images/logo.png'
import { format } from 'date-fns'
const Header = () => {
  return (
    <div className='flex justify-center items-center flex-col gap-3 mt-[50px]'>
      <img className='w-[400px]' src={logo} alt="" />
      <p className='text-accent text-lg'>Journalism Without Fear or Favour</p>
      <p className='text-accent text-lg'>{format(new Date(), 'EEEE , MMMM , MM , yyyy')}</p>
    </div>
  )
}

export default Header