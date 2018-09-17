import React, { Component } from 'react'

const APIkey = "452ca14a18724a1a10f983ea88bfa83a"

class Locations extends Component {
  state = {
  city: '',
  data: '',
  }

  updateCity = (city) => {
    this.setState({ city: city.trim() });
  }

  clearCity = () => {
    this.setState({ city: '' })
  }

  submitCity = (city) => {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&APPID=${APIkey}`).then(res =>
      res.json()
    ).then((data) => {
      this.setState({ data });
      console.log(this.state.data);
      this.props.dataCallback({ data: this.state.data })
    })
  }

  render(){
    return(
      <div>
        <form onSubmit={(event) => this.submitCity(event.preventDefault())}>
          <label for="city"> Showing forecast for </label>
          <input type='text'
            placeholder='Enter City Name Here'
            name='city'
            value={this.state.city}
            onChange={(event) => this.updateCity(event.target.value)}
            />
          <input type="submit" value="Submit" />
        </form>
        <h5> child: {this.state.city} </h5>

      </div>
    )
  }
}

export default Locations
