import React, { Component } from 'react';
import LoginCard from './components/auth/login-card';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="center-card">
          <LoginCard />
        </div>
      </div>
    );
  }
}

export default App;
