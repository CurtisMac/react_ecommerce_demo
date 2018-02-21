import React, { Component } from 'react';
import { Switch, Link, Route } from 'react-router-dom';
import Home from './components/home';
import Shop from './components/shop';
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      username: ''
    }
  }

  addUsername = (name) => {
    this.setState({
      username: name
    })
    if (typeof (Storage) !== "undefined") {
      localStorage.setItem('username', name)
    } else {
      console.log('Sorry! No Web Storage support...')
    }
  }

componentDidMount(){
  this.setState({
    username: localStorage.username
  })
}

  render() {
    return (
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/shop'>Shop</Link>
        </nav>
        <Switch>
          <Route exact path='/' render={(routeProps) => <Home addUsername={this.addUsername} {...routeProps}/>} />
          <Route path='/shop' render={(routeProps) => <Shop username={this.state.username} {...routeProps} />} />
        </Switch>
      </div>
    )
  }
}

export default App;
