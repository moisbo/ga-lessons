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
// forecast = 'https://api.forecast.io/forecast/APIKEY/LATITUDE,LONGITUDE'

fetch(gmaps)
    .then((response)=>{
        return response.json()
    }).then((json)=>{
        var coords =  json.results[0].geometry.location
        var url = 'https://api.forecast.io/forecast/'+ process.env.FORECAST_KEY + '/' +coords.lat+ ',' + coords.lng
        return fetch(url)
    }).then((response)=>{
        return response.json()
    }).then((json)=>{
        var temp = ((json.currently.temperature - 32) / (9/5) ).toFixed(2)
        console.log('Temp: ' + temp + ' C') 
    }).catch((error)=>{
        console.log(error.message)
    })
