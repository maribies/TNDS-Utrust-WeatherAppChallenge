import React, { Component } from 'react'


class CurrentWeather extends Component {



  render(){
    const weatherData = this.props.weatherData;

    if (!weatherData) {
      return <div>Please enter your city for the current weather!</div>
    }
    return(
      <div>
        <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} alt={`${weatherData.weather[0].description} icon`}/>
        <br/>
        <span> Weather Description: {weatherData.weather[0].description} </span>
        <br/>
        <span> Temperature: {weatherData.main.temp} Celsius</span>
        <br/>
        <span> Humidity: {weatherData.main.humidity}</span>
      </div>
    )
  }
}

export default CurrentWeather
