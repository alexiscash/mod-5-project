import React from 'react';
import './App.css';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './sketch';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar'
import HomePage from './components/HomePage'
import JournalContainer from './containers/JournalContainer';
import ResultsContainer from './containers/ResultsContainer'
import DiscoverContainer from './containers/DiscoverContainer';
import LoginPage from './components/LoginPage'
import UserContainer from './containers/UserContainer';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      users: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(users => this.setState({users}))
    .catch(err => console.error('oh no ', err));
  }

  render() {
    console.log(this.state.users);
    return (
      <div className='App'>
        <BrowserRouter>
        <div>
        <NavBar {...this.props}/>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route path='/journal' component={JournalContainer} />
          <Route path='/results' component={ResultsContainer} />
          <Route path='/discover' component={DiscoverContainer} />
          <Route path='/login' component={LoginPage} />
          </Switch>
        </div>
        </BrowserRouter>
        <UserContainer {...this.state.users[0]}/>
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
  
}

export default App;
