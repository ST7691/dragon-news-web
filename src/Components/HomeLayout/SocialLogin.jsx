import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'

const SocialLogin = () => {
  return (
    <div className='gap-5'>
        <h2 className='font-bold mb-5 '>Login with</h2>
  <div className="space-y-3">
          {/* Google */}
<button className="btn btn-secondary  w-full btn-outline ">
 <FcGoogle size={24} />
  Login with Google
</button>
{/* <!-- GitHub --> */}
<button className="btn btn-primary  border-0 w-full btn-outline ">
<FaGithub size={24} />
  Login with GitHub
</button>
  </div>
    </div>
  )
}

export default SocialLogin