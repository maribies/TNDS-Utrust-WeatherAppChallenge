import React, { Component } from 'react';
import './App.css';
import CurrentWeather from './CurrentWeather'
import Locations from './Locations'

class App extends Component {
  state = {
    data: ''
  }

  getData = (data) => {
    this.setState({ data: data })
  }


  render() {
    console.log(this.state.data.data)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Weather App</h1>
        </header>
        <div className="App-container">
          <Locations dataCallback={this.getData}/>
          <CurrentWeather/>
        </div>
      </div>
    );
  }
}

export default App;
