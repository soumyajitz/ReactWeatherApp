var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            location: 'Kolkata',
            temp: 59
        }
    },
    handleSearch: function(location) {
        var self = this;

        openWeatherMap.getTemp(location).then(function(temp) {
            self.setState({
                location: location,
                temp: temp
            })
        },function(errMsg) { 
            alert(errMsg);
        });
    },
    render: function() {
        var {location, temp} = this.state;
        return (
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}/>
                <WeatherMessage temp={temp} location={location}/>
            </div>
        );
    }
});

module.exports = Weather;