var axios = require('axios');

var OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=90010aea3087c1dd2362979f96a68b16&units=imperial&q=';

//90010aea3087c1dd2362979f96a68b16
module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = OPEN_WEATHER_MAP_URL + location;
        console.log(requestUrl);
        return axios.get(requestUrl).then(function (res) {
            console.log(res.data.main.temp);
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }
        }, function (err){
            //throw new Error(err.response.data.message);
            throw new Error('Unable to fetch weather for that location');
        });
    }
}