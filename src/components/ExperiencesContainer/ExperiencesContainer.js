import uniqid from 'uniqid'
import LaunchIcon from '@material-ui/icons/Launch'
import './ExperiencesContainer.css'

const ExperiencesContainer = ({ project }) => (
  <div className='project'>
    <h3>{project.name}</h3>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}
    <p className='project__description'>{project.description}</p>
    <br/>
    
    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
      
    )}
  </div>
)

export default ExperiencesContainer
