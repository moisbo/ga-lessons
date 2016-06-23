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

  var container = document.querySelector('#container');
  var state = {
    list:[],
    archive:[]
  };

  delegate('body', 'click', '#new-thing-button', (event) => {
    event.preventDefault();
    var newThing = document.getElementById('new-thing');
    if(newThing.value !== ''){
      var li = `<li class="the-new-thing">${newThing.value}</li>`;
      state.list.push(li);
      newThing.value = '';
      render(state, container);
    }
  })
  
  delegate('#container', 'click', '.the-new-thing', (event) => {
    event.preventDefault();
    console.log(event.target);
    var li = `<li class="old-thing">${event.target.text}</li>`;
    state.archive.push(li);
    render(state, container);
  })
  
  function render(data, into) {
    into.innerHTML = `
      <ul id="my-list">
        ${data.list.join('')}
      </ul>
      <h2>Archive list</h2>
      <ul id="archive">
        ${data.archive.join('')}
      </ul>
      <form>
        <input id="new-thing" />
        <input id="new-thing-button" type="submit" value="Create new thing"></submit>
      </form>
    `;    
  }

  render(state, container);

})();
