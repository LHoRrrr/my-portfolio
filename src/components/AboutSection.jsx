import { GitBranch , Code, Contact, User } from 'lucide-react';
import React from 'react'

const AboutSection = () => {
  return (
    <section id='about' className="py-24 px-4 relative " >
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-muted-foreground mb-12 text-center'>
          About <span className='text-primary'>Me</span>
        </h2>

        <div className='grid grid-col-1 md:grid-cols-2 gap-14 items-center'>
          <div className='space-x-6'>

          <h3 className='text-2xl font-semibold text-muted-foreground mb-12'>
            Passion for Frontend Development
          </h3>

          <p className='text-muted-foreground mb-10'>
            I am a frontend-focused developer who enjoys building responsive and user-friendly web interfaces. I like turning ideas and UI designs into real, interactive websites using modern technologies.
          </p>

          <p className='text-muted-foreground mb-10'>
            I work with HTML, CSS, JavaScript, and React to create clean and engaging user experiences. I am continuously improving my skills by building projects and learning best practices in frontend development.
          </p>
            <div className='flex flex-col md:flex-row justify-center gap-2'>
              <a href="#contact" className='cosmic-button'>
                Get In Tocnh
              </a>

              <a href='' className='py-2 px-4 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300 font-bold'>
                Download CV
              </a>

            </div>
          </div>

          <div className='grid grid-cols-1 gap-6'>
            <div className='gradient-border p-4 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Code className='w-6 h-6 text-primary '/>
                </div>
                <div className='text-left'>
                  <h1>Web Development</h1>
                  <p>Creating responsive and interactive websites using modern web technologies.</p>
                </div>
              </div>
            </div>
            <div className='gradient-border p-4 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <User className='w-6 h-6 text-primary'/>
                </div>
                <div className='text-left'>
                  <h1>UI/UX Implementation</h1>
                  <p>
                    Translating UI designs into responsive and user-friendly interfaces with attention to usability and consistency.
                  </p>  
                </div>
              </div>
            </div>
            <div className='gradient-border p-4 card-hover'>
              <div className='flex items-start gap-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <GitBranch className='w-6 h-6 text-primary'/>
                </div>
                <div className='text-left'>
                <h1>Frontend Tools & Collaboration</h1>
                <p>
                  Using modern tools like Git and working in team environments to build, manage, and improve web projects efficiently.
                </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection;