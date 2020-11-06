import React, { useState, useEffect } from 'react' 
//import supersData from '../src/data/batman.json'
//import supersData2 from '../src/data/ironman.json'
//import superheroData from '../src/data/superheroData.json'
import SuperheroView from './SuperheroView'
import axios from 'axios'
import {List} from '@material-ui/core'
import {LazyLoad} from 'react-lazyload'
import {ListItem, ListItemAvatar, Avatar} from '@material-ui/core'
import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core'
import {batman} from './assets/images/batman.jpg' 



const Loading = () => (
  <div>
    <h4>Loading...</h4>
  </div>
)



const SortinghatList = () => {


const [harrypotterData, setHarrypotterData] = useState({ loading: false, houses: [] })
//const heroes = superheroData.results
//commit this


//const [superData, setSuperData] = useState({superHeroes: [] })
//const [loading, setLoading] = useState({ loading: false})


const fetchHouses = async () => {
  setHarrypotterData({loading: true})
  axios
  .get(`https://www.potterapi.com/v1/houses`, {
    headers: {'key': process.env.REACT_APP_HP_API_KEY }
  })
  .then(function (response) {
  console.log(response.data) 
  setHarrypotterData({
      loading: false, 
      houses: response.data[0].name
    })
  }).catch(function (error){ 
      console.log(error)
  })
  }
  
  useEffect(() => {
  //fetchHouses()
  }, [])
  



return (


<div>

<List dense className="hpList"> 
    {harrypotterData.houses.map((house, index) => {
    
            return (
              <LazyLoad 
              key={house.name + house.mascot}
              placeholder={<Loading />}
              height={200}
              >
              <SuperheroView
              houses={house}
              key={house.headOfHouse + house.founder}
              
              >

              </SuperheroView>
              </LazyLoad>
            )
            })}
            </List>

<Card className="superheroCard">
      <CardActionArea>
      <ListItem>
      <ListItemAvatar>
            <Avatar className="superheroAvatar"
            alt={'Batman'}
            src={batman}
            />
            </ListItemAvatar>
            </ListItem>
        <CardContent className="cardContentInfo">
          <Typography variant="body2" color="textSecondary" component="p">
          {harrypotterData.houses.name}
          {harrypotterData.houses.mascot}
          {harrypotterData.houses.headOfHouse}
          {harrypotterData.houses.founder}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>

</div>
  )
}

  export default SortinghatList

