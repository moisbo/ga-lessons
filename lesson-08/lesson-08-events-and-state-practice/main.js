/* DOM Manipulation: Independent Practice

To complete this excercise, you must meet the following requirements:

- When the user clicks the "#new-thing-button" button, add whatever is in the input box to the "#my-list" list.
- Only add an item if the input box is not blank.
- Clear the input box when the user clicks the button.

Your code must use these features:

- Event delegation (Utilities: http://bit.ly/js1-utilities )
- Separate State from DOM
- Use a View Template

Here are some bonus tasks to push your DOM knowledge!
- Bonus tasks:
  - When a list item is archived, change its background colour to "green"
  - Add a link to each item to delete it completely
  - Instead of deleting it completely, move it to a second list called "Archive"

*/
'use strict';

(function() {

  var container = document.querySelector('#container')
  var state = {}

  delegate('body', 'click', '#my-list', (event) => {
    event.preventDefault();
    var value = event.target.innerText
    render(value, document.getElementById('archive'));
    var parent = event.target.parentNode;
    parent.removeChild(event.target);
  });

  delegate('body', 'click', '#new-thing-button', (event) => {
    event.preventDefault();
    var value = document.getElementById('new-thing').value
    if(value){
      render(value, document.getElementById('my-list'));
    }
  })

  //View
  function render(data, into) {
    var li = document.createElement('li');
    li.innerHTML = `${data}`
    into.appendChild(li);
  }
})()
