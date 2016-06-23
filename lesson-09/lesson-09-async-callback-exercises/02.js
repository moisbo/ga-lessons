/**
 * Execute `arrived` 500ms after executin `commuting`
 *
 * Expected output:
 *
 * > On my way.
 * > I made it!
 */

function commuting(done) {
  console.log('On my way.')
  done()
}

function arrived() {
  console.log('I made it!')
}

// Use `arrived` here


commuting(()=>{
  setTimeout(()=>{
    arrived()
  }, 500)
})
