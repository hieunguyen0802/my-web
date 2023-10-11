import uniqid from 'uniqid'
import './ProjectContainer.css'
import Grid from '@material-ui/core/Grid'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'
import travelAdmin from '../../travel/admin.png'
import travelForm1 from '../../travel/form1.png'
import travelForm2 from '../../travel/form2.png'
import travelHome from '../../travel/home.png'
import travelIndex from '../../travel/index.png'


const data = [
  { img: travelAdmin },
  { img: travelForm1 },
  { img: travelForm2 },
  { img: travelHome },
]
const ProjectContainer = ({ project }) => (
  
    <div className='project'>
      <h3>{project.name}</h3>

      <Grid
        container
        direction='row'
        justifyContent='space-around'
        alignItems='center'
        item
        flexWrap='nowrap'
       
      >
        <Grid item sm={8} xs={8}>
          <div>
            <dl>
              {project.description.map((item) => (
                <li key={uniqid()} style={{ textAlign: 'left' }}>
                  {item}
                </li>
              ))}
            </dl>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <div>
            <ImageList
              style={{ flexWrap: 'nowrap', transform: 'translateZ(0)' }}
            >
              {project.imgs.map((item) => (
                <ImageListItem key={item.img} cols={2}>
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{ objectFit: 'contain' }}
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </div>
        </Grid>
      </Grid>
    </div>
  )

export default ProjectContainer
