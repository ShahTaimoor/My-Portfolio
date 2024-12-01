import React from 'react'
import { Link } from 'react-router-dom'
import { SiMinutemailer } from "react-icons/si";
const Header = () => {
  return (
    <>
      <section>
        <header className='flex justify-between px-10 mt-4 items-center'>
          <h1 className='italic text-5xl cursor-pointer font-bold'>T</h1>
          <ul className='flex gap-4 '>
            <li className='text-2xl'><Link><SiMinutemailer /></Link></li>
          </ul>
        </header>
      </section>
    </>
  )
}

export default Header