/**
 * Change the `play` function to accept a callback parameter, then instead of
 * returning a value, execute that callback within `play` so you see the output
 * on the command line:
 *
 * > My new level is 2
 * > level value is 1
 */

var level = 1

// Modify the function
function play(game, done) {
  if (game === 'Mario Bros') {
    done(level + 1)
  } else {
    done(level)
  }
}

play('Mario Bros', (newLevel) => {
  console.log('My new level is', newLevel)
})

console.log('level value is', level)
