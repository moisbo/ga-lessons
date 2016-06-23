/**
 * Execute the `goSailing` function in such a way that the output on the console
 * reads:
 *
 * > We're sailing!
 * > We're tired now
 */

function goSailing(done) {
  console.log("We're sailing!")
  done("We're tired now")
}

// Pass an argument here which is the callback
goSailing((then)=>{
  console.log(then);
})
