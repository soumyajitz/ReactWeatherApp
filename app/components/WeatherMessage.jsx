var React = require('react');

var WeatherMessage = React.createClass({
    render: function() {
        var {location,temp} = this.props;
        return (
            <div>
                <h3>Weather Message</h3>
                <h2>It is {temp} in {location}</h2>
            </div>
        );
    }
});

module.exports = WeatherMessage;