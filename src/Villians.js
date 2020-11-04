import React, { Component } from 'react'
//import villiansData from '../src/data/joker.json'
import superheroData from '..src/data/superheroData.json'
//import heroesData from '../src/data/batman.json'
import { CardMedia } from '@material-ui/core'
import { Card, CardActionArea, CardContent, Typography} from '@material-ui/core'
import {batman} from './assets/images/batman.jpg' 




//const villianmembers = villiansData.results[0].members
//const villians = villianmembers.filter(villianmember => villianmember.intelligence === '100')
//const heromembers = heroesData.results[0].members
//const heroes = heromembers.filter(heromember => heromember.intelligence === '100')


class Villians extends Component {
state = {
comics: superheroData.results[0].comics,
heroNames: superheroData.results.comics.filter(
    (comic) => comic.available === '12'
) 


}


superheroesSortHandler = () => {
const newComics = [...this.state.comics]
const sortedComics = newComics.sort((a, b) => {
    return a.superheroes - b.superheroes

})
this.setState({
    comics: sortedComics,
})

}


    render() {
        return (
            <div>
                <h1>{this.state.comics.length} Comics!</h1>

                {this.state.comics.map((member, index) => {
                        return (
                            <Card className="card">
                            <CardActionArea>
                              <CardMedia className="CardImage"
                                image={batman}
                                title="Contemplative Reptile"
                              />
                              <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                <h1>Name:</h1>
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                  <p>ID:</p>
                                </Typography>
                              </CardContent>
                            </CardActionArea>
                            </Card>
                        )

                    })
                }
            </div>
        )
            }

    }





export default Villians 