import { ArrowUp } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <section className='bg-card py-4 flex items-center justify-center gap-4 '>
      <p className='text-muted-forground text-sm  '>
        ©{new Date().getFullYear()} LoungHor.co. All right revserved.
      </p>
      <a href="#home" className='p-3 bg-primary/10 hover:bg-primary/20 rounded-full text-primary animate-bounce'>
        <ArrowUp size={16}/>
      </a>
    </section>
  )
}
export default Footer