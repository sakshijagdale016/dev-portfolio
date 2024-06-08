import React, { useState } from 'react'
import data_projects from './data/projects_data'
import ProjectCard from './ProjectCard'
const Projects = () => {
  const [projects,setProjects] = useState(data_projects);
  const handleFilterCategory = (name) =>{
    const newArray = data_projects.filter(project =>project.category.includes(name))
    setProjects(newArray)

  }


  return (
    <div className='container projects'>
    <div className='projects_navbar'>
      <div onClick={()=>setProjects(data_projects)}>All</div>
      <div onClick={()=>handleFilterCategory('react.js')}>React</div>
      <div onClick={()=>handleFilterCategory('node.js')} >Node js</div>
      <div onClick={()=>handleFilterCategory('mongoDB')} >MongoDB</div>
      <div onClick={()=>handleFilterCategory('vanilla')}>Vanilla</div>
    </div>
      <div className='row'>
        {
          projects.map(project =>
          <ProjectCard key={project.name} project={project}/>
          )
        }


      </div>
    </div>
  )
}

export default Projects