/**
 * Your forecast.io key is available as the global variable:

process.env.FORECAST_KEY

 *
 */

/**
 * We include this line to ensure `fetch()` is ready to use in node
 */
require('isomorphic-fetch');


// Your code here...
var gmaps = 'http://maps.googleapis.com/maps/api/geocode/json?address=Sydney'
var forecast = 'https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE'

var url = fetch(gmaps)
    .then((response)=>{
        return response.json()
    }).then((json)=>{
        var coords =  json.results[0].geometry.location
        var url = 'https://api.forecast.io/forecast/'+ process.env.FORECAST_KEY + '/' +coords.lat+ ',' + coords.lng
        console.log(url)
        return fetch(url)
    }).then((response)=>{
        return response.json()
    }).then((json)=>{
        console.log('Temp: ' + json.currently.temperature + ' F')
    })

//console.log(typeof url)
