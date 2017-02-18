var axios = require('axios');

const WEATHER_MAP_URL ='http://api.openweathermap.org/data/2.5/weather?appid=643f29f9c1cd09638088516d79ecc152&units=imperial';

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var urlRequest = `${WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(urlRequest).then(successFn, errFn);

        function successFn(res) {
            if(res.data.cod && res.data.message) {
                throw new Error("City cannot be found");
            } else {
                return res.data.main.temp;
            }
        }
        function errFn(err) {
            throw new Error("City not found");
        }
    }
}