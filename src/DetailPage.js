import React, { Component } from 'react'
import { fetchPlayer } from './player-api.js';

export default class DetailPage extends Component {
    state = {
        player: {}
    }

    componentDidMount = async () => {
        const data = await fetchPlayer(this.props.match.params.id)
    
        this.setState({
          player: data.body
        })
      }
    

    render() {
        return (
            <div>
               Here is the player you've selected <span role="img" aria-label="player">🎸</span>: His name is {this.state.player.name} and he is a {this.state.player.position} and he is {this.state.player.age} years old!
            </div>
        )
    }
}
