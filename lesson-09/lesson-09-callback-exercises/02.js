/**
 * Execute the `knit` function in such a way that the output on the console
 * reads:
 *
 * > I knitted you a jumper!
 */

function knit(thing, done) {
  done('I knitted you a ' + thing)
}

// Pass the two arguments here, the second of which is the callback
knit('jumper', (text)=>{
  console.log(text)
})
