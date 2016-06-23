/**
 * Execute the function `runningLate` 1000ms in the future
 *
 * Hint: mdn.io/setTimeout
 */

function runningLate() {
  console.log('Phew, I made it!')
}

setTimeout(()=>{
  runningLate();
},1000)
