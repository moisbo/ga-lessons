/**
 * Pass a callback to `getTheWeather` to print out what the current weather is
 * like
 *
 * The expected output is:
 *
 * > What is the weather?
 * > Sunny!
 */

function getTheWeather(done) {
  setTimeout(() => {
    done('Sunny!')
  }, 1000)
}

// Your solution here
getTheWeather((weather)=>{
  console.log(weather);
})

console.log('What is the weather?')

