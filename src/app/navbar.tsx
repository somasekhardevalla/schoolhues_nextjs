
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'

function Navbar() {
  return (
    <div className='bg-cyan-100 w-full h-20 flex '>
    <div className='w-1/2'>
      <Link href="/"> <Image width="150" height="50" alt='logo' src='/sh_logo.png' className='text-center mt-5 ml-44 '/></Link> 
    </div>
    <div className='w-1/2 mt-5'>
         <Link href="login" className='font-{Inter} font-medium ml-80'>Login</Link>
         <Link href="signup"> <button className='bg-sky-600 rounded-full w-28 h-10 text-white ml-11 font-medium'>Post a Job</button></Link>
    </div>
    </div>
  )
}

export default Navbar
