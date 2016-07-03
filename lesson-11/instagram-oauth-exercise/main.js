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
        state.image = response.data[0].images.low_resolution.url;
        state.location = response.data[0].location.name;
        state.user_name = response.data[0].user.full_name;
        state.link = response.data[0].link;
        state.created_time = response.data[0].created_time;
        state.date = new Date(state.created_time * 1000);
        var coords = {lat: response.data[0].location.latitude, lng: response.data[0].location.longitude};
        return fetch(forecastBasUrl + state.forecast_token + '/' +coords.lat+ ',' + coords.lng+ ',' + state.created_time)
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
     into.innerHTML = `
     <!-- The "not yet authorized" state -->
      <h2>What was the weather when you snapped your shot?</h2>
      <form action="${data.implicit}" method="post">
          <button type="submit">Login to Instagram</button>
        </form>
     `;
  }

  function renderImages(data, into) {
    into.innerHTML = `
      <h2>Hey, ${data.user_name} here's the weather during your shot!</h2>
      <div class="instaweather">
        <a href="${data.link}" target="_blank"><img src="${data.image}" /></a>
        The weather was: ${data.weather} &#8451 ${data.location} <br/>
        ${data.date}
      </div>
    `;
  }

  function getCookieAccessToken(){
    state.access_token = document.cookie.replace(/(?:(?:^|.*;\s*)access_token\s*\=\s*([^;]*).*$)|^.*$/, "$1")
  }
})()
