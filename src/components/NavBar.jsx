import React, { useEffect, useState } from 'react'
import {cn} from '../lib/utils'
import { Menu, X } from 'lucide-react';

const navBarItems = [
  {name: 'Home', href: '#home'},
  {name: 'About', href: '#about'},
  {name: 'Skills', href: '#skills'},
  {name: 'Projects', href: '#projects'},
  {name: 'Contact', href: '#contact'}
]

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  },[])
  return (
    <nav className={cn("w-full z-40 fixed transition-all duration-300", isScrolled ? "p-3 bg-background/80 backdrop-blue-md shadow-md " : "p-5")}>
     <div className=" md:container flex items-center justify-between ">
      <a className='text-xl font-bold text-primary flex items-center'>
        <span className='relative z-10'>
          <span className='text-glow text-foreground'>Loung Hor Tech</span> Portfolio
        </span>
      </a>
     {/* for desktop menu */}
      <div className='hidden md:flex space-x-8'>
        {navBarItems.map((item, key) =>(
          <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300'>
            {item.name}
          </a>
        ))}
      </div>
      {/* for mobile menu */}

      <button className='md:hidden text-foreground p-2 z-50' onClick={() =>{
        setIsMenuOpen(prev => !prev);
      }} aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}>
        {isMenuOpen? <X size='24' /> : <Menu size='24'/>}
      </button>

      <div className={cn('md:hidden fixed inset-0 z-40 flex flex-col items-center justify-center backdrop-blur-md bg-background/95 transition-all duration-300', 
      isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      )}>
        <div className='flex flex-col space-y-8 text-xl'>
          {navBarItems.map((item, key) =>(
            <a key={key} href={item.href} className='text-foreground/80 hover:text-primary transtion-color duration-300' onClick={() =>{
              setIsMenuOpen(false);
            }}>
              {item.name}
            </a>
          ))}
        </div>
      </div>

     </div>
    </nav>
  )
}

export default NavBar