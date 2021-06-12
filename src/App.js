import React from 'react';
import Form from './component/Form';

const api = 'ab1f82573e4aeaa664a1c2118a4f0b24';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      temp: '',
      clouds: '',
    }
    this.getWeather();
  }

  getWeather = (myCity) => {
    if(!myCity) return myCity
    this.setState({ city: myCity})
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${myCity}&units=metric&appid=${api}`)
      .then((data) => data.json())
      .then((data) => {
        this.setState({ temp: data.main.temp })
        this.setState({ clouds: data.weather[0].description })
        console.log(this.state.temp);
        console.log(this.state.clouds);
      })
  }

  render() {
    return(
      <Form getWeather={this.getWeather} state={this.state}/>
    )
  }
}

export default App;