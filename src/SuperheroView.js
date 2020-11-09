import React from 'react'
//import supersData from '../src/data/batman.json'
//import supersData2 from '../src/data/ironman.json'
//import SortingHatList from '.SortinghatList'
//import {List} from '@material-ui/core'
import LazyLoad from 'react-lazyload'
import {
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Avatar,
} from '@material-ui/core'
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from '@material-ui/core'
import batman from './assets/images/batman.jpg'

const Loading = () => (
  <div>
    <h4>Loading...</h4>
  </div>
)

//const [superData, setSuperData] = useState({superHeroes: [] })
//const [loading, setLoading] = useState({ loading: false})

const SuperheroView = (props) => {
  //const hero = props.hero
  console.log(props.houses)
  const house = props.houses
  //test commit
  //const superheroName = superhero.appearance === null ? '' : superhero.strength

  return (
    <div>
      <ListItem button>
        <ListItemAvatar>
          <LazyLoad once={true} alt='...'>
            <Avatar alt={'Avatar'} placeholder={<Loading />} src={batman} />
          </LazyLoad>
        </ListItemAvatar>
        <ListItemText primary={house.name} />
        <ListItemSecondaryAction>
          <Checkbox edge='end' />
        </ListItemSecondaryAction>
      </ListItem>

      <Card className='card'>
        <CardActionArea>
          <CardMedia
            className='CardImage'
            image={batman}
            title='Contemplative Reptile'
          />
          <CardContent>
            <Typography gutterBottom variant='h5' component='h2'>
              Name: {house.name}
            </Typography>
            <Typography variant='body2' color='textSecondary' component='p'>
              ID: {house._id}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  )
}

export default SuperheroView
