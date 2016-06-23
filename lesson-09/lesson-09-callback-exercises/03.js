/**
 * Change the `shop` function to accept a callback parameter, then instead of
 * returning a value, execute that callback within `shop` so you see the output
 * on the command line:
 *
 * > Retail Therapy
 * > I bought a hat!
 */

// Modify the function
function shop(done) {
  console.log('Retail Therapy')
  done('hat!')
}

shop((purchased) => {
  console.log('I bought a', purchased)
})
