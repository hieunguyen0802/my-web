import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ProjectContainer from '../ExperiencesContainer/ExperiencesContainer'
import './Experiences.css'

const Projects = () => {
  if (!experiences.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>What are my Experiences ?</h2>

      <div className='projects__grid'>
        {experiences.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
