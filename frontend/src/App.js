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
import SciencePage from './components/SciencePage';

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
          {id: '234'}
        ],
        dates: [],
        q: []
      },
      defaultUser: {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        bio: 'sad boi',
        email: 'johndoe@email.com',
        username: 'JDoe',
        journals: [
          {id: 345}
        ],
        dates: [],
        q: []
      }
    }
  }

  componentDidMount() {
    if (localStorage.token) {
      // console.log('there is a token');
      fetch(`http://localhost:3000/users/${localStorage.id}`, {
        headers: {
          "Authorization": `Bearer ${localStorage.token}`
        }
      })
      .then(res => res.json())
      .then(user => {
        this.setState({user});
      });
    }
  }

  range = (start, end) => {
    if(start === end) return [start];
    return [start, ...this.range(start + 1, end)];
  }

  logout = () => {
    localStorage.clear();
    localStorage.firstName = this.state.defaultUser.firstName;
    localStorage.lastName = this.state.defaultUser.lastName;
    localStorage.age = this.state.defaultUser.age;
    localStorage.bio = this.state.defaultUser.bio;
    localStorage.username = this.state.defaultUser.username;
    localStorage.journals = this.state.defaultUser.journals
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
        localStorage.id = user.id;
        // localStorage.journals = user.journals;
        // localStorage.q = user.q;
        // console.log(user);
        this.setState({
          user 
        })
      }
    });
    e.target.reset();
    // this.history.push('/home');
  }

  signup = (e) => {
    e.preventDefault();
    // debugger;
    const [ firstName, lastName, username, age, email, password ] = this.range(0,5).map(i => e.target[i].value)
    fetch('http://localhost:3000/users/register', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            firstName,
            lastName,
            username,
            age,
            email,
            password
        })
    })
    .then(res => res.json())
    .then(user => {
      if (user.status === 'success') {
        console.log(user);
        localStorage.firstName = user.firstName;
        localStorage.lastName = user.lastName;
        localStorage.username = user.username;
        localStorage.id = user.id;
        localStorage.age = user.age;
        localStorage.token = user.token;
        localStorage.email = user.email
        localStorage.journals = user.journals;
        this.setState({user})
      }
    });
    
}

  render() {
    return (
      <div className='App'>
        <BrowserRouter>
          <NavBar logout={this.logout}/>
          <Switch>
              <Route exact path='/' render={() => <HomePage {...this.state.user} />} />
              <Route path='/journal' render={() => <JournalContainer {...this.state.user} />} />
              <Route path='/results' render={() => <ResultsContainer journals={this.state.user.journals} dates={this.state.user.dates} />} />
              <Route path='/discover' component={DiscoverContainer} />
              <Route path='/science' component={SciencePage} />
              <Route path='/login' render={(history) => <LoginPage logout={this.logout} login={this.login} history={history} signup={this.signup} />}  />
          </Switch>
        </BrowserRouter>
        <UserContainer {...this.state.user}/>
        <P5Wrapper sketch={sketch} />
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
  
}

export default App;
