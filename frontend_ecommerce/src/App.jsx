import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import Shop from './components/Shop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  addUsername = (e, name) => {
    e.preventDefault()
    let username = name
    if (name === '') {
      return
    } else {
      this.setState({
        username
      })
      if (typeof (Storage) !== "undefined") {
        localStorage.setItem('username', name)
      } else {
        console.log('Sorry! No Web Storage support...')
      }
    }
  }

  componentDidMount() {
    this.setState({
      username: localStorage.username
    })
  }

  render() {
    return (
      <div>
        <Header username={this.state.username} />
        <Switch>
          <Route 
              exact path='/' 
              render={(routeProps) => <Home addUsername={this.addUsername} {...routeProps} />} />
          <Route 
              path='/shop' 
              render={(routeProps) => <Shop {...routeProps} />} />
        </Switch>
      </div>
    )
  }
}

export default App;
