/**
 * Instagram OAuth Exercise
 * ====
 *
 * See the README.md for instructions
 */

(function() {

  var forecastBasUrl = 'https://crossorigin.me/https://api.forecast.io/forecast/'
  var instagramBasUrl = 'https://crossorigin.me/https://api.instagram.com/v1/'
  var container = document.querySelector('#container')
  var state = {
    loggedIn: false,
    implicit: 'https://api.instagram.com/oauth/authorize/?client_id=7eb3fec1f6b24b44b9040f63100e0664&redirect_uri=http://localhost:3000&response_type=token',
    image: '',
    weather: '',
    access_token: '',
    forecast_token: '6b8fd117e596df1c84341a552084a87f',
    location:''
  }

  state.access_token = window.location.hash.substr(14);
  if(state.access_token){
    document.cookie = 'access_token=' + state.access_token;
  }else{
    getCookieAccessToken();
  }

  if (!state.access_token) {      
    renderLogin(state, container)
  } else {

    // TODO: Make your fetch calls here
    fetch(instagramBasUrl + 'users/self/media/recent?access_token=' + state.access_token)
      .then((response)=>{
        return response.json();
      }).then((response)=>{
        console.log(response)
        state.image = response.data[2].images.low_resolution.url;
        state.location = response.data[2].location.name;
        state.user_name = response.data[2].user.full_name;
        state.link = response.data[2].link;
        var coords = {lat: response.data[2].location.latitude, lng: response.data[2].location.longitude};
        return fetch(forecastBasUrl + state.forecast_token + '/' +coords.lat+ ',' + coords.lng)
      }).then((response)=>{
        return response.json();
      }).then((response)=>{
         var temp = ((response.currently.temperature - 32) / (9/5) ).toFixed(2)
         state.weather = temp;
        renderImages(state, container)
      }).catch((error)=>{
        console.log(error)
      })
    
  }

  function renderLogin(data, into) {
    // TODO: Add the template
     into.innerHTML = `
     <!-- The "not yet authorized" state -->
      <h2>What was the weather when you snapped your shot?</h2>
      <form action="${data.implicit}" method="post">
          <button type="submit">Login to Instagram</button>
        </form>
     `;
  }

  function renderImages(data, into) {
    // TODO: Add the template
    into.innerHTML = `
      <h2>Hey, ${data.user_name} here's the weather during your shot!</h2>
      <div class="instaweather">
        <a href="${data.link}" target="_blank"><img src="${data.image}" /></a>
        The weather was: ${data.weather} &#8451 ${data.location}
      </div>
    `;
  }

  function getCookieAccessToken(){
    state.access_token = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  }
})()
