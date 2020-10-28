import React, { Component } from 'react'
import villiansData from '../src/data/joker.json'
import heroesData from '../src/data/batman.json'

const villianmembers = villiansData.results[0].members
const villians = villianmembers.filter(villianmember => villianmember.intelligence === '100')
const heromembers = heroesData.results[0].members
const heroes = heromembers.filter(heromember => heromember.intelligence === '100')


class Villians extends Component {
    render() {
        return (
            <div>
                <h1>{villianmembers.length} Villian</h1>
                <h1>Intelligence: {villians.length}</h1>
                <h1>{heromembers.length} Heroes</h1>
                <h1>Intelligence: {heroes.length}</h1>
                {
                    villianmembers.map((member, index) => {
                        return (
                            <p>
                              {member.name}  
                            </p>

                        )

                    })
                }
            </div>
        )
            }

    }





export default Villians 