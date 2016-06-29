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
  var state = {}

  if (false /* TODO: did user authorize? */) {
    renderLogin(state, container)
  } else {

    // TODO: Make your fetch calls here

    renderImages(state, container)
  }

  function renderLogin(data, into) {
    // TODO: Add the template
  }

  function renderImages(data, into) {
    // TODO: Add the template
  }
})()
