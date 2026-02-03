import React, { use } from 'react'
import { NavLink } from 'react-router';

const catagoryPromise = fetch('/categories.json').then(res=>res.json())
const Categorys = () => {
const catagorys = use(catagoryPromise);
console.log(catagorys)
  return (
    <div>
        <h2 className='font-bold'>All Categoris : ({catagorys.length})</h2>
        <div className='grid grid-cols-1 mt-5 gap-3'>
            {catagorys.map(catagorys=>
            <NavLink className='btn bg-base-100 border-0
            hover:bg-base-200 font-semibold text-accent'
            to={`/catagory/${catagorys.id}`}
             key={catagorys.id}>
                {catagorys.name}
            </NavLink>
            )}
        </div>
         </div>
  )
}

export default Categorys