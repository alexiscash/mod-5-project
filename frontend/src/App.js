import React from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
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
      user: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        bio: 'sad boi',
        email: 'johndoe@email.com',
        username: 'JDoe',
        journals: [
          {name: 'something'}
        ],
        dates: []
      },
      defaultUser: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        bio: 'sad boi',
        email: 'johndoe@email.com',
        username: 'JDoe',
        journals: [
          {name: 'something'}
        ],
        dates: []
      }
    }
  }

  // componentDidMount() {
  //   // fetch('http://localhost:3000/users')
  //   // .then(res => res.json())
  //   // .then(users => this.setState({users}))
  //   // .catch(err => console.error('oh no ', err));
  //   localStorage.firstName = this.state.defaultUser.firstName;
  //   localStorage.lastName = this.state.defaultUser.lastName;
  //   localStorage.age = this.state.defaultUser.age;
  //   localStorage.bio = this.state.defaultUser.bio;
  // }

  logout = () => {
    localStorage.clear();
    localStorage.firstName = this.state.defaultUser.firstName;
    localStorage.lastName = this.state.defaultUser.lastName;
    localStorage.age = this.state.defaultUser.age;
    localStorage.bio = this.state.defaultUser.bio;
    this.setState({
      user: this.state.defaultUser
    })
    // console.log(localStorage);
  }

  login = (e) => {
    e.preventDefault();

    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username: e.target[0].value,
        password: e.target[1].value
      })
    }).then(res => res.json())
    .then(user => {
      if (user.status === 'success') {
        localStorage.token = user.token;
        localStorage.username = user.username;
        localStorage.firstName = user.firstName;
        localStorage.lastName = user.lastName;
        localStorage.email = user.email;
        localStorage.age = user.age;
        localStorage.journals = user.journals;
        localStorage.q = user.q;
        // localStorage = user;
        console.log(user);
        this.setState({
          user 
        })
      }
    });
  }

  render() {
    // console.log(this.state.users);
    return (
      <div className='App'>
        <BrowserRouter>
        <div>
        <NavBar {...this.props}/>
        <Switch>
          <Route exact path='/' render={() => <HomePage {...this.state.user} />} />
          <Route path='/journal' render={() => <JournalContainer journals={this.state.user.journals} />} />
          <Route path='/results' component={ResultsContainer} />
          <Route path='/discover' component={DiscoverContainer} />
          {/* <Route path='/login' component={LoginPage} history={this.history} logout={this.logout} /> */}
          <Route path='/login' render={() => <LoginPage logout={this.logout} login={this.login} />} history={this.history} />
        </Switch>
        </div>
        </BrowserRouter>
        <UserContainer {...this.state.user}/>
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
  
}

export default App;
