import React from 'react';
import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3000/users')
    .then(res => res.json())
    .then(console.log)
    .catch(err => console.error('oh no ', err));
  }

  render() {
    return (
      <div className='App'>
        ayyy lmao
      </div>
    );
  }
  
}

export default App;
