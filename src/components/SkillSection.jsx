import { useState } from "react";
import {cn} from '../lib/utils'


const skill = [
  {
    name: 'HTML', level: '90', categories: 'Frontend'
  },
  {
    name: 'CSS', level: '90', categories: 'Frontend'
  },
  {
    name: 'JavaScript', level: '80', categories: 'Frontend'
  },
  {
    name: 'React', level: '80', categories: 'Frontend'
  },
  {
    name: 'PHP', level: '70', categories: 'Backend'
  },
  {
    name: 'Laravel', level: '70', categories: 'Backend'
  },
  {
    name: 'MySQL', level: '75', categories: 'Database'
  },
  {
    name: 'Git & GitHub', level: '80', categories: 'Tools'
  },
  {
    name: 'VS Code', level: '85', categories: 'Tools'
  }
]

const categorie = [
  'All', 'Frontend', 'Backend', 'Tools'
]


const SkillSection = () =>{
  const [isActiveCategories, setIsActiveCategories] = useState('All');
  console.log(isActiveCategories)
  const filterCatagorie = skill.filter((skillItem) => isActiveCategories === 'All' || skillItem.categories === isActiveCategories);

  return (
    <section id = "skills" className="relative py-24 px-4 bg-secondary/10 min-h-screen">
      <div className="conatiner mx-auto max-w-5xl text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-muted-foreground mb-12">
          My <span className="text-primary">Skills</span>
        </h2> 

        <div className='my-4 flex flex-row  mb-12 justify-center gap-4  text-muted-foreground'>
          {
            categorie.map((category,key) => (
              <button onClick={() =>{
                setIsActiveCategories(category)
              }} key={key} className={cn('px-5 py-2 rounded-full transition-colors duration-300',
                isActiveCategories == category ?
                 'bg-primary text-primary-foreground' :
                 'bg-secondary/70 text-foreground hover:bg-secondary'
              )}>
                {category}
              </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filterCatagorie.map((skillItem, key) => (
            <div key = {key} className="bg-card p-6 shadow-sm card-hover rounded-lg"
            >
              <div className="text-left ">
                <h3 className="text-muted-foreground font-semibold font-lg mb-4">
                  {skillItem.name}
                </h3>
              </div>
              <div className="w-full h-2">
                <div className="bg-primary rounded-full h-2" style = {{width: `${skillItem.level}%`}}>

                </div>
              </div>
              <div className="text-right pt-2">
                <h3 className="text-muted-foreground">{skillItem.level}%</h3>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  )
}

export default SkillSection;