/**
 * Modify `sleep` to execute the callback parameter `done`.
 * Execute `sleep`, passing `whenCopmlete` as the callback.
 * The expected output is:
 *
 * > I slept!
 */

function sleep(done) {
  done();
}

function whenComplete() {
  console.log('I slept!')
}

// Execute `sleep` here:

sleep(whenComplete);