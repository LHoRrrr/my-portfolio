import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import { Star } from 'lucide-react'
import StarBackground from '../components/StarBackground'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import SkillSection from '../components/SkillSection'
import ProjectSection from '../components/ProjectSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/* Theme Toggle */}
        <ThemeToggle />
        {/* Background Effects */}
        <StarBackground />
        {/* Navbar */}
        <NavBar/>
        {/* Main Content */}
        <main >
          <HeroSection/>
          <AboutSection/>
          <SkillSection/>
          <ProjectSection/>
          <ContactSection/>
          <Footer/>
        </main>
        {/* footer */}
      </div>
    </>
  )
}

export default Home