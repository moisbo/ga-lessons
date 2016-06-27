/**
 * Execute `learnJS` first and output the result passed to your callback. Once
 * it is completed, execute `buildAWebsite`, outputting its result also.
 *
 * Expected output:
 *
 * > I signed up for JS1
 * > I know JS!
 * > I am a pro :D
 */

function learnJS(done) {
  setTimeout(() => {
    done('I know JS!')
  }, Math.random() * 1000)
}

function buildAWebsite(done) {
  setTimeout(() => {
    done('I am a pro :D')
  }, Math.random() * 1000)
}

// Your solution here
learnJS((msg)=>{
  console.log(msg)
  buildAWebsite(console.log)
})

console.log('I signed up for JS1')
