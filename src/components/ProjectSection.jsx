import {ArrowRight, ExternalLink, Github} from 'lucide-react'
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';

const projects = [ 
  {
    id: 1,
    title: 'Ecommerce Website',
    description: 'A beautiful ecommerce website with fake store API',
    image: project1,
    tage: ["React", "Fake Store API"],
    demoURL: '#',
    githubURL: 'https://github.com/LHoRrrr/ecommerce-website'
  },
  {
    id: 2,
    title: 'Ecommerce Website',
    description: 'A beautiful ecommerce website with fake store API',
    image: project2,
    tage: ["PHP", "MySQL"],
    demoURL: 'https://youtu.be/eYCghLjzks8?si=tuZvZAkgsrxCzIYP',
    githubURL: 'https://github.com/LHoRrrr/Small-Team-Project'
  }
]

const ProjectSection = () => {
  return (
    <section id ="projects" className='py-24 px-4 relative min-h-screen'>
      <div className='container mx-auto max-w-5xl mb-12 '>
        <h2 className='text-center font-bold text-muted-foreground text-3xl md:text-4xl mb-10 '>
          Featured <span className='text-primary'>Projects</span> 
        </h2>

        <p className="text-muted-foreground max-w-2xl mb-4 mx-auto">
          Here are some of my recent projects. Each project was scarefully crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6  justify-center ">
          {projects.map((project, key) => (
            <div key = {key} className="bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
              <div className="rounded-lg overflow-hidden h-48">
                <img className="w-full h-full object-cover transition-transform duration-500 " src={project.image} alt={project.title} />
              </div>
              <div className="flex flex-row gap-4  justify-center mt-8">
                {project.tage.map((tageItem, key) =>(
                  <p className=" text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 px-3 border rounded-full " key={key}>{tageItem}</p>
                ))}
              </div>
              <h3 className="font-bold text-muted-foreground text-xl mt-6">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 px-6" >{project.description}</p>
              <div className="flex flex-row justify-between items-baseline px-6 pb-6">
                <div className="flex space-x-3">
                  <a href={project.demoURL}
                  target='_blank' className="text-muted-foreground hover:text-primary transiton-colors duration-300">
                    <ExternalLink size={24} />
                  </a>
                  <a href={project.githubURL}
                  target='_blank'
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 ">
                    <Github size={24}/>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
        <div className='flex justify-center mt-12 '>
            <div className='cosmic-button'>
              <a className='flex flex-row justify-center items-center  gap-1' href="https://github.com/LHoRrrr"
              target='_blank'>
                Check My Github <ArrowRight  size={16}/>
              </a>
            </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectSection