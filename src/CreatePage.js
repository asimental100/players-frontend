import React, { Component } from 'react'
import { createPlayer } from './player-api.js';
import './App.css';

export default class CreatePage extends Component {
    state = {
        name: 'Ronaldo',
        age: 25,
        injured: false,
        position: 'attacker'
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        await createPlayer({
          name: this.state.name,
          age: this.state.age,
          injured: this.state.injured,
          position: this.state.position
        });

        this.setState({
          name: '',
          age: 1,
          injured: false,
          position: ''
        })
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
        this.setState({ position: e.target.value });
    }

    render() {
        return (
            <div className="content">
                <h2>CREATE!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                        <input onChange={this.handleNameChange} type="number" value={this.state.name} />
                    </label>
                    <label>
                        Age:
                        <input onChange={this.handleAgeChange} value={this.state.age} />
                    </label>
                    <label>
                        Injured:
                        <input onChange={this.handleAgeChange} value={this.state.injured} />
                    </label>
                    <label>
                        <select value={this.state.position} onChange={this.handlePositionChange}>
                            <option value='keeper'>Keeper</option>
                            <option value='defender'>Defender</option>
                            <option value='midfielder'>Midfielder</option>
                            <option value='attacker'>Attacker</option>
                        </select>
                    </label>
                    <button>Make Soccer Player</button>
                </form>
            </div>
        )
    }
}
