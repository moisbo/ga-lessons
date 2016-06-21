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
    state.value = event.target.innerText
    state.color = '';
    event.target.parentNode.removeChild(event.target);
    render(state, document.getElementById('archive'));
  });

  delegate('body', 'click', '#new-thing-button', (event) => {
    event.preventDefault();
    var newThing = document.getElementById('new-thing');
    state.value = newThing.value;
    state.color = 'green';
    if(newThing){
      newThing.value = '';
      render(state, document.getElementById('my-list'));
    }
  })
  
  function render(data, into) {
    var li = document.createElement('li');
    li.innerHTML = data.value
    li.style.backgroundColor = data.color;
    into.appendChild(li);
  }
})()
