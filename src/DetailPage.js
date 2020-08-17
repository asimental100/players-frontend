import React, { Component } from 'react';
import { fetchPlayer, deletePlayer, updatePlayer, fetchPositions } from './player-api.js';
import './App.css';

export default class DetailPage extends Component {
    state = {
        player: {},
        name: 'Pele',
        age: 79,
        injured: false,
        position_id: 4,
        positions: [],
    }

    componentDidMount = async () => {
        const data = await fetchPlayer(this.props.match.params.id)
        const positionsData = await fetchPositions();

        const matchingPosition = positionsData.body.find(position => position.name = data.body.position_name);

        this.setState({
            positions: positionsData.body,
            player: data.body,
            name: data.body.name,
            age: data.body.age,
            injured: data.body.injured,
            position: matchingPosition.id
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
             await updatePlayer(
                this.props.match.params.id, 
                {
                    name: this.state.name,
                    age: this.state.age,
                    injured: this.state.injured,
                    position_id: this.state.position_id,
                });

            const updatedPlayer = await fetchPlayer(this.props.match.params.id)
    
            this.setState({
              name: 'Pele',
              age: 79,
              injured: false,
              position_id: 1,
              player: updatedPlayer.body,
            });


        } catch(e) {
            console.log(e.message)
        }
    }

    handleNameChange = e => {
        this.setState({ name: e.target.value });
    }

    handleAgeChange = e => {
        this.setState({ age: e.target.value });
    }

    handleInjuredChange = e => {
        this.setState({ injured: e.target.value });
    }

    handlePositionChange = e => {
        this.setState({ position_id: e.target.value });
    }

    handleDelete = async () => {
        await deletePlayer(this.props.match.params.id);

        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <div>
               Here is your new {this.state.player.position_name}: Their name is {this.state.player.name} and they are {this.state.player.age} years old!
                </div>

        <h3>Update Your Created Player?</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name: 
                        <input onChange={this.handleNameChange} value={this.state.name} />
                    </label>
                    <label>
                        Age: 
                        <input onChange={this.handleAgeChange} type="number" value={this.state.age} />
                    </label>
                    <label>
                        Injured: 
                        <input onChange={this.handleInjuredChange} value={this.state.injured} />
                    </label>
                    <label>
                        Position:
                        <select onChange={this.handlePositionChange} value={this.state.position_id}>
                            {
                                this.state.positions.map((position) => <option value={position.id}>{position.name}</option>)
                            }
                        </select>
                    </label>
                    <button>Update Player</button>
                </form>
               <button style={{ background: 'crimson'}} onClick={this.handleDelete}>Delete</button>
            </div>
        )
    }
}
