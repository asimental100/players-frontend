import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ListPage from './ListPage.js';
import CreatePage from './CreatePage.js';
import DetailPage from './DetailPage.js';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div className="App">
            <header className="App-header">
            <h1>Welcome to A Full Stack Player Selection Page</h1>
                <Router>
                    <main>
                        <div className="sidebar">
                            <div className='createDiv'>
                            <Link to='/create'>Create Player</Link>
                            </div>
                            <div className='listDiv'>
                            <Link to='/'>Main List</Link>
                            </div>
                        </div>
                        <div className="content">
                        <Switch>
                            <Route 
                                path="/" 
                                exact
                                render={(routerProps) => <ListPage {...routerProps} />} 
                            />
                            <Route 
                                path="/create" 
                                exact
                                render={(routerProps) => <CreatePage {...routerProps} />} 
                            />
                            <Route 
                                path="/detail/:id" 
                                exact
                                render={(routerProps) => <DetailPage {...routerProps} />} 
                            />
                        </Switch>
                        </div>
                    </main>
                    </Router>
            </header>
            </div>
        )
    }
}
