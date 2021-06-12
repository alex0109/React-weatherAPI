import React from 'react';

class Form extends React.Component {

    myForm = (e) => {
        e.preventDefault();
        let elements = e.target.elements;
        let yourCity = elements['city'].value;
        console.log(yourCity);
        this.setState({ city: yourCity })
        this.props.getWeather(yourCity);
    }

    render() {
        return(
            <form onSubmit={this.myForm}>
                <div>
                    <h1>Your Weather</h1>
                    <div>
                        <p>Please enter your city: <b>{this.props.state.city}</b></p>
                        <input type="text" name="city" placeholder="Your city..." />
                        <input type="submit" />
                        <p>Temperature: <b>{this.props.state.temp}</b></p>
                        <p>Clouds: <b>{this.props.state.clouds}</b></p>
                    </div>
                </div>
            </form>
        )
    }
}

export default Form;