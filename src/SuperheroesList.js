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
//const heroes = superheroData.results
//commit this

/*
const heroName = heroes.reduce((acc, hero) => {
const superPowers = acc.name === "55" ? 'Batman' : 'Superman'
  return acc.description > hero.id
  ? { ...acc, superPowers}
  : { ...hero, superPowers}

}) 

const heroStats = heroes.reduce((acc, hero) => {
//const powers = acc.durability === "55" ? 'Batman' : 'Superman'
  return acc.id > hero.id ? acc : hero
  //commit this
}) 
*/

//const [superData, setSuperData] = useState({superHeroes: [] })
//const [loading, setLoading] = useState({ loading: false})




const fetchReps = async () => {
  setSuperheroData({loading: true})
  axios.get('https://gateway.marvel.com:443/v1/public/characters?apikey=3f141691c23179f84a9e5f9601bd9e01', {
    headers: {'x-api-key': process.env.REACT_APP_MARVEL_API_KEY}
  })
  .then(function (response) {
  console.log(response); 
  setSuperheroData({
      loading: false, 
      heroes: response.data.results
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
<h1>Name: {superheroData.heroes.name}</h1> 
<h1>Description: {superheroData.heroes.description}</h1> 
<h1>ID: {superheroData.heroes.id}</h1> 
<List dense className="powerstatsList"> 
    {superheroData.heroes.map((results, index) => {
    
            return (
              <LazyLoad 
              key={results.name + results.description}
              placeholder={<Loading />}
              height={200}
              >
              <SuperheroView
              heroes={results}
              key={results.id + results.comics.available}
              
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

