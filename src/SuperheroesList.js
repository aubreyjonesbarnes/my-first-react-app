import React, { useState, useEffect } from 'react' 
//import supersData from '../src/data/batman.json'
//import supersData2 from '../src/data/ironman.json'
import SuperheroView from './SuperheroView'
import axios from 'axios'
import {List} from '@material-ui/core'
import {LazyLoad} from 'react-lazyload'
//import {ListItem, ListItemAvatar, ListItemText, ListItemSecondaryAction, Checkbox, Avatar} from '@material-ui/core'
//import { Card, CardActionArea, CardContent, CardMedia, Typography} from '@material-ui/core'
//import {batman} from './assets/images/batman.jpg' 



const Loading = () => (
  <div>
    <h4>Loading...</h4>
  </div>
)



const SuperheroesList = () => {


const [superheroData, setSuperheroData] = useState({ loading: false, heroes: [] })
const heroes = superheroData.results



const heroName = heroes.reduce((acc, hero) => {
const superPowers = acc.durability === "55" ? 'Batman' : 'Superman'
  return acc.name > hero.strength 
  ? { ...acc, superPowers}
  : { ...hero, superPowers}

}) 

const heroStats = heroes.reduce((acc, hero) => {
  //const powers = acc.durability === "55" ? 'Batman' : 'Superman'
  return acc.id > hero.id ? acc : hero.name

}) 


//const [superData, setSuperData] = useState({superHeroes: [] })
//const [loading, setLoading] = useState({ loading: false})




const fetchReps = async () => {
  setSuperheroData({loading: true})
  axios.get('https://superheroapi.com/api/10163163232998504/search/batman')
  .then(function (response) {
  console.log(response); 
  setSuperheroData({
      loading: false, 
      heroes: response.data.results.powerstats
  }).catch(function (error){ 
      console.log(error)
  })
  })
  }
  
  useEffect(() => {
  fetchReps()
  }, [])
  



return (


<div>


<h1>{heroName}</h1>
<h1>{heroStats}</h1>
<h1>{superheroData.heroes.name} Heroes!</h1> 
<h1>{superheroData.heroes.name} Heroes!</h1> 
<h1>{superheroData.heroes.length} Heroes!</h1> 
<List dense className="powerstatsList"> 
    {superheroData.heroes.map((superhero) => {
    
            return (
              <LazyLoad 
              key={superhero.intelligence + superhero.speed}
              placeholder={<Loading />}
              height={200}
              >
              <SuperheroView
              heroes={superhero}
              key={superhero.durability + superhero.power}
              
              >

              </SuperheroView>
              </LazyLoad>
            )
            })}
            </List>

</div>
  )
}

  export default SuperheroesList

