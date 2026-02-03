import React from 'react'
import { Outlet } from 'react-router'
import Header from '../Components/Header/Header'
import Latest from '../Components/Latest'
import Navbar from '../Components/Navbar'
import LeftAsid from '../Components/HomeLayout/LeftAsid'
import RightAside from '../Components/HomeLayout/RightAside'
import Home from '../Pages/Home'


const HomeLayout = () => {
  return (
    <div>
        <header>
            <Header></Header>
            <section className='w-11/12 mx-auto mt-3'>
                <Latest></Latest>
            </section>
            <nav className='w-11/12 mx-auto mt-3'>
                <Navbar></Navbar>
            </nav>
        </header>
        <main className='grid grid-cols-12 w-11/12 mx-auto my-3 gap-5'>
            {/* ---------------------left asid--------------------------- */}
           <aside className='left-asid col-span-3'>
                <LeftAsid></LeftAsid>
           </aside>
            {/* -----------------outlet----------------------- */}
            <section className='main col-span-6'>
                <Outlet></Outlet>
            </section>
            {/* ---------------right aside------------------------- */}
            <aside className='right-asid col-span-3'>
                  <RightAside></RightAside>
            </aside>
        </main>
    </div>
  )
}

export default HomeLayout