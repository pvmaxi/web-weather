import React from "react";
import Info from "./components/Info";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "9989da5aa29d4c0d9e3135833220207";

class App extends React.Component {

  state = {
    temp: undefined,
    city: undefined,
    country: undefined
  }

  gettingWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const api_url = await
    fetch(`http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`)
    const data = await api_url.json();

    this.setState({
      temp: data.current.temp_c,
      city: data.location.name,
      country: data.location.country,
    });

  }

  render() {
    return(
      <div>
        <Info />
        <Form weatherMethod={this.gettingWeather} />
        <Weather 
          temp={this.state.temp}
          city={this.state.city}
          country={this.state.country}
        />
      </div>
      
    );
  }
}

export default App;
