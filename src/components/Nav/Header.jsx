import Navbar from './Navbar'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBarsStaggered } from 'react-icons/fa6'

const Header = () => {
    const [menuOpened, setMenuOpened] = useState(false)
    const toggleMenu = () => setMenuOpened((prev) => !prev)

    return (
        <header className='fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadows'>
            <div className='container'>
                <div className='flexBetween py-4'>
                    {/* Logo left side */}
                    <a href="#home" className='flex flex-1'>
                        <div className='text-2xl sm:text-3xl font-bold'>
                            Porto<span className='text-secondary'>folio</span>
                        </div>
                    </a>

                    {/* Navbar right side */}
                    <div className='flex-1'>
                        <Navbar
                            containerStyles={`${menuOpened ? 'flex items-start flex-col gap-y-8 fixed top-16 right-6 p-5 bg-white rounded-xl shadow-md w-52 ring-1 ring-slate-900/5 z-50' : 'hidden xl:flex gap-x-5 xl:gap-x-10 medium-15 ring-1 ring-slate-900/5 rounded-full p-1'}`}
                            menuOpened={menuOpened}
                            toggleMenu={toggleMenu}
                        />
                    </div>

                    {/* Button Right side */}
                    <div className='flex flex-1 items-center justify-end gap-x-4 xs:gap-x-5'>
                        {/* Menu Toggle */}
                        <FaBarsStaggered onClick={toggleMenu} className='xl:hidden cursor-pointer text-xl' />

                        {/* Hire Me Button */}
                        <Link
                            to="/contact"
                            className='text-[12px] xs:text-[13px] sm:text-[14px] font-medium bg-primary 
                                     ring-1 ring-primary px-3 xs:px-4 sm:px-7 
                                     py-2 xs:py-2.5 rounded-full transition-all 
                                     duration-300 flexCenter hover:bg-primary/90'
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header