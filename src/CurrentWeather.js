import React, { Component } from 'react'


class CurrentWeather extends Component {
  state = {
    weather: [],
    temp: [],
    humidity: [],
  }



  render(){
    return(
      <div>
        <span> Weather: {this.state.weather}</span>
        <br/>
        <span> Temperature: {this.state.temp}</span>
        <br/>
        <span> Humidity: {this.state.humidity}</span>
      </div>
    )
  }
}

export default CurrentWeather
