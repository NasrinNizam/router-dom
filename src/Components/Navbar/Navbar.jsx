import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='p-5 bg-[#FF8A08]'>
        <div className="container">
            <div className="menu_row flex justify-between items-center">
                <div className="logo_col text-[30px] font-bold font-poppins text-white">logo</div>
                <div className="menu">
                    <ul className='flex gap-6 font-poppins font-semibold text-white'>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/About">About us</Link></li>
                        <li><Link to="/Contact">contact</Link></li>
                        <li><Link to="/Help">Help</Link></li>
                        <li><Link to="/Service">Service</Link></li>
                    </ul>
                </div>

            </div>
        </div>

    </nav>
  )
}
