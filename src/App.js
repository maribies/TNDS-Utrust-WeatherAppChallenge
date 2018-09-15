import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>
        <div className="App-container">
          <CurrentWeather/>
        </div>
      </div>
    );
  }
}

export default App;
