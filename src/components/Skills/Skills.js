import uniqid from 'uniqid'
import { skills, softSkill } from '../../portfolio'
import './Skills.css'

const Skills = () => {
  if (!skills.length) return null

  return (
    <section className='section skills' id='skills'>
    <h2 className='section__title'>Expertise</h2>
      <div className='row'>
        <div className='column'>
        <h3 className='section__title'>Technical skills</h3>
          <ul className='skills__list'>
              {skills.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
        <div className='column'>
        <h3 className='section__title'>Soft skills</h3>
          <ul className='skills__list'>
              {softSkill.map((skill) => (
                <li key={uniqid()} className='skills__list-item btn btn--plain'>
                  {skill}
                </li>
              ))}
          </ul>
        </div>
      </div>
    </section>
    
  )
}

export default Skills

