import React from 'react'
import {Facebook, Instagram, Mail, MapPin, Phone, Twitch, Youtube, Send} from 'lucide-react';


const ContactSection = () => {
  return (
    <section id='contact' className='relative py-24 px-4'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-center font-bold text-muted-foreground text-3xl md:text-4xl mb-4 '>
          Get In <span className='text-primary'>Touch</span>
        </h2>
        <p className='m-auto text -center text-muted-forground md:w-2xl mb-10'>
          Have a project in mind or want to collaboration? Feel free to reach out. I'm always open to discussing new opportunities
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div className='space-y-8'>
            <h3 className='text-muted-forground font-bold text-2xl mb-8'>Contact Information</h3>



            <div className='flex flex-row itmes-start mb-4'>
              <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
                <Mail size={24} className= "text-primary" />
              </div>
              <div className='w-[200px]'>
                <h3 classNaame='text-center'>Email</h3>
                <a href='mailto:lounghor20@gmail.com' className='text-muted-forground hover:text-primary transition-colors duration-300'>lounghor20@gmail.com</a>
              </div>
            </div>
            <div className='flex flex-row itmes-start  mb-4'>
              <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
                <Phone size={24} className= "text-primary" />
              </div>
              <div className='w-[200px]'>
                <h3 className="text-center">Phone</h3>
                <a href='tel:88578852599'
                className='text-muted-forground hover:text-primary transition-colors duration-300'
                >+1 (885) 788-525-99</a>
              </div>
            </div>
            <div className='flex flex-row itmes-start  mb-4'>
              <div className='flex items-center justify-center bg-primary/10 p-3 rounded-full'>
                <MapPin size={24} className= "text-primary" />
              </div>
              <div>
                <h3 className='w-[200px]'>Location</h3>
                <a href='' className='text-muted-forground hover:text-primary transtion-colors duration-300'>Cambodia, Phnom Penh</a>
              </div>
            </div>
            <p className='text-muted-forground mt-10 mb-4'>Connect with me</p>
            <div className='flex items-center justify-center gap-4'>
              <a href=""><Facebook/></a>
              <a href=""><Twitch/></a>
              <a href=""><Youtube/></a>
              <a href=""><Instagram/></a>
            </div>
          </div>

          <div className='bg-card rounded-lg shadow-xl p-8 '>
            <h2 className='text-muted-forground font-semibold text-2xl mb-6'>Send a Message</h2>

            <form className='space-y-6' action="">
              <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label> 
                <input 
                  type="text" 
                  placeholder='Loung Hor...'
                  id='name'
                  name='name'
                  required
                  className='w-full rounded-lg border border-input bg-background focus:outline-hidden px-3 py-2 focus:ring-2 focus:ring-primary'/>
              </div>
              <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label> 
                <input 
                  type="email" 
                  placeholder='lounghor20@gmail.com'
                  id='email'
                  name='email'
                  required
                  className='w-full rounded-lg border border-input bg-background focus:outline-hidden px-3 py-2 focus:ring-2 focus:ring-primary'/>
              </div>
              <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Message</label> 
                <textarea 
                  placeholder="Hello, I'd like to talk about..."
                  id='message'
                  name='message'
                  required
                  className='w-full rounded-lg border border-input bg-background focus:outline-hidden px-3 py-2 focus:ring-2 focus:ring-primary resize-none'/>
              </div>
              <button type='submit' className='cosmic-button w-full flex items-center justify-center gap-2'>
                Send Message 
                <Send size={16}/>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection