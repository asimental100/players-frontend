import React, { Component } from 'react';
import { createPlayer, fetchPositions } from './player-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: 'Pele',
        age: 79,
        injured: false,
        position_id: 4,
        positions: []
    }

    componentDidMount = async () => {
        const positionsData = await fetchPositions();

        this.setState({
            positions: positionsData.body
        })
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await createPlayer({
              name: this.state.name,
              age: this.state.age,
              injured: this.state.injured,
              position_id: this.state.position_id
            });
    
            this.setState({
              name: 'Enter Name Here',
              age: 20,
              injured: false,
              position_id: 1
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

    render() {
        return (
            <div className="content">
                <h2>CREATE!</h2>
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
                        <select onChange={this.handleInjuredChange} value={this.state.injured} >
                            <option value={true}>True</option>
                            <option value={false}>False</option>
                        </select>
                    </label>
                    <label>
                        Position:
                        <select onChange={this.handlePositionChange} value={this.state.position_id}>
                            {
                                this.state.positions.map((position) => <option value={position.id}>{position.name}</option>)
                            }
                        </select>
                    </label>
                    <button>Make New Soccer Player</button>
                </form>
            </div>
        )
    }
}
