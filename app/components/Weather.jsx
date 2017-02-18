var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var ErrorModal = require('ErrorModal');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function(location) {
        var self = this;

        this.setState({
            isLoading: true,
            errMsg: undefined
        });

        openWeatherMap.getTemp(location).then(function(temp) {
            self.setState({
                location: location,
                temp: temp,
                isLoading: false,
            })
        },function(e) { 
            self.setState({
                isLoading: false,
                errMsg: e.message
            })
        });
    },
    render: function() {
        var {isLoading, location, temp, errMsg} = this.state;

        function renderMessage() {
            if(isLoading) {
                return <h2 className="text-center">Loading Data</h2>
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>;
            }
        }
        
        function renderError() {
            if (typeof errMsg === 'string') {
                return (
                    <ErrorModal message={errMsg}/>
                )
            }
        }

        return (
            <div>
                <h1 className="text-center">Get Weather </h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;