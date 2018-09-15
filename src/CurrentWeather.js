import React, { Component } from 'react'

const APIkey = "452ca14a18724a1a10f983ea88bfa83a"
let location = "london"

class CurrentWeather extends Component {
  state = {
    weather: [],
    temperature: [],
    humidity: [],
  }

  componentDidMount() {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${APIkey}`).then(res =>
      res.json()
    ).then((data) => {
      this.setState({
        weather: data.weather[0].description,
        temperature: data.main.temp,
        humidity: data.main.humidity,
      });
    })
  }

  render(){
    return(
      <div>
        <span> {this.state.weather}</span>
        <span> {this.state.temperature}</span>
        <span> {this.state.humidity}</span>
      </div>
    )
  }
}

export default CurrentWeather
