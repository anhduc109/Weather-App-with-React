import React from 'react';

import Titles from './components/Titles.js';
import Form from './components/Forms.js';
import Weather from './components/Weather.js';

const API_KEY = "0021d931abac942a6b8f2a30d3e2a220";

class App extends React.Component {

  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,
  }

  getWeather = async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
    const data = await api_call.json();
    if ( city && country) {
      console.log(data);
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    }
    else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value",
      });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">

          <div className="col-md-5 title-div">
            <Titles/>
          </div>

          <div className="col-md-7 form-div">
          <Form getWeather={this.getWeather} />
          <Weather
            temperature={this.state.temperature}
            city={this.state.city}
            country={this.state.country}
            humidity={this.state.humidity}
            description={this.state.description}
            error={this.state.error}
          />
          </div>

        </div>
      </div>
    );      
  }
}

export default App;