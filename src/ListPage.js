/* eslint-disable */
import React from 'react';
import { fetchPlayers } from './player-api.js';
import { Link } from 'react-router-dom';

class ListPage extends React.Component {
  state = {
    players: []
  }

  componentDidMount = async () => {
    const data = await fetchPlayers()

    this.setState({
      players: data.body
    })
  }

  render() {
    return (
      <div className="players">
          {
            this.state.players.map((player) => {
              return <Link className="player" to={`/detail/${player.id}`} key={`${player.id}-${player.name}`}>
                <p>Name: {player.name}</p>
                <p>Age: {player.age}</p>
                <p>Injured: {player.injured ? 'True' : 'False'}</p>
                <p>Position: {player.position_name}</p>
              </Link>
            })
          }
      </div>
    )
}
}

export default ListPage;
