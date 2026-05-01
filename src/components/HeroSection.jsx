import React from 'react'
import { ArrowDown } from 'lucide-react'


const HeroSection = () => {
  return (
    <section id='home' className='min-h-screen relative z-10 flex flex-col items-center justify-center px-4'>
      <div className='container max-w-4xl mx-auto text-center '>
        <div>
          <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
            <span className=' opacity-0  animate-fade-in '>Hi,I'm</span>
            <span className='text-primary opacity-0  animate-fade-in-delay-1 '> Loung </span>
            <span className='opacity-0 animate-fade-in-delay-2 ml-2'>Hor</span>
          </h1>
          <p className='py-6 opacity-0 animate-fade-in-delay-3 text-muted-foreground'>
            I’m a frontend developer focused on building responsive and user-friendly web interfaces using HTML, CSS, JavaScript, and React. I enjoy turning ideas and UI designs into real, interactive websites. I’m continuously improving my skills by building projects and learning best practices in frontend development.
          </p>
          <div className='pt-4'>
            <a href="#projects" className='cosmic-button opacity-0 animate-fade-in-delay-4 '>
              View My Work
            </a>
          </div>
        </div>
      </div>

      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce'>
        <span className='text-sm text-muted-foreground'>scroll</span>
        <ArrowDown className='w-5  h-5 mt-2 text-primary'/>
      </div>
    </section>
  )
}

export default HeroSection